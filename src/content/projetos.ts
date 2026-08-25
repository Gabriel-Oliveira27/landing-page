/**
 * ─────────────────────────────────────────────────────────────────────────────
 * PROJETOS — a galeria do site.
 *
 * REGRA DESTE ARQUIVO: nada aqui é chamado de "cliente", porque nenhum destes
 * projetos foi encomendado ou pago. Todos nasceram por iniciativa própria e
 * foram levados até o deploy. Isso não é fraqueza: é o que dá para provar.
 * Portfólio inflado quebra na primeira pergunta, e quem lê vai perguntar.
 *
 * Duas exceções que MERECEM ser ditas, porque são verdade e são fortes:
 *   • Kronos é usado de fato pelo setor de suporte da Zenir para montar escala;
 *   • Sublime foi construído para uma revendedora real, mas não foi lançado.
 * Nos dois casos o texto diz exatamente isso — nem mais, nem menos.
 *
 * Cada projeto tem "peças" (as aplicações que o compõem). Cada peça pode ter um
 * print real em `imagem`; enquanto estiver vazio, o site desenha um mockup em
 * código no lugar. Para trocar: salve o print em /public/prints/ e escreva
 * imagem: "/prints/kronos-dashboard.png".
 *
 * `destaque: true` rende o projeto por inteiro, com peças e detalhes técnicos.
 * Os demais entram numa grade compacta abaixo.
 *
 * NÃO coloque link de repositório aqui. Quem visita é cliente, não recrutador
 * técnico: código aberto de cara não ajuda a vender e entrega o trabalho de
 * graça. Projeto sem link publicado ganha automaticamente um botão de conversa
 * no WhatsApp, montado em Projetos.tsx.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type TipoMockup = "dashboard" | "loja" | "celular" | "escala";

/**
 * Textos que aparecem DENTRO do mockup desenhado em CSS.
 *
 * Existe porque os mockups são genéricos e reaproveitados entre projetos: sem
 * isto, o mockup de loja mostrava "Sublime" escrito no topo mesmo quando estava
 * ilustrando outro projeto, e o painel mostrava "Entregue / Em preparo" num CRM
 * de orçamentos. Sem `rotulos`, entram os padrões de e-commerce.
 */
export type RotulosMockup = {
  /** Barra de endereço da janela. */
  janela?: string;
  /** Marca escrita no topo da interface. */
  marca?: string;
  /** Os três indicadores numéricos do painel. */
  indicadores?: [string, string, string];
  /** Os três estados da lista do painel. */
  estados?: [string, string, string];
  /** Selo do canto superior. */
  selo?: string;
};

export type Peca = {
  nome: string;
  tipo: string;
  descricao: string;
  mockup: TipoMockup;
  imagem?: string;
  rotulos?: RotulosMockup;
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
  /** Rende em profundidade. Sem isso, entra na grade compacta. */
  destaque?: boolean;
};

