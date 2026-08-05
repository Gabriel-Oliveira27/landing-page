/**
 * ─────────────────────────────────────────────────────────────────────────────
 * DADOS PESSOAIS — edite só este arquivo para atualizar o site inteiro.
 *
 * Tudo marcado com  // ⚠️ CONFIRMAR  foi inferido dos repositórios (e-mail do
 * git, README do Sublime, remote do GitHub). Revise antes de publicar.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const perfil = {
  nome: "Gabriel Oliveira",
  iniciais: "GO",
  titulo: "Desenvolvedor Full-Stack",
  // Aparece logo abaixo do nome, no hero.
  chamada: "Construo produtos completos — web, dashboard e app — do banco de dados à loja publicada.",
  resumo:
    "Trabalho o produto inteiro: modelagem de dados, API, painel administrativo, loja para o cliente final e aplicativo Android. Next.js e React Native de ponta a ponta, com autenticação própria, controle de permissões, auditoria e deploy em produção.",
  local: "Ceará, Brasil", // ⚠️ CONFIRMAR
  disponibilidade: "Disponível para projetos e vagas",

  contato: {
    email: "gab.oliveirab27@gmail.com",
    whatsapp: "5588988568911",
    whatsappExibicao: "(88) 98856-8911",
    github: "https://github.com/Gabriel-Oliveira27",
    linkedin: "", // ⚠️ PREENCHER — deixe vazio para esconder o link
    curriculoPdf: "", // ⚠️ opcional — coloque o PDF em /public e aponte aqui: "/curriculo-gabriel-oliveira.pdf"
  },

  /** Mensagem já preenchida ao abrir o WhatsApp. */
  whatsappMensagem: "Olá, Gabriel! Vi seu portfólio e queria conversar sobre um projeto.",
} as const;

/** Números do topo do hero — só coisas verificáveis nos repositórios. */
export const numeros = [
  { valor: "2", rotulo: "produtos completos", detalhe: "Sublime e Kronos, em produção" },
  { valor: "5", rotulo: "aplicações publicadas", detalhe: "3 web + 2 apps Android" },
  { valor: "198", rotulo: "commits versionados", detalhe: "120 no Sublime + 78 no Kronos" },
  { valor: "100%", rotulo: "código próprio", detalhe: "sem template, sem biblioteca de UI pronta" },
];

/**
 * Currículo — experiência e formação.
 * ⚠️ PREENCHER: substitua pelos seus dados reais. Deixei a estrutura montada e
 * os dois projetos já preenchidos com as datas reais dos repositórios.
 */
export const trajetoria = [
  {
    periodo: "jun/2026 — hoje",
    cargo: "Kronos — sistema de ponto e escalas",
    organizacao: "Projeto próprio · em produção",
    descricao:
      "Central web com RBAC de 4 papéis, escalas de equipe, cálculo de saldo de horas, base de conhecimento e auditoria — mais o app Android offline-first que sincroniza o ponto.",
  },
  {
    periodo: "2025 — 2026",
    cargo: "Sublime — plataforma de e-commerce",
    organizacao: "Cliente · em produção",
    descricao:
      "Loja, dashboard do vendedor e app de gestão. Checkout em 4 etapas, PIX, parcelamento, cupons, cálculo de frete por geolocalização e rastreio de pedidos.",
  },
  {
    periodo: "⚠️ ano — ano",
    cargo: "⚠️ Cargo / função",
    organizacao: "⚠️ Empresa ou instituição",
    descricao: "⚠️ Uma ou duas linhas sobre o que você fez e qual foi o resultado.",
  },
];

export const formacao = [
  {
    periodo: "⚠️ ano — ano",
    curso: "⚠️ Curso / graduação",
    instituicao: "⚠️ Instituição",
  },
];

/** Blocos de habilidades — usados na seção "Stack". */
export const stack = [
  {
    area: "Front-end",
    itens: ["React 19", "Next.js 15/16", "TypeScript", "Tailwind CSS v4", "CSS Modules", "PWA"],
  },
  {
    area: "Mobile",
    itens: ["React Native", "Expo SDK 56", "EAS Build", "SQLite local", "Push notifications", "Biometria"],
  },
  {
    area: "Back-end",
    itens: ["Next.js API Routes", "Prisma 7", "PostgreSQL", "Neon serverless", "Zod", "JWT (jose)"],
  },
  {
    area: "Infra & ferramentas",
    itens: ["Vercel", "Cloudinary", "Git", "bcrypt", "CORS/RBAC", "ExcelJS · jsPDF"],
  },
];
