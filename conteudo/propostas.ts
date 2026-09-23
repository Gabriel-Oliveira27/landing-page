/**
 * As propostas — o site de uma empresa real como ele poderia ser.
 *
 * Diferente dos projetos (/projetos), que são modelos com nome e
 * produto inventados, cada proposta usa o conteúdo verdadeiro de um
 * negócio daqui: o cardápio, as fotos, o endereço. Por isso cada uma
 * tem `noindex` e a faixa "não é o site oficial" — e esta lista existe
 * para quem já está na vitrine achar, não para o Google.
 *
 * O contexto de cada cliente (o que foi levantado, o que não se sabe)
 * mora no Prospecta, em projetos/<slug>.md.
 */

export type Proposta = {
  slug: string;
  empresa: string;
  ramo: string;
  cidade: string;
  /** Uma linha: o que a página resolve para aquele negócio. */
  resumo: string;
  /** Cor da marca do cliente — o filete do cartão. */
  cor: string;
  logo: { src: string; largura: number; altura: number; fundo: string };
  capa: string;
  mostra: string[];
};

export const propostas: Proposta[] = [
  {
    slug: 'vila-da-telha',
    empresa: 'Vila da Telha Gastrobar',
    ramo: 'Restaurante e bar',
    cidade: 'Iguatu — CE',
    resumo:
      'Um cardápio de 21 MB em PDF virou 211 pratos em texto, com pedido e reserva que chegam prontos no WhatsApp.',
    cor: '#7B1A22',
    logo: { src: '/proposta/vila-da-telha/logo-claro.png', largura: 945, altura: 381, fundo: '#3E0D12' },
    capa: '/proposta/vila-da-telha/mesa.jpg',
    mostra: ['Cardápio com busca', 'Pedido pelo WhatsApp', 'Reserva', 'Menu Executivo'],
  },
  {
    slug: 'nori',
    empresa: 'Nori Restaurante',
    ramo: 'Sushi e pizzaria',
    cidade: 'Iguatu — CE',
    resumo:
      'Sushi, pizza e o Nori Park numa página só — cardápio de 14 páginas em texto e reserva que pergunta pelas crianças.',
    cor: '#96733A',
    logo: { src: '/proposta/nori/logo.png', largura: 593, altura: 242, fundo: '#17120E' },
    capa: '/proposta/nori/pizza-salmao.jpg',
    mostra: ['Cardápio com busca', 'Pedido pelo WhatsApp', 'Nori Park', 'Reserva'],
  },
  {
    slug: 'diocesano',
    empresa: 'Diocesano Hotel',
    ramo: 'Hotelaria e eventos',
    cidade: 'Iguatu — CE',
    resumo:
      'A casa de sessenta anos que abria o site com o regulamento interno passa a abrir recebendo quem chega.',
    cor: '#7B1E2B',
    logo: { src: '/proposta/diocesano/logo.png', largura: 307, altura: 58, fundo: '#FBF8F4' },
    capa: '/proposta/diocesano/passagem.jpg',
    mostra: ['Diárias em texto', 'Reserva por WhatsApp', 'Eventos', 'Linha do tempo'],
  },
];