export const projetos: Projeto[] = [
  // ───────────────────────────────── DESTAQUES ─────────────────────────────────
  {
    slug: "sublime",
    nome: "Sublime",
    tagline: "Plataforma de e-commerce completa",
    descricao:
      "Três aplicações que conversam pela mesma API e dão conta de uma operação de venda inteira. Tem a loja onde o cliente compra, o painel onde a vendedora administra tudo e o app Android que avisa a cada pedido novo e abre a rota da entrega no mapa. Construí para uma revendedora Tupperware. As três já estão publicadas e funcionando. O que falta para o lançamento é terminar o cadastro e as fotos do catálogo, nada do sistema.",
    periodo: "mai/2026 — ago/2026",
    status: "Publicado · aguardando catálogo",
    contexto: "Construído para uma revendedora Tupperware",
    cor: "#E84D82",
    corSecundaria: "#B89EE8",
    destaque: true,
    numeros: [
      { valor: "3", rotulo: "aplicações integradas" },
      { valor: "141", rotulo: "produtos no catálogo" },
      { valor: "4", rotulo: "etapas de checkout" },
      { valor: "12x", rotulo: "parcelamento no cartão" },
    ],
    pecas: [
      {
        nome: "Loja",
        tipo: "Web · Next.js 15",
        descricao:
          "Catálogo com filtros por linha, capacidade e preço, agrupamento por variação de cor, carrinho persistente e checkout em 4 etapas com PIX, dinheiro ou cartão parcelado.",
        mockup: "loja",
        imagem: "/prints/sublime-loja.jpg",
        destaques: [
          "Frete calculado por geolocalização do CEP (ViaCEP + Nominatim)",
          "Cupons com desconto ou frete grátis, validados no servidor",
          "Rastreio do pedido por código ou CPF, com timeline de status",
          "CSS Modules puro, sem biblioteca de interface e com bundle enxuto",
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
          "Consome a mesma API da loja, com sessão por cookie",
        ],
      },
    ],
    destaquesTecnicos: [
      {
        titulo: "Estoque sem furo",
        descricao:
          "Baixa de estoque e criação do pedido acontecem na mesma transação do banco. Se dois clientes compram a última unidade no mesmo instante, só uma venda passa.",
      },
      {
        titulo: "Autenticação própria",
        descricao:
          "JWT assinado com jose, senha em bcrypt, rate limit no login e comparação em tempo constante contra timing attack. Sem OAuth de terceiros.",
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
      "Prisma 7",
      "PostgreSQL (Neon)",
      "Expo / React Native",
      "Cloudinary",
      "Zod",
      "JWT (jose)",
      "web-push",
      "Vercel",
    ],
    links: [
      { rotulo: "Ver a loja", url: "https://sublime-react.vercel.app", tipo: "primario" },
    ],
  },

  {
    slug: "kronos",
    nome: "Kronos",
    tagline: "Ponto, escalas e conhecimento da equipe",
    descricao:
      "Uma central web para montar a escala do mês e acompanhar o ponto da equipe, junto com um app Android que funciona sem internet e sincroniza as batidas quando aparece sinal. Fiz por causa da minha própria rotina: plantão, sábado de meio expediente, folga compensada. Hoje o setor de suporte onde trabalho usa ele para montar a escala.",
    periodo: "jun/2026 — ago/2026",
    status: "Em uso · app v1.1.6",
    contexto: "Usado pelo setor de suporte da Zenir",
    cor: "#2563EB",
    corSecundaria: "#22C55E",
    destaque: true,
    numeros: [
      { valor: "95", rotulo: "commits" },
      { valor: "4", rotulo: "papéis de acesso" },
      { valor: "44h", rotulo: "regra de jornada automatizada" },
      { valor: "3", rotulo: "formatos de exportação" },
    ],
    pecas: [
      {
        nome: "Central web",
        tipo: "Web · PWA · Next.js 16",
        descricao:
          "Calendário mensal editável, visão de fim de semana em formato de planilha e exportação da escala em Excel, PDF ou PNG. Também tem usuários, auditoria e base de conhecimento.",
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
          "Registro de batidas e cálculo de saldo com a regra real de uma equipe de plantão: 8h de segunda a sexta, 4h no sábado, sábado de folga descontando 4h, plantão e home office abonados.",
        mockup: "dashboard",
        imagem: "",
        rotulos: {
          janela: "kronos · meu ponto",
          selo: "Hoje",
          indicadores: ["176h", "+4h12", "6"],
          estados: ["Aprovado", "Pendente", "Abonado"],
        },
        destaques: [
          "Saldo semanal e mensal calculado no servidor",
          "Datas em UTC explícito, sem registro perdido na virada do dia",
          "Modelos de horário reutilizáveis com aviso por dia da semana",
          "Temas claro, escuro e noturno com cores personalizáveis por usuário",
        ],
      },
      {
        nome: "Kronos App",
        tipo: "App Android · offline-first",
        descricao:
          "Quatro batidas por dia, tudo salvo em SQLite no aparelho. A notificação já traz a ação: 'Bati o ponto', 'Não bati ainda' ou 'Adiar 5 min', sem precisar abrir o app.",
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
          "Datas gravadas e consultadas em UTC explícito. Batida registrada à meia-noite não some do relatório nem pula de dia, que é o bug clássico de sistema de ponto.",
      },
      {
        titulo: "Permissão em camadas",
        descricao:
          "Em vez de quatro painéis separados, todo mundo enxerga a base do sistema e quem tem papel mais alto ganha seções extras no mesmo menu. Trocar o papel de alguém vale na hora.",
      },
      {
        titulo: "Sincronização incremental",
        descricao:
          "O app manda só o que mudou desde a última sincronização, e o servidor sempre amarra o registro ao dono da sessão. Celular que passou dias sem internet sobe tudo de uma vez, sem duplicar nada.",
      },
    ],
    stack: [
      "Next.js 16",
      "React 19",
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

  {
    slug: "projetta",
    nome: "Projetta",
    tagline: "Site institucional com painel próprio",
    descricao:
      "Site de uma empresa júnior de engenharia civil, com um painel próprio para administrar o conteúdo. São dois aplicativos Next no mesmo banco de dados. Quem cuida do site troca portfólio, depoimentos, perguntas frequentes e até a paleta de cores sem abrir uma linha de código.",
    periodo: "ago/2026",
    status: "Proposta construída",
    contexto: "Projeto próprio · empresa júnior de engenharia civil",
    cor: "#6D0000",
    corSecundaria: "#C41C17",
    destaque: true,
    numeros: [
      { valor: "2", rotulo: "aplicações no mesmo banco" },
      { valor: "6", rotulo: "paletas prontas no painel" },
      { valor: "5", rotulo: "estágios no funil de orçamento" },
      { valor: "0", rotulo: "linhas de código para editar conteúdo" },
    ],
    pecas: [
      {
        nome: "Site institucional",
        tipo: "Web · Next.js 16",
        descricao:
          "Site com portfólio de obras, serviços, processo, depoimentos e perguntas frequentes, tudo servido do banco. O formulário de orçamento cai direto no CRM.",
        mockup: "loja",
        imagem: "/prints/projetta-site.jpg",
        destaques: [
          "Conteúdo vem do Postgres, com reserva estática se o banco cair",
          "Tipografia e paleta extraídas do material de marca do cliente",
          "Cards de obra com placeholder gráfico enquanto não há foto",
          "Revalidação sob demanda por rota de API ao salvar no painel",
        ],
      },
      {
        nome: "Painel e CRM",
        tipo: "Web · app separado",
        descricao:
          "Segundo aplicativo Next, na porta 3001, que administra o site e acompanha os orçamentos recebidos do começo ao fim.",
        mockup: "dashboard",
        imagem: "",
        rotulos: {
          janela: "painel · orçamentos",
          selo: "Novo",
          indicadores: ["24", "7", "3"],
          estados: ["Ganho", "Em contato", "Orçamento"],
        },
        destaques: [
          "CRUD de projetos, depoimentos e FAQ, com ordem e publicar/ocultar",
          "Funil de orçamentos com histórico de eventos por registro",
          "Editor de tema: 6 paletas prontas ou ajuste token a token",
          "Usuários do painel com papéis e sessão própria",
        ],
      },
    ],
    destaquesTecnicos: [
      {
        titulo: "O site não cai junto com o banco",
        descricao:
          "O conteúdo vem do banco, mas uma cópia estática continua no código como reserva. Se o Neon sair do ar, ou se as tabelas ainda nem existirem, o site carrega do mesmo jeito. Quem visita não descobre que teve problema.",
      },
      {
        titulo: "Dois apps, um schema",
        descricao:
          "Site e painel são projetos Next independentes que compartilham o mesmo Postgres. O schema da raiz manda, e um comando sincroniza a cópia do painel. Cada um sobe no seu ritmo, os dados são os mesmos.",
      },
      {
        titulo: "Marca extraída do material do cliente",
        descricao:
          "Cor principal e tipografia saíram dos arquivos de identidade visual entregues em PDF e DOCX, e viraram tokens no `@theme` do Tailwind. Trocar a paleta inteira é mudar uma variável.",
      },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Prisma 7",
      "Neon Postgres",
      "lucide-react",
    ],
    links: [
      // ⚠️ PREENCHER: URL publicada, se houver.
      { rotulo: "Ver o site", url: "", tipo: "primario" },
    ],
  },

  // ──────────────────────────── GRADE COMPACTA ────────────────────────────
  {
    slug: "ls-solucoes",
    nome: "LS Soluções",
    tagline: "Landing de construtora com captação de leads",
    descricao:
      "Site institucional de uma construtora, com API de contato própria e um painel que acompanha cada lead pelo funil, de 'novo' até 'ganho' ou 'perdido'.",
    periodo: "ago/2026",
    status: "Proposta construída",
    contexto: "Projeto próprio · construtora em Iguatu-CE",
    cor: "#1877E8",
    corSecundaria: "#0F1E3D",
    numeros: [
      { valor: "6", rotulo: "rotas de API" },
      { valor: "5", rotulo: "estágios de funil" },
    ],
    pecas: [
      {
        nome: "Landing + painel de leads",
        tipo: "Web · Next.js 15",
        descricao:
          "Landing com serviços, obras, processo e FAQ, mais um painel em /admin que lista e move os leads recebidos.",
        mockup: "loja",
        imagem: "/prints/ls-solucoes.jpg",
        destaques: [
          "Formulário com validação Zod, honeypot e rate limit por IP",
          "API com contrato único de resposta: { ok, data } ou { ok, message }",
          "Persistência em Postgres com migrations versionadas em SQL",
          "Logo e fotos entram só salvando o arquivo, sem tocar em código",
        ],
      },
    ],
    destaquesTecnicos: [
      {
        titulo: "Preparada para virar sistema",
        descricao:
          "O conteúdo sai de um módulo único, os leads passam por uma API com contrato estável e o painel já consome essa API. Se um dia virar um sistema completo, é só continuar de onde parou.",
      },
    ],
    stack: ["Next.js 15", "React 19", "Tailwind CSS v4", "PostgreSQL", "Zod"],
    links: [
    ],
  },

  {
    slug: "estudadev",
    nome: "EstudaDEV",
    tagline: "Trilhas de estudo que corrigem o seu código",
    descricao:
      "Aplicativo de desktop com trilhas de estudo para quem está começando em programação. Ele guarda o progresso num banco local e confere a resposta rodando o código, em vez de comparar texto.",
    periodo: "ago/2026 — hoje",
    status: "Em construção",
    contexto: "Projeto próprio · produto em desenvolvimento",
    cor: "#3DDC97",
    corSecundaria: "#F5C542",
    numeros: [
      { valor: "3", rotulo: "trilhas escritas" },
      { valor: "1", rotulo: "instalador Windows publicado" },
    ],
    pecas: [
      {
        nome: "App de desktop",
        tipo: "Python · pywebview",
        descricao:
          "Janela nativa que roda na máquina do estudante, com instalador próprio para Windows que ainda oferece instalar VS Code, Git e PostgreSQL.",
        mockup: "dashboard",
        imagem: "",
        rotulos: {
          janela: "estudadev · trilhas",
          selo: "Trilha",
          indicadores: ["3", "12", "68%"],
          estados: ["Concluído", "Em curso", "Bloqueado"],
        },
        destaques: [
          "Correção executando o código do aluno, não comparando string",
          "Progresso salvo em banco local, funciona sem internet",
          "Empacotado com PyInstaller, não exige Python na máquina destino",
          "Lançador que acha o Python certo no Linux e cai no navegador se faltar dependência",
        ],
      },
    ],
    destaquesTecnicos: [
      {
        titulo: "Fora da minha zona de conforto",
        descricao:
          "Os outros projetos são Next.js e React Native. Este é Python, com interface em webview e distribuição de binário. Descobri no caminho que o PyInstaller não cruza plataforma, então cada sistema precisa do próprio build.",
      },
    ],
    stack: ["Python", "pywebview", "PyInstaller", "SQLite", "Next.js (plataforma web)"],
    links: [
    ],
  },

  {
    slug: "tropical-paes",
    nome: "Tropical Pães",
    tagline: "Site de vitrine para comércio local",
    descricao:
      "Página única para uma padaria de Iguatu, com vitrine de produtos, galeria do ambiente e um formulário que monta a encomenda pronta no WhatsApp. Fiz como demonstração, a padaria ainda não contratou.",
    periodo: "ago/2026",
    status: "Demonstração",
    contexto: "Projeto próprio · proposta em aberto",
    cor: "#F47621",
    corSecundaria: "#FCCB31",
    numeros: [
      { valor: "100", rotulo: "Lighthouse em acessibilidade, SEO e boas práticas" },
      { valor: "463 kB", rotulo: "peso total da página" },
    ],
    pecas: [
      {
        nome: "Site de vitrine",
        tipo: "Web · Next.js 16 · estático",
        descricao:
          "Sem banco, sem servidor e sem coleta de dado nenhum. A página inteira é gerada no build, e o formulário só monta a mensagem no aparelho de quem visita.",
        mockup: "loja",
        imagem: "/prints/tropical-paes.jpg",
        destaques: [
          "Selo 'aberto agora' calculado no fuso de Fortaleza, no navegador",
          "JSON-LD de padaria com as duas unidades e horários, para o Google",
          "Paleta ajustada para WCAG AA: o laranja da marca reprovava com texto branco",
          "Logo recuperada de um JPEG que tinha o xadrez de transparência pintado na imagem",
        ],
      },
    ],
    destaquesTecnicos: [
      {
        titulo: "Acessibilidade medida, não presumida",
        descricao:
          "Branco sobre o laranja da marca dá 2,82:1 e reprova no padrão internacional. A paleta foi refeita para texto marrom sobre laranja (5,15:1), e um script no repositório confere cada combinação a cada build.",
      },
    ],
    stack: ["Next.js 16", "React 19", "Tailwind CSS v4", "sharp"],
    links: [
    ],
  },
];

export const projetosDestaque = projetos.filter((p) => p.destaque);
export const projetosCompactos = projetos.filter((p) => !p.destaque);

/** Seção "Como eu construo" — o que os projetos têm em comum. */
export const principios = [
  {
    titulo: "Do banco ao app publicado",
    descricao:
      "Schema, migrations, API, painel, site do cliente e build do APK. O que eu entrego é o sistema funcionando, não só a tela.",
  },
  {
    titulo: "Segurança como padrão",
    descricao:
      "Autenticação própria com JWT e bcrypt, rate limit no login, permissões checadas no servidor, CORS restrito e toda entrada validada com Zod.",
  },
  {
    titulo: "Interface sem template",
    descricao:
      "Nenhum Bootstrap, nenhum Material UI. Escrevo os componentes do zero, e isso deixa o site mais leve, mais rápido e com a cara do cliente.",
  },
  {
    titulo: "Rastro de tudo",
    descricao:
      "Auditoria de alterações, acessos e erros. Quando alguém pergunta 'quem mudou isso?', a resposta está no sistema, não na memória de ninguém.",
  },
  {
    titulo: "Pensado para o celular",
    descricao:
      "PWA instalável, e app nativo quando faz diferença: push de pedido, biometria, rota no mapa e funcionamento sem internet.",
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
    titulo: "Site para o seu negócio",
    resumo: "Você não tem site, ou tem um que ninguém acha no Google.",
    descricao:
      "Página institucional ou de vitrine, feita sob medida, preparada para busca local e ligada ao seu WhatsApp. É o que fiz na Projetta, na LS Soluções e na Tropical Pães.",
    itens: [
      "Design da sua marca, sem template",
      "Preparado para o Google encontrar",
      "Contato e pedidos caindo no WhatsApp",
      "Publicação e domínio configurados",
    ],
    cta: "Pedir um orçamento",
    destaque: true,
  },
  {
    titulo: "Sistema sob medida",
    resumo: "Você tem um processo que hoje vive em planilha, WhatsApp ou papel.",
    descricao:
      "Construo do zero, como fiz com o Kronos e o Sublime: modelagem, painel web, app quando fizer sentido e deploy. Você fica com o código.",
    itens: [
      "Escopo fechado por etapas",
      "Painel web + app Android",
      "Deploy e domínio configurados",
      "Código e documentação entregues",
    ],
    cta: "Conversar sobre o projeto",
    destaque: false,
  },
  {
    titulo: "Entrar no seu time",
    resumo: "Vaga de desenvolvimento, CLT ou PJ, presencial ou remoto.",
    descricao:
      "Tenho prática de ponta a ponta em Next.js, React Native, Prisma e Postgres, construída em produtos completos e não em exercício de curso.",
    itens: [
      "Full-stack React / Next.js",
      "Mobile React Native + Expo",
      "Postgres, Prisma e modelagem",
      "Experiência em suporte técnico",
    ],
    cta: "Ver currículo",
    destaque: false,
  },
];
