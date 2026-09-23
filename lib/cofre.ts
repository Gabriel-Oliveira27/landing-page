import { Pool } from 'pg';

/**
 * A caixa de correio.
 *
 * A vitrine não tem banco — e é bom que continue assim. A única
 * coisa que ela precisa gravar é pedido de contato, e isso vai para
 * o Neon, de onde o painel do Prospecta recolhe quando o Gabriel
 * abre a tela de Entrada.
 *
 * Os dois lados nunca se falam direto: a Vercel não alcança a
 * máquina dele, e a máquina dele não fica ligada o tempo todo. O
 * Neon fica no meio e resolve os dois problemas de uma vez.
 *
 * Pool no globalThis porque em desenvolvimento o Next recarrega o
 * módulo a cada save, e sem o cache você abre uma pool nova por
 * alteração até o Postgres recusar conexão.
 */
const global_ = globalThis as unknown as { _cofre?: Pool };

export function cofre(): Pool | null {
  if (!process.env.NEON_URL) return null;
  global_._cofre ??= new Pool({
    connectionString: process.env.NEON_URL,
    // A vitrine grava pouco e raramente. Duas conexões sobram, e
    // segurar mais é desperdiçar o compute que o plano gratuito conta.
    max: 2,
    // O Neon dorme depois de 5 min parado; a primeira consulta depois
    // disso espera ele acordar, o que leva alguns segundos.
    connectionTimeoutMillis: 15_000,
  });
  return global_._cofre;
}
