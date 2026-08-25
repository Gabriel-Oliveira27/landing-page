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
    "Trabalho com suporte técnico durante o dia. No resto do tempo eu construo software: site, painel e aplicativo.",
  resumo:
    "Faço o produto inteiro sozinho, do banco de dados até o aplicativo instalado no celular. Isso inclui a API, o painel de quem administra e o site que o cliente final usa. Trabalho com Next.js e React Native, sempre com login próprio, controle de permissão e o sistema publicado de verdade. Não uso template nem biblioteca de interface pronta.",
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
  { valor: "260", rotulo: "commits versionados", detalhe: "142 no Sublime, 95 no Kronos, 23 nos outros" },
  { valor: "100%", rotulo: "código próprio", detalhe: "sem template e sem biblioteca de interface" },
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
      "Atendo e resolvo chamados de TI da operação da rede. O Kronos nasceu daqui. A rotina de plantão, escala e controle de ponto que eu vivo todo dia é o mesmo problema que o sistema resolve.",
  },
  {
    periodo: "fev/2025 — nov/2025",
    cargo: "Atendente de Lojas",
    organizacao: "Zenir Móveis e Eletros",
    descricao:
      "Efetivado ao fim do contrato de aprendizagem, no atendimento ao cliente em loja, até a transferência para o suporte técnico.",
  },
  {
    periodo: "dez/2023 — dez/2024",
    cargo: "Jovem Aprendiz",
    organizacao: "Zenir Móveis e Eletros",
    descricao:
      "Primeira experiência formal. Concluí o ano de contrato e fui efetivado em seguida.",
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
  "Curso Técnico em Informática no IFCE, trabalho no suporte técnico da Zenir e desenvolvo por conta própria. Nenhum dos projetos abaixo foi encomendado por alguém. Cada um começou de um problema que eu quis resolver e foi até o fim, com o sistema publicado. O Kronos saiu da minha própria rotina de plantão, e hoje o setor onde trabalho usa ele para montar a escala.";

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
