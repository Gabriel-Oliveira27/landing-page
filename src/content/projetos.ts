/**
 * ─────────────────────────────────────────────────────────────────────────────
 * PROJETOS — a galeria do site.
 *
 * Cada projeto tem "peças" (as aplicações que o compõem). Cada peça pode ter
 * um print real em `imagem`; enquanto estiver vazio, o site desenha um mockup
 * em código no lugar. Para trocar: salve o print em /public/prints/ e escreva
 * imagem: "/prints/kronos-dashboard.png".
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type TipoMockup = "dashboard" | "loja" | "celular" | "escala";

export type Peca = {
  nome: string;
  tipo: string;
  descricao: string;
  mockup: TipoMockup;
  imagem?: string;
  destaques: string[];
};

export type Projeto = {
  slug: string;
  nome: string;
  tagline: string;
  descricao: string;
  periodo: string;
  status: string;
  contexto: string;
  /** Cor de destaque do projeto (hex) — pinta títulos, chips e mockups. */
  cor: string;
  corSecundaria: string;
  numeros: { valor: string; rotulo: string }[];
  pecas: Peca[];
  destaquesTecnicos: { titulo: string; descricao: string }[];
  stack: string[];
  links: { rotulo: string; url: string; tipo: "primario" | "secundario" }[];
};

