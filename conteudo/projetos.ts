/**
 * O catálogo.
 *
 * Escrito para quem compra, não para quem contrata programador. Cada
 * projeto responde três coisas, nesta ordem: para que ramo serve, o
 * que a pessoa ganha, e o que ela consegue fazer sozinha depois.
 *
 * `demo` aponta para uma rota daqui — uma versão anonimizada, com
 * nome genérico e conteúdo fictício. Existe porque mostrar o site de
 * um cliente para outro é constrangedor, e porque quatro dos sete
 * sites reais recusam ser abertos dentro de uma moldura.
 *
 * `real` é o site no ar, para quem quiser ver que a coisa existe de
 * verdade. Os dois links convivem: a demo é para experimentar, o real
 * é para acreditar.
 */

export type Projeto = {
  slug: string;
  nome: string;
  /** Uma linha, no vocabulário de quem compra. */
  chamada: string;
  /** Para quem isto serve — é o que a pessoa procura na lista. */
  para: string[];
  descricao: string;
  /** O que a pessoa ganha. Frases curtas, verbo na frente. */
  ganhos: string[];
  /** O que ela administra sozinha depois de entregue. */
  autonomia?: string[];
  demo?: string;
  real?: string;
  /** Instruções de acesso, quando o link exige login. */
  acesso?: string;
  cor: string;
  /** Rende em destaque na lista. */
  destaque?: boolean;
};

