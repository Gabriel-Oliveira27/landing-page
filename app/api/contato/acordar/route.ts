import { NextResponse } from 'next/server';
import { cofre } from '@/lib/cofre';

export const dynamic = 'force-dynamic';

/**
 * Acorda o banco antes de alguém precisar dele.
 *
 * O Neon suspende o compute depois de 5 minutos parado e leva alguns
 * segundos para voltar. Num formulário de contato isso cai no pior
 * lugar possível: a pessoa clica em Enviar, a tela fica parada, e
 * ela clica de novo ou desiste — bem no momento em que ela já
 * decidiu falar com você.
 *
 * A saída é acordar antes. Quando alguém TOCA no primeiro campo, o
 * front dispara isto e segue a vida. Enquanto a pessoa digita nome,
 * telefone e mensagem — meio minuto, no mínimo — o banco levanta. No
 * envio, ele já está de pé.
 *
 * O gasto é proporcional ao interesse: só acorda por gente que
 * começou a preencher, que é exatamente quem vale acordar. Ninguém
 * cutuca de segundo em segundo, então o banco continua dormindo o
 * resto do dia e as 100 CU-horas do mês sobram.
 */

// Uma pessoa preenche um formulário de cada vez. Este teto existe
// para um script não transformar o pré-aquecimento num jeito barato
// de manter o banco acordado de graça.
const JANELA_MS = 60_000;
const MAX_POR_JANELA = 4;
const toques = new Map<string, number[]>();

export async function GET(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'desconhecido';

  const agora = Date.now();
  const recentes = (toques.get(ip) ?? []).filter((t) => agora - t < JANELA_MS);
  recentes.push(agora);
  toques.set(ip, recentes);
  if (toques.size > 300) {
    for (const [k, v] of toques) if (!v.some((t) => agora - t < JANELA_MS)) toques.delete(k);
  }
  if (recentes.length > MAX_POR_JANELA) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  const bd = cofre();
  if (!bd) return NextResponse.json({ ok: false });

  const inicio = Date.now();
  try {
    await bd.query('SELECT 1');
    return NextResponse.json({ ok: true, ms: Date.now() - inicio });
  } catch {
    // Falhar aqui não importa: é só aquecimento. Se o banco estiver
    // mesmo fora, quem avisa é o envio — e ele manda para o WhatsApp.
    return NextResponse.json({ ok: false, ms: Date.now() - inicio });
  }
}