export const projetos: Projeto[] = [
  {
    slug: "sublime",
    nome: "Sublime",
    tagline: "Plataforma de e-commerce completa",
    descricao:
      "Uma operação de venda inteira em três aplicações que conversam pela mesma API: a loja onde o cliente compra, o dashboard onde o vendedor administra e o app Android que avisa a cada pedido novo e traça a rota da entrega.",
    periodo: "2025 — 2026",
    status: "Em produção",
    contexto: "Cliente real · venda de produtos Tupperware",
    cor: "#E84D82",
    corSecundaria: "#B89EE8",
    numeros: [
      { valor: "3", rotulo: "aplicações integradas" },
      { valor: "4", rotulo: "etapas de checkout" },
      { valor: "12x", rotulo: "parcelamento no cartão" },
      { valor: "120", rotulo: "commits" },
    ],
    pecas: [
      {
        nome: "Loja",
        tipo: "Web · Next.js 15",
        descricao:
          "Catálogo com filtros por linha, capacidade e preço, agrupamento por variação de cor, carrinho persistente e checkout em 4 etapas com PIX, dinheiro ou cartão parcelado.",
        mockup: "loja",
        imagem: "",
        destaques: [
          "Frete calculado por geolocalização do CEP (ViaCEP + Nominatim)",
          "Cupons com desconto ou frete grátis, validados no servidor",
          "Rastreio do pedido por código ou CPF, com timeline de status",
          "CSS Modules puro — nenhuma biblioteca de UI, bundle enxuto",
        ],
      },
      {
        nome: "Dashboard do vendedor",
        tipo: "Web · PWA instalável",
        descricao:
          "Painel separado da loja, com permissões por usuário: estoque, pedidos, cupons, clientes, configurações de pagamento, descontos e tabelas de frete.",
        mockup: "dashboard",
        imagem: "",
        destaques: [
          "Permissões granulares por recurso (estoque.editar, cupons.editar…)",
          "Upload de imagens de produto direto para o Cloudinary",
          "Quatro modelos de frete: por valor, por km, fixo ou por cidade",
          "Instalável como PWA, com service worker próprio",
        ],
      },
      {
        nome: "TupperStore",
        tipo: "App Android · Expo",
        descricao:
          "O painel de vendas no bolso, com duas coisas que a web não faz: notificação push a cada pedido novo e um botão que abre o Google Maps na rota da entrega.",
        mockup: "celular",
        imagem: "",
        destaques: [
          "Push de novo pedido disparado pelo backend da loja",
          "CRUD de estoque completo, com câmera/galeria para a foto",
          "Bloqueio por biometria, PIN ou padrão do aparelho",
          "6 temas espelhando o dashboard, salvos no dispositivo",
        ],
      },
    ],
    destaquesTecnicos: [
      {
        titulo: "Estoque sem furo",
        descricao:
          "Baixa de estoque e criação do pedido acontecem na mesma transação atômica do banco — dois clientes comprando a última unidade ao mesmo tempo não geram venda fantasma.",
      },
      {
        titulo: "Autenticação própria",
        descricao:
          "JWT assinado com jose, senha em bcrypt, rate limit de 10 tentativas por 15 minutos e comparação em tempo constante contra timing attack. Sem OAuth de terceiros.",
      },
      {
        titulo: "Entrada validada na borda",
        descricao:
          "Todo endpoint valida o corpo com Zod antes de tocar no banco, e CPF, telefone e e-mail passam por sanitização antes de qualquer consulta.",
      },
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Prisma 7",
      "PostgreSQL (Neon)",
      "Expo / React Native",
      "Cloudinary",
      "Zod",
      "JWT",
      "Vercel",
    ],
    links: [
      { rotulo: "Ver a loja", url: "https://sublime-react.vercel.app", tipo: "primario" },
      // ⚠️ PREENCHER: URL do dashboard do vendedor publicado.
      { rotulo: "Dashboard do vendedor", url: "", tipo: "secundario" },
    ],
  },

  {
    slug: "kronos",
    nome: "Kronos",
    tagline: "Ponto, escalas e conhecimento da equipe",
    descricao:
      "Central web onde a empresa monta a escala do mês e acompanha o ponto do time, mais um app Android que funciona 100% offline e sincroniza as batidas quando dá. Feito para uma equipe que trabalha em plantão, com sábado de meio expediente e folga compensada.",
    periodo: "jun/2026 — hoje",
    status: "Em produção · app v1.1.6",
    contexto: "Equipe de suporte técnico em regime de plantão",
    cor: "#2563EB",
    corSecundaria: "#22C55E",
    numeros: [
      { valor: "4", rotulo: "papéis de acesso" },
      { valor: "44h", rotulo: "regra de jornada automatizada" },
      { valor: "3", rotulo: "formatos de exportação" },
      { valor: "78", rotulo: "commits em 1 mês" },
    ],
    pecas: [
      {
        nome: "Central web",
        tipo: "Web · PWA · Next.js 16",
        descricao:
          "Calendário mensal editável, visão de fim de semana em formato de planilha e exportação da escala em Excel, PDF ou PNG — mais usuários, auditoria e base de conhecimento.",
        mockup: "escala",
        imagem: "",
        destaques: [
          "RBAC de 4 papéis conferido contra o banco a cada request",
          "Exportação em xlsx (ExcelJS), PDF (jsPDF) e PNG (html-to-image)",
          "Auditoria unificada: alterações, acessos, erros e registros excluídos",
          "Escala pública somente leitura, liberada por palavra secreta",
        ],
      },
      {
        nome: "Meu ponto",
        tipo: "Web · área do colaborador",
        descricao:
          "Registro de batidas e cálculo de saldo com a regra real da empresa: 8h de segunda a sexta, 4h no sábado, sábado de folga descontando 4h, plantão e home office abonados.",
        mockup: "dashboard",
        imagem: "",
        destaques: [
          "Saldo semanal e mensal calculado no servidor",
          "Datas gravadas em UTC explícito — sem registro perdido na virada do dia",
          "Modelos de horário reutilizáveis com aviso por dia da semana",
          "Temas claro, escuro e noturno com cores personalizáveis por usuário",
        ],
      },
      {
        nome: "Kronos App",
        tipo: "App Android · offline-first",
        descricao:
          "Quatro batidas por dia, tudo salvo em SQLite no aparelho. Notificação com ação direta — 'Bati o ponto', 'Não bati ainda', 'Adiar 5 min' — sem precisar abrir o app.",
        mockup: "celular",
        imagem: "",
        destaques: [
          "Funciona sem internet; sincroniza de forma incremental por cursor",
          "Relatórios semanais e mensais com gráfico de horas x meta",
          "Exportação em CSV pelo compartilhamento do sistema",
          "Releases versionadas com atualização checada pelo app",
        ],
      },
    ],
    destaquesTecnicos: [
      {
        titulo: "Fuso horário resolvido de verdade",
        descricao:
          "Datas gravadas e consultadas em UTC explícito. Batida registrada à meia-noite não some do relatório nem pula de dia — o bug clássico de sistema de ponto, tratado na origem.",
      },
      {
        titulo: "Permissão em camadas",
        descricao:
          "Não são quatro dashboards separados: todo mundo tem a base (escala, ponto, conhecimento) e os papéis elevados ganham seções extras na mesma sidebar. Mudar o papel de alguém tem efeito imediato.",
      },
      {
        titulo: "Sincronização incremental",
        descricao:
          "O app manda só o que mudou desde o último cursor de atualização, e o servidor sempre amarra o registro ao dono da sessão — celular offline por dias sobe tudo sem duplicar.",
      },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Prisma 7",
      "Neon Postgres",
      "Expo / React Native",
      "SQLite",
      "ExcelJS · jsPDF",
      "Vercel",
    ],
    links: [
      // ⚠️ PREENCHER: URL da Vercel do Kronos web.
      { rotulo: "Acessar o Kronos", url: "", tipo: "primario" },
      {
        rotulo: "Baixar o APK (v1.1.6)",
        url: "https://github.com/Gabriel-Oliveira27/kronos/releases/download/app-v1.1.6/kronos-1.1.6.apk",
        tipo: "secundario",
      },
    ],
  },
];

