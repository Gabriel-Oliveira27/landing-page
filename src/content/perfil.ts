/**
 * ─────────────────────────────────────────────────────────────────────────────
 * DADOS PESSOAIS — edite só este arquivo para atualizar o site inteiro.
 *
 * O que ainda estiver marcado com  // ⚠️ CONFIRMAR  precisa da sua resposta.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const perfil = {
  nome: "Gabriel Oliveira",
  iniciais: "GO",
  titulo: "Desenvolvedor Full-Stack",
  // Aparece logo abaixo do nome, no hero.
  chamada:
    "Trabalho com suporte técnico de dia e construo produtos completos — web, painel e app — no resto do tempo.",
  resumo:
    "Construo o produto inteiro sozinho: modelagem de dados, API, painel administrativo, site para o cliente final e aplicativo Android. Next.js e React Native de ponta a ponta, com autenticação própria, controle de permissões, auditoria e deploy em produção. Nenhum template, nenhuma biblioteca de UI pronta.",
  local: "Iguatu, Ceará",
  disponibilidade: "Disponível para projetos freelance",

  contato: {
    email: "gab.oliveirab27@gmail.com",
    whatsapp: "5588988568911",
    whatsappExibicao: "(88) 98856-8911",
    github: "https://github.com/Gabriel-Oliveira27",
    linkedin: "https://www.linkedin.com/in/gabriel-bezerra-6ba04223b",
    curriculoPdf: "", // opcional — coloque o PDF em /public e aponte aqui
  },

  /** Mensagem já preenchida ao abrir o WhatsApp. */
  whatsappMensagem:
    "Olá, Gabriel! Vi seu portfólio e queria conversar sobre um projeto.",
} as const;

/**
 * Números do topo do hero.
 *
 * Todos conferidos nos repositórios em 25/08/2026. Se for atualizar, confira de
 * novo — número inflado num portfólio quebra na primeira pergunta.
 */
export const numeros = [
  { valor: "6", rotulo: "projetos próprios", detalhe: "do banco de dados ao deploy" },
  { valor: "11", rotulo: "aplicações construídas", detalhe: "sites, painéis e 2 apps Android" },
  { valor: "260", rotulo: "commits versionados", detalhe: "142 Sublime · 95 Kronos · 23 nos demais" },
  { valor: "100%", rotulo: "código próprio", detalhe: "sem template, sem biblioteca de UI pronta" },
];

/**
 * Trajetória profissional.
 *
 * A ordem é do mais recente para o mais antigo — o componente pinta o primeiro
 * item com a cor de destaque.
 */
export const trajetoria = [
  {
    periodo: "nov/2025 — hoje",
    cargo: "Analista de Suporte Técnico",
    organizacao: "Zenir Móveis e Eletros",
    descricao:
      "Atendimento e resolução de chamados de TI para a operação da rede. É desse dia a dia que nasceu o Kronos: a rotina de plantão, escala e controle de ponto que eu vivo é exatamente o problema que o sistema resolve.",
  },
  {
    periodo: "fev/2025 — nov/2025",
    cargo: "Atendente de Lojas",
    organizacao: "Zenir Móveis e Eletros",
    descricao:
      "Efetivado ao fim do contrato de aprendizagem, no atendimento ao cliente em loja — antes da transferência para a área de suporte técnico.",
  },
  {
    periodo: "dez/2023 — dez/2024",
    cargo: "Jovem Aprendiz",
    organizacao: "Zenir Móveis e Eletros",
    descricao:
      "Primeira experiência formal. Um ano de contrato de aprendizagem concluído, seguido de efetivação.",
  },
];

export const formacao = [
  {
    periodo: "cursando · 2º semestre",
    curso: "Técnico em Informática",
    instituicao: "IFCE — Campus Iguatu",
  },
  {
    periodo: "contínuo",
    curso: "Trilhas de front-end, back-end e mobile",
    instituicao: "Udemy e cursos on-line",
  },
];

/**
 * Uma linha honesta sobre a situação atual, usada na seção "Sobre".
 * É o que responde, antes de perguntarem, "há quanto tempo você faz isso?".
 */
export const contextoAtual =
  "Estudo Técnico em Informática, trabalho com suporte técnico e desenvolvo por conta própria. Nenhum dos projetos abaixo foi encomendado — cada um nasceu de um problema que eu quis resolver e foi levado até o deploy. O Kronos, feito para a rotina de plantão que eu vivo, é usado hoje pelo setor de suporte onde trabalho para montar a escala da equipe.";

/** Blocos de habilidades — usados na seção "Stack". */
export const stack = [
  {
    area: "Front-end",
    itens: ["React 19", "Next.js 15/16", "TypeScript", "Tailwind CSS v4", "CSS Modules", "PWA"],
  },
  {
    area: "Mobile",
    itens: ["React Native", "Expo", "EAS Build", "SQLite local", "Push notifications", "Biometria"],
  },
  {
    area: "Back-end",
    itens: ["Next.js API Routes", "Prisma 7", "PostgreSQL", "Neon serverless", "Zod", "JWT (jose)"],
  },
  {
    area: "Infra & ferramentas",
    itens: ["Vercel", "Cloudinary", "Git", "bcrypt", "CORS/RBAC", "Python · PyInstaller"],
  },
];