export const projetos: Projeto[] = [
  {
    slug: 'loja-online',
    nome: 'Loja on-line',
    chamada: 'Sua loja aberta 24 horas, com carrinho e pagamento.',
    para: ['Roupas', 'Calçados', 'Cosméticos', 'Papelaria', 'Pet shop', 'Variedades'],
    descricao:
      'Quem vende por WhatsApp responde preço quarenta vezes por dia e perde venda quando está ocupado. ' +
      'A loja mostra o catálogo com foto e preço, o cliente monta o carrinho sozinho e fecha o pedido. ' +
      'Você recebe pronto, com endereço e forma de pagamento.',
    ganhos: [
      'Catálogo com filtro por tipo, tamanho e preço',
      'Carrinho que não se perde quando o cliente fecha o navegador',
      'PIX, dinheiro ou cartão em até 12x',
      'Cupom de desconto e frete grátis',
      'O cliente acompanha o pedido pelo número ou CPF',
    ],
    autonomia: [
      'Cadastrar produto e trocar foto',
      'Mudar preço e dar desconto por linha',
      'Criar cupom',
      'Configurar o frete: por valor, por quilômetro, fixo ou por cidade',
    ],
    real: 'https://sublime-react.vercel.app',
    cor: '#E84D82',
    destaque: true,
  },
  {
    slug: 'vitrine-padaria',
    nome: 'Vitrine com pedido no WhatsApp',
    chamada: 'Uma página só, feita para ser achada no Google.',
    para: ['Padaria', 'Confeitaria', 'Lanchonete', 'Ótica', 'Floricultura'],
    descricao:
      'Para quem não precisa de loja completa, precisa de ser encontrado. Mostra o que você vende, ' +
      'onde fica e o horário, e monta o pedido para continuar no WhatsApp — sem o cliente ter que ' +
      'digitar o que quer.',
    ganhos: [
      'Aparece no Google quando procuram o seu ramo na cidade',
      'Cardápio ou catálogo com foto e preço',
      'O cliente escolhe e o pedido chega pronto no seu WhatsApp',
      'Mapa, horário de funcionamento e telefone sempre à mão',
      'Abre rápido no celular, que é onde as pessoas procuram',
    ],
    demo: '/demo/padaria',
    real: 'https://tropical-paes.vercel.app',
    cor: '#C9742E',
    destaque: true,
  },
  {
    slug: 'site-institucional',
    nome: 'Site institucional com orçamento',
    chamada: 'Credibilidade para quem vende serviço, não produto.',
    para: ['Construtora', 'Engenharia', 'Arquitetura', 'Advocacia', 'Contabilidade'],
    descricao:
      'Quem contrata obra ou serviço técnico pesquisa antes. Um site próprio é o que separa ' +
      '"achei no Google" de "só tem um Instagram". Mostra o que você faz, o que já entregou, ' +
      'e recebe pedido de orçamento direto.',
    ganhos: [
      'Serviços explicados sem jargão',
      'Obras e trabalhos entregues, com foto',
      'Formulário de orçamento que cai no seu e-mail e no painel',
      'Página de contato com mapa e telefone',
    ],
    autonomia: ['Ver e responder os orçamentos recebidos', 'Publicar obra nova'],
    demo: '/demo/construtora',
    real: 'https://ls-solucoes.vercel.app',
    cor: '#4A7C8C',
    destaque: true,
  },
  {
    slug: 'locadora',
    nome: 'Site com consulta de disponibilidade',
    chamada: 'O cliente vê o que está livre antes de ligar.',
    para: ['Locadora de veículos', 'Guincho', 'Turismo', 'Aluguel de equipamento'],
    descricao:
      'Quem aluga passa o dia respondendo "tem para o dia 20?". O site mostra a frota e deixa ' +
      'o cliente conferir o período desejado sozinho. Do outro lado, você cadastra veículo e ' +
      'cliente num painel próprio.',
    ganhos: [
      'Frota com foto, categoria e diária',
      'Consulta de disponibilidade por período',
      'Pedido de reserva direto pelo site',
      'Página para quem é de fora entender o que a empresa faz',
    ],
    autonomia: ['Cadastrar e tirar veículo da frota', 'Cadastrar cliente', 'Marcar período ocupado'],
    demo: '/demo/locadora',
    real: 'https://edy-guinchos.vercel.app',
    cor: '#2F6F5E',
    destaque: true,
  },
  {
    slug: 'site-com-painel',
    nome: 'Site com painel de conteúdo',
    chamada: 'Publique você mesmo, sem depender de ninguém.',
    para: ['Empresa júnior', 'Associação', 'Escritório', 'Escola'],
    descricao:
      'Para quem precisa publicar com frequência: projeto novo, notícia, resposta na lista de ' +
      'dúvidas. Tudo sai de uma tela de administração — você escreve e aparece no site.',
    ganhos: [
      'Página institucional com serviços e equipe',
      'Publicação de projetos e notícias',
      'Lista de dúvidas frequentes, editável',
      'Cadastro de clientes e contatos',
    ],
    autonomia: ['Publicar, editar e tirar do ar', 'Responder dúvidas', 'Gerenciar a equipe exibida'],
    demo: '/demo/engenharia',
    real: 'https://projetta-ce.vercel.app',
    cor: '#3B5BA5',
  },
  {
    slug: 'ponto-e-escala',
    nome: 'Controle de ponto e escala',
    chamada: 'Quem trabalha quando, e quem bateu ponto.',
    para: ['Comércio com turnos', 'Restaurante', 'Clínica', 'Equipe de plantão'],
    descricao:
      'Nasceu de uma rotina real de plantão e escala. Monta a escala da equipe, registra a ' +
      'batida de ponto num totem ou no celular, e guarda a base de conhecimento do time.',
    ganhos: [
      'Escala montada numa tela, visível para todo mundo',
      'Batida de ponto por totem ou pelo próprio celular',
      'Cada pessoa vê o próprio ponto e a própria escala',
      'Controle de quem pode ver e mexer em quê',
    ],
    autonomia: ['Montar e mudar a escala', 'Cadastrar pessoas e funções', 'Conferir o ponto do mês'],
    real: 'https://kronos-jr.vercel.app',
    acesso: 'Demonstração aberta — entre com usuário **admin** e senha **admin**. ' +
      'A tela de bater ponto fica em /totem.',
    cor: '#5B4B8A',
  },
  {
    slug: 'curriculo-digital',
    nome: 'Currículo digital com QR code',
    chamada: 'Seu currículo numa página, aberto por QR code.',
    para: ['Profissional autônomo', 'Prestador de serviço'],
    descricao:
      'Edita pelo aplicativo no celular e compartilha por link ou QR code. Quem recebe abre no ' +
      'navegador, sem instalar nada.',
    ganhos: ['Edição pelo celular', 'Link e QR code para compartilhar', 'Abre em qualquer aparelho'],
    cor: '#8A6D3B',
  },
  {
    slug: 'estudadev',
    nome: 'EstudaDEV',
    chamada: 'Plataforma de estudo de programação e lógica.',
    para: ['Escola', 'Curso técnico', 'Estudante'],
    descricao:
      'Projeto próprio, ainda fora de produção. Material de estudo de linguagens, lógica e ' +
      'fundamentos, organizado em trilhas.',
    ganhos: ['Trilhas de estudo organizadas', 'Conteúdo de lógica e linguagens'],
    real: 'https://estudadev-web.vercel.app',
    cor: '#2E7D6B',
  },
];

export const emDestaque = projetos.filter((p) => p.destaque);

export function projetoPorSlug(slug: string) {
  return projetos.find((p) => p.slug === slug);
}

/** Todos os ramos citados, para o agente e para os filtros. */
export const ramos = [...new Set(projetos.flatMap((p) => p.para))].sort();