/** Seção "Como eu construo" — o que os dois projetos têm em comum. */
export const principios = [
  {
    titulo: "Do banco ao app publicado",
    descricao:
      "Schema, migrations, API, painel, front do cliente e build do APK. Não entrego só a tela: entrego o sistema funcionando em produção.",
  },
  {
    titulo: "Segurança como padrão",
    descricao:
      "Autenticação própria com JWT e bcrypt, rate limit no login, permissões checadas no servidor, CORS restrito e toda entrada validada com Zod.",
  },
  {
    titulo: "Interface sem template",
    descricao:
      "Nenhum Bootstrap, nenhum Material UI. Componentes escritos do zero, o que deixa o bundle menor, o carregamento mais rápido e o visual realmente do cliente.",
  },
  {
    titulo: "Rastro de tudo",
    descricao:
      "Auditoria de alterações, acessos e erros. Quando alguém pergunta 'quem mudou isso?', a resposta está no sistema, não na memória de ninguém.",
  },
  {
    titulo: "Pensado para o celular",
    descricao:
      "PWA instalável e app nativo quando faz diferença — push de pedido, biometria, rota no mapa e funcionamento offline.",
  },
  {
    titulo: "Documentação junto",
    descricao:
      "Arquitetura, referência de endpoints, guia de customização e troubleshooting versionados com o código. Quem pegar depois consegue continuar.",
  },
];

/** Seção "Trabalhar comigo" — os três caminhos de contratação. */
export const servicos = [
  {
    titulo: "Sistema sob medida",
    resumo: "Você tem um processo que hoje vive em planilha, WhatsApp ou papel.",
    descricao:
      "Construo do zero, como fiz com o Kronos: modelagem, painel web, app quando fizer sentido e deploy. Você fica com o código.",
    itens: ["Escopo fechado por etapas", "Painel web + app Android", "Deploy e domínio configurados", "Código e documentação entregues"],
    cta: "Pedir um orçamento",
    destaque: true,
  },
  {
    titulo: "Licenciar um sistema pronto",
    resumo: "Sublime e Kronos já existem e podem ser adaptados para o seu negócio.",
    descricao:
      "A base está pronta e testada em produção. Adapto identidade visual, regras de negócio e integrações — sai muito mais rápido e mais barato que começar do zero.",
    itens: ["Identidade visual do seu negócio", "Regras e campos adaptados", "Migração dos seus dados", "Publicação na sua conta"],
    cta: "Ver como funciona",
    destaque: false,
  },
  {
    titulo: "Entrar no seu time",
    resumo: "Vaga full-stack, CLT ou PJ, presencial ou remoto.",
    descricao:
      "Levo experiência de ponta a ponta em Next.js, React Native, Prisma e Postgres — construída em produtos que estão no ar com usuários reais, não em projetos de estudo.",
    itens: ["Full-stack React / Next.js", "Mobile React Native + Expo", "Postgres, Prisma e modelagem", "Disponível para começar"],
    cta: "Ver currículo",
    destaque: false,
  },
];
