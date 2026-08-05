# Portfólio — Gabriel Oliveira

Landing page que funciona como currículo e galeria de projetos, com foco em três
públicos ao mesmo tempo: cliente que quer um sistema sob medida, cliente que quer
licenciar Sublime/Kronos, e recrutador avaliando o perfil.

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4.
Página 100% estática — sem banco, sem API, sem variável de ambiente.

---

## ⚠️ O que falta preencher

Tudo está marcado com `⚠️` no código. São 6 itens:

| Onde | O quê |
|---|---|
| `src/content/perfil.ts` | `contato.linkedin` — URL do seu perfil (deixe `""` para esconder o link) |
| `src/content/perfil.ts` | `local` — confirmar "Ceará, Brasil" |
| `src/content/perfil.ts` | `trajetoria[2]` — sua experiência anterior (ou apague o item) |
| `src/content/perfil.ts` | `formacao[0]` — curso e instituição |
| `src/content/perfil.ts` | `contato.curriculoPdf` — opcional; PDF em `/public`, o botão só aparece se preenchido |
| `src/content/projetos.ts` | URL do **dashboard do vendedor** (Sublime) e do **Kronos web** — links sem URL somem sozinhos |

Os prints reais entram depois, sem mexer em componente: veja
[`public/prints/LEIA-ME.md`](public/prints/LEIA-ME.md).

---

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Publicar na Vercel

1. Suba o repositório no GitHub.
2. Importe na Vercel — ela detecta Next.js sozinha.
3. Deploy. Não há variáveis de ambiente para configurar.

Para usar um domínio próprio, é só apontar em Settings → Domains.

---

## Estrutura

```
src/
  content/
    perfil.ts        ← dados pessoais, contato, trajetória, stack
    projetos.ts      ← projetos, peças, destaques, serviços, princípios
  app/
    layout.tsx       fontes, metadata, script anti-flicker do tema
    page.tsx         monta as seções na ordem
    globals.css      tokens de tema (claro/escuro) e utilidades próprias
    icon.svg         favicon (monograma com gradiente das duas marcas)
  components/
    secoes/          Cabecalho · Hero · Projetos · Processo · Servicos · Sobre · Contato · Rodape
    mockups/
      Telas.tsx      mockups em CSS (dashboard, loja, escala, celular)
      Tela.tsx       usa o print real se existir; senão, o mockup
    ui/              Botao · Secao · Marca · TrocarTema · Revelar
  lib/links.ts       monta links de WhatsApp e e-mail com mensagem pronta
```

### Como o conteúdo se organiza

Todo texto do site sai de `src/content/`. **Nenhuma alteração de conteúdo exige
mexer em componente** — adicionar um terceiro projeto, por exemplo, é só empurrar
um objeto no array `projetos` com as mesmas chaves.

Cada projeto tem uma cor (`cor` e `corSecundaria`) que vira a variável CSS
`--projeto` dentro da sua seção. É ela que pinta chips, ícones, gráficos e
mockups — por isso Sublime aparece em rosa e Kronos em azul sem nenhuma
duplicação de componente.

### Tema claro/escuro

O padrão é escuro. Um script inline no `layout.tsx` resolve o tema antes da
primeira pintura (lê `localStorage`, cai na preferência do sistema), então não
existe flash de tela branca. O toggle fica no header.

---

## Decisões de design

- **Cor só onde importa.** A base é neutra; a cor entra nas seções de projeto e
  nos gradientes do hero. Isso deixa Sublime e Kronos visualmente distintos sem
  o site virar um arco-íris.
- **Mockups em código, não imagens.** Carregam instantâneo, acompanham o tema
  claro/escuro e não ficam desatualizados. São substituíveis por prints reais em
  um campo de texto.
- **Números verificáveis.** Os contadores do hero saem dos repositórios (120 + 78
  commits, 5 aplicações). Nada de "+50 projetos entregues".
- **Um CTA por público.** WhatsApp para cliente, `#sobre` para recrutador — a
  seção "Trabalhar comigo" separa os três caminhos em vez de misturar tudo.
