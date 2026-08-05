# Prints reais dos projetos

Coloque aqui os screenshots e aponte para eles em `src/content/projetos.ts`
(campo `imagem` de cada peça). Enquanto o campo estiver vazio, o site desenha
o mockup em CSS no lugar — nada quebra.

## Nomes sugeridos

| Arquivo | Peça | Proporção ideal |
|---|---|---|
| `sublime-loja.png` | Sublime → Loja | 16:10 (ex. 1280×800) |
| `sublime-dashboard.png` | Sublime → Dashboard do vendedor | 16:10 (ex. 1280×800) |
| `sublime-app.png` | Sublime → TupperStore | 9:19.5 (ex. 420×900) |
| `kronos-escala.png` | Kronos → Central web | 16:10 (ex. 1280×800) |
| `kronos-ponto.png` | Kronos → Meu ponto | 16:10 (ex. 1280×800) |
| `kronos-app.png` | Kronos → Kronos App | 9:19.5 (ex. 420×900) |

## Como apontar

```ts
// src/content/projetos.ts
{
  nome: "Loja",
  mockup: "loja",
  imagem: "/prints/sublime-loja.png",   // ← só isso
  ...
}
```

## Dicas para o print ficar bom

- Tire em tela cheia, sem barra de favoritos e sem abas pessoais.
- Use o **tema escuro** dos sistemas — combina com o fundo do portfólio.
- Popule com dados de demonstração plausíveis; evite nome, CPF e telefone de
  clientes reais (a página é pública).
- Para o app, use o print do próprio celular (ou emulador) sem a moldura — a
  moldura já é desenhada pelo site.
