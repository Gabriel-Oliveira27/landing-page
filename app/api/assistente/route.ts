import { NextRequest, NextResponse } from 'next/server';
import { conversa, ErroIA, type Fala } from '@/lib/ia';
import { projetos } from '@/conteudo/projetos';
import { perfil } from '@/conteudo/perfil';

export const dynamic = 'force-dynamic';

/**
 * O assistente da vitrine.
 *
 * É a lógica de encaixe do Prospecta virada para fora: lá eu pergunto
 * "qual projeto serve para esta empresa"; aqui a própria pessoa
 * descreve o negócio dela e recebe a resposta.
 *
 * ── SOBRE SER PÚBLICO ─────────────────────────────────────────
 * Este endpoint gasta cota de modelo e qualquer um na internet pode
 * chamá-lo. As travas abaixo não são paranoia: sem elas, um script
 * bobo esvazia a cota gratuita numa tarde e o assistente fica fora do
 * ar justo quando um cliente de verdade chegar.
 *
 * O limite por IP mora em memória, o que numa função serverless
 * significa "por instância, até ela ser reciclada". É uma trava
 * fraca — mas as outras três (teto de mensagens, de caracteres e de
 * tokens) não dependem de estado e seguram o custo por chamada, que
 * é o que realmente importa.
 */

const MAX_MENSAGENS = 12;
const MAX_CARACTERES = 600;
const MAX_TOKENS_RESPOSTA = 320;

// Janela por IP. Números pensados para uma pessoa conversando à
// vontade não esbarrar, e um laço automático esbarrar na hora.
const JANELA_MS = 60_000;
const MAX_POR_JANELA = 8;

const visitas = new Map<string, number[]>();

function excedeu(ip: string): boolean {
  const agora = Date.now();
  const recentes = (visitas.get(ip) ?? []).filter((t) => agora - t < JANELA_MS);
  recentes.push(agora);
  visitas.set(ip, recentes);

  // Faxina preguiçosa: sem isto o Map cresce para sempre numa
  // instância de vida longa.
  if (visitas.size > 500) {
    for (const [chave, marcas] of visitas) {
      if (!marcas.some((t) => agora - t < JANELA_MS)) visitas.delete(chave);
    }
  }

  return recentes.length > MAX_POR_JANELA;
}

const SISTEMA = [
  `Você é o assistente do site do ${perfil.nome}, desenvolvedor em ${perfil.local}.`,
  'Ele faz site, loja on-line e sistema para comércio do interior do Ceará.',
  '',
  'SEU TRABALHO: descobrir o que o visitante vende e como vende hoje, e dizer qual dos',
  'projetos abaixo serve para o caso dele. Se nenhum servir, diga isso e sugira o que',
  'daria para construir.',
  '',
  'COMO FALAR:',
  '- Português brasileiro, simples. Quem lê é dono de comércio, não programador.',
  '- Nada de "solução", "plataforma", "ecossistema", "transformação digital".',
  '- No máximo 3 frases por resposta. Respostas longas não são lidas no celular.',
  '- Texto puro. Nada de markdown: sem **negrito**, sem listas com hífen, sem títulos.',
  '- Faça UMA pergunta por vez. Interrogatório de cinco perguntas espanta.',
  '- Se ainda não souber o ramo do negócio, pergunte isso primeiro.',
  '- Quando recomendar, diga o nome do projeto e por que ele serve, em uma frase.',
  '- Termine apontando a página do projeto ou o WhatsApp.',
  '',
  'LIMITES — importantes:',
  '- NUNCA invente preço, prazo ou desconto. Se perguntarem, diga que isso o Gabriel',
  '  fala direto, e aponte o WhatsApp.',
  '- NUNCA prometa resultado de vendas.',
  '- Só afirme sobre os projetos o que está na lista abaixo.',
  '- NUNCA escreva um endereço que não esteja na lista abaixo. Nem um parecido, nem um',
  '  que "deveria existir". Link inventado leva a pessoa a uma página de erro.',
  '- Se perguntarem algo fora de site, loja e sistema, diga que não é a sua área e',
  '  volte ao assunto.',
  '',
  // Cada projeto entra com a página dele, que SEMPRE existe. Antes só
  // os que tinham demo traziam endereço, e o modelo preenchia a falta
  // inventando: recomendou a loja on-line e mandou para "/demo/loja",
  // que nunca existiu. Sem lacuna não há o que inventar.
  'PROJETOS (use exatamente estes endereços):',
  ...projetos.map(
    (p) =>
      `- ${p.nome} → /projetos/${p.slug}` +
      ` · ${p.chamada} Serve para: ${p.para.join(', ')}.` +
      (p.demo ? ` Tem demonstração para testar.` : ''),
  ),
  '',
  `WhatsApp do Gabriel: ${perfil.contato.whatsappExibicao}.`,
].join('\n');

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'desconhecido';

  if (excedeu(ip)) {
    return NextResponse.json(
      { erro: 'Muitas mensagens seguidas. Espere um minuto — ou chame no WhatsApp, que é mais rápido.' },
      { status: 429 },
    );
  }

  let historico: Fala[];
  try {
    const corpo = (await req.json()) as { historico?: Fala[] };
    historico = corpo.historico ?? [];
  } catch {
    return NextResponse.json({ erro: 'pedido malformado' }, { status: 400 });
  }

  if (!Array.isArray(historico) || !historico.length) {
    return NextResponse.json({ erro: 'sem mensagem' }, { status: 400 });
  }

  if (historico.length > MAX_MENSAGENS) {
    return NextResponse.json(
      {
        erro:
          'Já conversamos bastante e eu vou repetir daqui para frente. ' +
          `Chame o Gabriel no WhatsApp: ${perfil.contato.whatsappExibicao}.`,
      },
      { status: 409 },
    );
  }

  // Corta no servidor, não só no formulário: quem chama a API direto
  // não passa pelo formulário.
  const limpo: Fala[] = historico.map((f) => ({
    papel: f.papel === 'agente' ? 'agente' : 'usuario',
    texto: String(f.texto ?? '').slice(0, MAX_CARACTERES),
  }));

  try {
    const texto = await conversa(SISTEMA, limpo, MAX_TOKENS_RESPOSTA);
    return NextResponse.json({ texto });
  } catch (erro) {
    if (erro instanceof ErroIA) {
      console.error('[assistente]', erro.message);
      return NextResponse.json(
        {
          erro:
            'O assistente está fora do ar agora. ' +
            `Chame o Gabriel direto no WhatsApp: ${perfil.contato.whatsappExibicao}.`,
        },
        { status: 503 },
      );
    }
    return NextResponse.json({ erro: 'algo deu errado' }, { status: 500 });
  }
}
