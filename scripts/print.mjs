/**
 * Tira print de uma URL e salva em public/prints/.
 * Ferramenta de desenvolvimento — sem dependência nenhuma além do Node.
 *
 *   node scripts/print.mjs <url> <nome-do-arquivo> [largura] [altura]
 *
 * Exemplos:
 *   node scripts/print.mjs https://sublime-react.vercel.app sublime-loja
 *   node scripts/print.mjs http://localhost:3002 projetta-site 1280 800
 *
 * Vai por CDP em vez de `--screenshot` porque o Chrome não abre janela mais
 * estreita que ~500px e ignora window-size pequeno — e porque aqui dá para
 * esperar a página assentar antes de fotografar.
 */
import { spawn } from "node:child_process";
import { mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";

const CHROME =
  process.env.CHROME_BIN ??
  "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PORTA = 9412;
const DESTINO = path.join(process.cwd(), "public", "prints");

const [url, nome, larguraArg, alturaArg] = process.argv.slice(2);
if (!url || !nome) {
  console.error("uso: node scripts/print.mjs <url> <nome> [largura] [altura]");
  process.exit(1);
}
const largura = Number(larguraArg ?? 1280);
const altura = Number(alturaArg ?? 800);

const ESCALA = 1.5;
const ESPERA = Number(process.env.ESPERA_MS ?? 12000);

const espera = (ms) => new Promise((r) => setTimeout(r, ms));

function conectar(endereco) {
  const ws = new WebSocket(endereco);
  const pendentes = new Map();
  let id = 1;
  ws.addEventListener("message", (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pendentes.has(m.id)) {
      const { res, rej } = pendentes.get(m.id);
      pendentes.delete(m.id);
      if (m.error) rej(new Error(m.error.message));
      else res(m.result);
    }
  });
  return {
    pronto: new Promise((r) => ws.addEventListener("open", r)),
    enviar: (method, params = {}) =>
      new Promise((res, rej) => {
        const i = id++;
        pendentes.set(i, { res, rej });
        ws.send(JSON.stringify({ id: i, method, params }));
      }),
    fechar: () => ws.close(),
  };
}

async function main() {
  await mkdir(DESTINO, { recursive: true });
  const perfil = path.join(DESTINO, "_perfil-chrome");

  const chrome = spawn(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--remote-debugging-port=${PORTA}`,
    `--user-data-dir=${perfil}`,
    "about:blank",
  ]);
  chrome.stderr.on("data", () => {});

  let alvo;
  for (let i = 0; i < 40 && !alvo; i++) {
    try {
      const lista = await (await fetch(`http://127.0.0.1:${PORTA}/json/list`)).json();
      alvo = lista.find((t) => t.type === "page");
    } catch {
      /* subindo */
    }
    if (!alvo) await espera(250);
  }
  if (!alvo) throw new Error("Chrome não respondeu");

  const cdp = conectar(alvo.webSocketDebuggerUrl);
  await cdp.pronto;
  await cdp.enviar("Page.enable");
  // 1.5x dá nitidez suficiente em tela retina sem o arquivo explodir:
  // a 2x, um print de 1280x800 sai com mais de 4 MB em PNG.
  await cdp.enviar("Emulation.setDeviceMetricsOverride", {
    width: largura,
    height: altura,
    deviceScaleFactor: ESCALA,
    mobile: false,
  });

  await cdp.enviar("Page.navigate", { url });
  // Espera generosa e configurável: loja com dados vindos de serverless em cold
  // start levava mais de 6s e o print saía com "Carregando produtos...".
  await espera(ESPERA);

  // Confere se ainda há indicador de carregamento visível antes de fotografar.
  const pendente = await cdp.enviar("Runtime.evaluate", {
    expression: `/carregando|loading/i.test(document.body.innerText)`,
    returnByValue: true,
  });
  if (pendente.result.value) {
    console.warn("AVISO: a página ainda mostra 'carregando' — esperando mais 8s");
    await espera(8000);
  }

  // JPEG em vez de PNG: é foto de interface, não gráfico com transparência.
  const { data } = await cdp.enviar("Page.captureScreenshot", {
    format: "jpeg",
    quality: 82,
    clip: { x: 0, y: 0, width: largura, height: altura, scale: ESCALA },
  });

  const arquivo = path.join(DESTINO, `${nome}.jpg`);
  await writeFile(arquivo, Buffer.from(data, "base64"));

  cdp.fechar();
  chrome.kill();
  await rm(perfil, { recursive: true, force: true }).catch(() => {});

  const kb = (Buffer.from(data, "base64").length / 1024).toFixed(0);
  console.log(`public/prints/${nome}.jpg · ${largura}x${altura}@${ESCALA}x · ${kb} kB`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
