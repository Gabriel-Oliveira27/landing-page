import { NextRequest, NextResponse } from 'next/server';
import { cofre } from '@/lib/cofre';
import { perfil } from '@/conteudo/perfil';

export const dynamic = 'force-dynamic';

/**
 * Pedido de contato.
 *
 * Grava no Neon, de onde o painel do Prospecta recolhe. O visitante
 * não precisa saber disso: para ele é um formulário que respondeu.
 *
 * ── SOBRE SER PÚBLICO ─────────────────────────────────────────
 * Endpoint aberto que ESCREVE em banco. As travas abaixo existem
 * porque, sem elas, um script enche a tabela numa tarde e a caixa de
 * entrada vira lixo — e o Gabriel perde os pedidos de verdade no
 * meio.
 */

const MAX = { nome: 120, contato: 120, negocio: 160, mensagem: 1500 };

// Mesma janela do assistente. Pessoa nenhuma manda três pedidos em um
// minuto; script manda trinta.
const JANELA_MS = 60_000;
const MAX_POR_JANELA = 3;
const visitas = new Map<string, number[]>();

function excedeu(ip: string) {
  const agora = Date.now();
  const recentes = (visitas.get(ip) ?? []).filter((t) => agora - t < JANELA_MS);
  recentes.push(agora);
  visitas.set(ip, recentes);
  if (visitas.size > 500) {
    for (const [k, v] of visitas) if (!v.some((t) => agora - t < JANELA_MS)) visitas.delete(k);
  }
  return recentes.length > MAX_POR_JANELA;
}

export async function POST(req: NextRequest) {
  const bd = cofre();
  if (!bd) {
    // Sem banco configurado o pedido não tem onde cair. Melhor dizer
    // isso e mandar para o WhatsApp do que fingir que foi enviado.
    return NextResponse.json(
      {
        erro:
          'O formulário está fora do ar agora. ' +
          `Chame no WhatsApp: ${perfil.contato.whatsappExibicao}.`,
      },
      { status: 503 },
    );
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'desconhecido';

  if (excedeu(ip)) {
    return NextResponse.json(
      { erro: 'Muitos envios seguidos. Espere um minuto.' },
      { status: 429 },
    );
  }

  let c: Record<string, unknown>;
  try {
    c = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ erro: 'pedido malformado' }, { status: 400 });
  }

  // Armadilha para robô: um campo que nenhum humano vê e portanto
  // nenhum humano preenche. Responde 200 de propósito — dizer "achei
  // que você é robô" ensina o robô a contornar.
  if (typeof c.sobrenome === 'string' && c.sobrenome.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const texto = (v: unknown, limite: number) =>
    typeof v === 'string' ? v.trim().slice(0, limite) : null;

  const nome = texto(c.nome, MAX.nome);
  const contato = texto(c.contato, MAX.contato);

  if (!nome || !contato) {
    return NextResponse.json(
      { erro: 'Preencha o nome e um telefone ou e-mail.' },
      { status: 400 },
    );
  }

  try {
    const { rows } = await bd.query(
      `INSERT INTO pedido_contato (nome, contato, negocio, mensagem, origem, conversa, pagina)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
      [
        nome,
        contato,
        texto(c.negocio, MAX.negocio),
        texto(c.mensagem, MAX.mensagem),
        c.origem === 'assistente' ? 'assistente' : 'formulario',
        // A conversa do assistente, quando veio de lá. Limita o
        // tamanho: histórico gigante enviado de fora é jeito fácil de
        // encher a tabela.
        Array.isArray(c.conversa) ? JSON.stringify(c.conversa.slice(-14)) : null,
        texto(c.pagina, 200),
      ],
    );
    return NextResponse.json({ ok: true, id: rows[0].id });
  } catch (erro) {
    console.error('[contato]', (erro as Error).message);
    return NextResponse.json(
      {
        erro:
          'Não consegui registrar agora. ' +
          `Chame no WhatsApp: ${perfil.contato.whatsappExibicao}.`,
      },
      { status: 502 },
    );
  }
}
