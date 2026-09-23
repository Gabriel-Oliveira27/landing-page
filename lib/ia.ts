/**
 * Ponte para os modelos.
 *
 * Versão enxuta do roteador do Prospecta: mesma ideia de fila com
 * queda para o reserva, sem o registro de gasto em banco — esta
 * vitrine não tem banco, e é bom que continue assim.
 *
 * Só provedor gratuito.
 */

type Provedor = 'gemini' | 'groq';

const FILA: { provedor: Provedor; modelo: string }[] = [
  { provedor: 'gemini', modelo: 'gemini-flash-latest' },
  { provedor: 'groq', modelo: 'openai/gpt-oss-20b' },
];

const ENDPOINTS: Record<Provedor, { url: string; chave: () => string | undefined }> = {
  gemini: {
    url: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',
    chave: () => process.env.GEMINI_API_KEY,
  },
  groq: {
    url: 'https://api.groq.com/openai/v1/chat/completions',
    chave: () => process.env.GROQ_API_KEY,
  },
};

// Os dois provedores raciocinam antes de responder, e esses tokens
// saem do mesmo orçamento da resposta. Sem folga, o modelo gasta tudo
// pensando e devolve conteúdo vazio — falha silenciosa que parece
// resposta em branco.
const FOLGA_RACIOCINIO = 700;

export type Fala = { papel: 'usuario' | 'agente'; texto: string };

export class ErroIA extends Error {}

export async function conversa(
  sistema: string,
  historico: Fala[],
  maxTokens = 300,
): Promise<string> {
  let ultimoErro = 'desconhecido';

  for (const { provedor, modelo } of FILA) {
    const chave = ENDPOINTS[provedor].chave();
    if (!chave) {
      ultimoErro = `${provedor}: sem chave`;
      continue;
    }

    const controle = new AbortController();
    const alarme = setTimeout(() => controle.abort(), 25_000);

    try {
      const r = await fetch(ENDPOINTS[provedor].url, {
        method: 'POST',
        headers: { 'content-type': 'application/json', authorization: `Bearer ${chave}` },
        body: JSON.stringify({
          model: modelo,
          max_tokens: maxTokens + FOLGA_RACIOCINIO,
          messages: [
            { role: 'system', content: sistema },
            ...historico.map((f) => ({
              role: f.papel === 'usuario' ? 'user' : 'assistant',
              content: f.texto,
            })),
          ],
        }),
        signal: controle.signal,
      });

      const bruto = await r.text();
      if (!r.ok) {
        ultimoErro = `${provedor} ${r.status}`;
        continue;
      }

      const corpo = JSON.parse(bruto) as {
        choices?: { message?: { content?: string } }[];
      };
      const texto = corpo.choices?.[0]?.message?.content?.trim();
      if (!texto) {
        ultimoErro = `${provedor} respondeu vazio`;
        continue;
      }
      return texto;
    } catch (erro) {
      ultimoErro =
        erro instanceof Error && erro.name === 'AbortError'
          ? `${provedor}: demorou demais`
          : `${provedor}: ${(erro as Error).message}`;
    } finally {
      clearTimeout(alarme);
    }
  }

  throw new ErroIA(ultimoErro);
}
