import type { Item, Secao, Semana, Tema } from '../_restaurante/tipos';

/**
 * Conteúdo do Nori — unidade Iguatu.
 *
 * Levantado em 23/09/2026, de fontes da própria casa:
 *
 * - o cardápio "Novas Páginas Nori Iguatu Julho 2026.pdf", 14 páginas
 *   e 9 MB, linkado na bio do Instagram — pratos, códigos, preços, as
 *   regras do Nori Park e o endereço da unidade de Quixadá;
 * - os posts do @norisushis de setembro — rodízios, aniversariante,
 *   música ao vivo, o Poke de Camarão como novidade.
 *
 * - o destaque "Funcionamento" do Instagram — o horário: todos os dias,
 *   das 18h à 0h. O Google, que a casa não reivindicou, diz até 1h na
 *   sexta e no sábado; vale o que a casa escreveu.
 *
 * Nomes dos pratos como no cardápio impresso, inclusive a grafia
 * ("Backed Potato", "Philadelfia", "Nutela Gio").
 */

export const casa = {
  nome: 'Nori Restaurante',
  curto: 'Nori',
  lema: 'Sushi, pizza & sabor de verdade',

  endereco: ['Rua Deputado Adail Barreto, 16 — Centro', 'Iguatu — CE · 63500-065'],
  consultaMapa: 'Nori Restaurante, Iguatu - CE',
  telefone: '(88) 3581-0834',
  celular: '(88) 99763-7364',
  whatsapp: '5588997637364',
  instagram: 'https://www.instagram.com/norisushis',
  instagramArroba: '@norisushis',
  linkGoogle: 'https://www.google.com/maps/search/?api=1&query=Nori+Restaurante+Iguatu',
};

/** Impressa no rodapé do próprio cardápio de Iguatu. */
export const quixada = {
  endereco: 'Rua Autran Moreno, 174 — Centro, Quixadá',
  telefone: '(88) 3414-5858',
  whatsapp: '(88) 99945-1461',
  instagram: 'https://www.instagram.com/nori.quixada',
  instagramArroba: '@nori.quixada',
};

/** Do destaque "Funcionamento" do Instagram: "Todos os dias de 18:00 às 00:00". */
const noite: Semana[number] = [['18:00', '24:00']];
export const semana: Semana = [noite, noite, noite, noite, noite, noite, noite];

export const tema: Tema = {
  marca: '#96733A',
  marcaEscura: '#17120E',
  sobreMarca: '#FFFBF2',
  destaque: '#D9B26A',
  fundo: '#FBF7EE',
  papel: '#FFFFFF',
  areia: '#F3ECDD',
  borda: '#E7DCC6',
  tinta: '#1E1712',
  tintaMedia: '#65574A',
  tintaFraca: '#978877',
};

/**
 * Os rodízios de quinta, do post "Rodízio Nori · setembro".
 *
 * Alternam sushi e massas-e-pizzas, das 19h30 às 21h30. A agenda é de
 * setembro de 2026; depois da última data a página diz que a do mês
 * seguinte sai no Instagram, em vez de inventar a próxima.
 */
export const rodizios = {
  horario: 'Quintas, das 19h30 às 21h30',
  aviso: 'Reserva não é obrigatória, mas garante o lugar nos dias de mais movimento.',
  tipos: {
    sushi: {
      nome: 'Rodízio de Sushi',
      preco: 60,
      itens: ['Maki e uramaki', 'Sushi hot', 'Caldinho de peixe', 'Yakisoba de frango'],
    },
    massas: {
      nome: 'Rodízio de Massas e Pizzas',
      preco: 34.99,
      itens: [
        'Massas: bolonhesa, quatro queijos e carbonara',
        'Pizzas: calabresa, frango, mista, frango com milho, marguerita e mussarela',
      ],
    },
  },
  agenda: [
    { data: '2026-09-03', tipo: 'sushi' },
    { data: '2026-09-10', tipo: 'massas' },
    { data: '2026-09-17', tipo: 'sushi' },
    { data: '2026-09-24', tipo: 'massas' },
  ] as { data: string; tipo: 'sushi' | 'massas' }[],
  aniversariante:
    'No mês do seu aniversário, o seu Rodízio de Massas e Pizzas é por conta da casa quando você ' +
    'traz 10 ou mais pagantes. Vale em cada rodízio do mês.',
};

/** Do "Informações gerais: Nori Park", última página do cardápio. */
export const park = {
  precos: [
    { valor: 'R$ 20', quando: 'sem consumação' },
    { valor: 'R$ 15', quando: 'com consumação mínima de R$ 20' },
  ],
  regras: [
    'Para crianças até 8 anos. A partir de 1 ano, já paga.',
    'Menores de 3 anos, só com acompanhante.',
    'Os brinquedos são só das crianças.',
    'A equipe do park orienta segurança e uso dos brinquedos.',
  ],
};

export const avaliacoes = {
  notas: [{ valor: '4,4', rotulo: 'no Google', detalhe: '652 avaliações' }],
  // Os destaques que o próprio Google tira das avaliações.
  trechos: [
    { texto: 'Ótimo restaurante, a pizza é deliciosa, com certeza vou mais vezes.', fonte: 'Avaliação no Google' },
    { texto: 'Desde comida de boteco a oriental, tudo uma delícia!', fonte: 'Avaliação no Google' },
    { texto: 'Comida japonesa bem servida e saborosa! Opções bem diferenciadas, tudo muito bem preparado.', fonte: 'Avaliação de Local Guide no Google' },
  ],
};

const un = (n: number) => `${n} un.`;

const pizza = (cod: string, cod8: string, nome: string, desc: string, p4: number, p8: number, novo?: boolean): Item => ({
  cod,
  nome,
  desc,
  novo,
  preco: [
    { rotulo: '4 fatias', valor: p4, cod },
    { rotulo: '8 fatias', valor: p8, cod: cod8 },
  ],
});

const suco = (cod: string, codJarra: string, nome: string, copo: number, jarra: number): Item => ({
  cod,
  nome,
  preco: [
    { rotulo: 'copo', valor: copo, cod },
    { rotulo: 'jarra', valor: jarra, cod: codJarra },
  ],
});

const peca = (cod: string, nome: string, preco: number): Item => ({ cod, nome, preco, medida: 'a peça' });

export const cardapio: Secao[] = [
  {
    id: 'entradas',
    nome: 'Entradas',
    grupo: 'cozinha',
    itens: [
      { cod: '306', nome: 'Feijão Verde com Queijo e Nata', preco: 27.9 },
      { cod: '307', nome: 'Caldinho de Peixe', preco: 10.9 },
      { cod: '308', nome: 'Calabresa Acebolada', preco: 24.9 },
      { cod: '311', nome: 'Backed Potato', preco: 29.9 },
      { cod: '312', nome: 'Camarão à Milanesa', preco: 48.9 },
      { cod: '313', nome: 'Camarão Alho e Óleo com Casca', preco: 44.9 },
      { cod: '314', nome: 'Espetinho Medalhão', preco: 35.9 },
      { cod: '315', nome: 'Espetinho do Chefe', preco: 33.9 },
      { cod: '316', nome: 'Espetinho de Frango com Bacon', preco: 29.9 },
      { cod: '318', nome: 'Queijo à Milanesa', preco: 29.9 },
      { cod: '319', nome: 'Batata Frita', preco: 23.9 },
      { cod: '320', nome: 'Rolinho Primavera', preco: 11.9 },
      { cod: '321', nome: 'Rolinho de Queijo', preco: 11.9 },
      { cod: '322', nome: 'Sunomono', preco: 14.9 },
      { cod: '324', nome: 'Tataki de Salmão', preco: 32.9 },
      { cod: '325', nome: 'Ceviche com Salmão', preco: 34.9 },
      { cod: '326', nome: 'Carpaccio de Salmão', preco: 41.9 },
      { cod: '327', nome: 'Filé à Roquefort', preco: 40.9 },
      { cod: '328', nome: 'Filé com Fritas', preco: 40.9 },
      { cod: '329', nome: 'Isca de Peixe de Salmão', preco: 40.9 },
      { cod: '330', nome: 'Filé Acebolado com Macaxeira', preco: 41.9 },
      { cod: '331', nome: 'Escondidinho de Carne de Sol', desc: 'Com purê de batata.', preco: 37.9 },
      { cod: '332', nome: 'Bolinha de Carne de Sol', medida: un(12), preco: 23.9 },
      { cod: '333', nome: 'Bolinha de Queijo', medida: un(12), preco: 20.9 },
      { cod: '334', nome: 'Pastelzinho de Queijo', medida: un(8), preco: 26.9 },
      { cod: '335', nome: 'Pastelzinho de Carne', medida: un(8), preco: 29.9 },
    ],
  },
  {
    id: 'especiais',
    nome: 'Sushis especiais',
    grupo: 'cozinha',
    itens: [
      { cod: '127', nome: 'Nori Poke Camarão', desc: 'Camarões empanados, arroz, cream cheese, gergelim, cebolinha, couve frita, geleia de pimenta e tarê.', preco: 42.9, novo: true },
      { cod: '123', nome: 'Nori Poke Salmão', desc: 'Sashimi de salmão em cubos, cream cheese, arroz, gergelim, cebolinha, couve frita e tarê.', preco: 42.9 },
      { cod: '108', nome: 'Sushi Dog', desc: 'Roll de arroz empanado no panko, recheado com salmão, molho especial, cream cheese, tarê e couve frita.', preco: 38.9 },
      { cod: '112', nome: 'Batera Salmão', medida: un(4), desc: 'Niguiris de arroz com salmão, cream cheese e cebolinha batidos.', preco: 28.9 },
      { cod: '122', nome: 'Hot Skin Especial', medida: un(4), desc: 'Uramaki de skin envolto em salmão flambado, com geleia de pimenta.', preco: 30.9 },
      { cod: '124', nome: 'Hot Uramaki', medida: un(4), desc: 'Envolto em salmão flambado, com tarê e gergelim.', preco: 35.9 },
      { cod: '125', nome: 'Gunga Shakê', medida: un(2), desc: 'Envolto de arroz e salmão batido com cebolinha.', preco: 23.9 },
      { cod: '126', nome: 'Obama', medida: un(2), desc: 'Envolto de arroz e salmão, camarão, queijo e molho especial.', preco: 23.9 },
      { cod: '128', nome: 'Gunga Morango', desc: 'Envolto de arroz e salmão, geleia de morango e queijo.', preco: 23.9 },
      { cod: '129', nome: 'Sashimi Flambado', medida: un(4), desc: 'Fatias de salmão flambado no azeite.', preco: 29.9 },
      { cod: '130', nome: 'Rosa de Sakura', medida: un(5), desc: 'Fatias finas de salmão flambado, cream cheese e molho especial.', preco: 34.9 },
      { cod: '133', nome: 'Shakebi Flambado', medida: un(2), desc: 'Salmão, camarão empanado, queijo e cebolinha.', preco: 24.9 },
      { cod: '134', nome: 'Gio Flambado', medida: un(4), desc: 'Envolto de arroz, salmão flambado e cream cheese.', preco: 38.9 },
      { cod: '135', nome: 'Gunga Skin', medida: un(2), desc: 'Envolto de arroz e salmão, skin batido e cream cheese.', preco: 22.9 },
      { cod: '139', nome: 'Hudson Harumaki', medida: un(8), desc: 'Hot de arroz e salmão na massa harumaki, com cream cheese.', preco: 41.9 },
      { cod: '140', nome: 'Haro Hot', medida: un(4), desc: 'Arroz e salmão na massa harumaki, camarão, cream cheese e couve frita.', preco: 37.9 },
      { cod: '143', nome: 'Especial Hot', medida: un(4), desc: 'Empanado de salmão e arroz com cream cheese.', preco: 30.9 },
      { cod: '145', nome: 'Shakani Flambado', medida: un(4), desc: 'Salmão flambado, kani, cream cheese e geleia de pimenta.', preco: 37.9 },
      { cod: '146', nome: 'Nutela Gio', medida: un(2), desc: 'Envolto de arroz e salmão, cream cheese com nutella.', preco: 24.9 },
      {
        cod: '147',
        nome: 'Especial Tigrado',
        desc: 'Empanado especial de salmão, camarão e cream cheese.',
        preco: [
          { rotulo: '2 un.', valor: 22.9, cod: '147' },
          { rotulo: '4 un.', valor: 40.9, cod: '428' },
        ],
      },
      { cod: '151', nome: 'Giô Camarão', medida: un(2), desc: 'Envolto de arroz e salmão, camarão batido com cream cheese e cebolinha.', preco: 24.9 },
      { cod: '141', nome: 'Sushiki', medida: un(4), desc: 'Envolto de salmão recheado com cream cheese, mel e couve.', preco: 33.9 },
      { cod: '149', nome: 'Naoqui', medida: un(4), desc: 'Hot de arroz e salmão coberto com couve frita e geleia de pimenta.', preco: 33.9 },
      { cod: '152', nome: 'Maracumaki', medida: un(4), desc: 'Niguiris de salmão, limão, geleia de pimenta e molho de maracujá.', preco: 34.9 },
      { cod: '154', nome: 'Rikari Roll', medida: un(4), desc: 'Camarão empanado envolto em salmão flambado, flocos de alho frito e cebolinha.', preco: 33.9 },
      { cod: '156', nome: 'Shakê Couve', medida: un(2), desc: 'Couve frita envolta em salmão, com um toque de cream cheese.', preco: 19.9 },
      { cod: '157', nome: 'Gio Ebi Especial', medida: un(2), desc: 'Arroz e salmão maçaricado, cream cheese com camarão e ovas.', preco: 30.9 },
    ],
  },
  {
    id: 'combinados',
    nome: 'Combinados',
    grupo: 'cozinha',
    itens: [
      { cod: '369', nome: 'Combo 01', desc: '12 hots de salmão e 8 hots de camarão.', preco: 65.9 },
      { cod: '370', nome: 'Combo 02', desc: '8 makis de salmão, 4 uramakis skin, 4 hots de camarão, 2 niguiris de salmão e 2 de kani.', preco: 66.9 },
      { cod: '371', nome: 'Combo 03', desc: '4 makis de camarão, 4 uramakis shakê, 2 niguiris skin, 2 de camarão e 4 sashimis de salmão.', preco: 64.9 },
      { cod: '372', nome: 'Combo 04', desc: '4 makis pasta de salmão, 4 uramakis ebiten, 4 hots de salmão, 2 niguiris e 2 sashimis de salmão e 1 Gunga Shakê.', preco: 77.9 },
      { cod: '375', nome: 'Combo Clássico', desc: '28 peças: hot philadelfia, uramaki skin e ebiten, maki de kani e philadelfia, niguiris de salmão, camarão e skin.', preco: 102.9 },
      { cod: '377', nome: 'Combo Especial', desc: 'Makis, uramakis, 8 hot philadelfia, niguiris de salmão e uma porção de Haro Hot, Hot Uramaki, Gunga Shakê e Rosa de Sakura.', preco: 154.9 },
      { cod: '378', nome: 'Combinado do Sushiman', desc: '20 peças especiais, à escolha do sushiman.', preco: 169.9 },
    ],
  },
  {
    id: 'pecas',
    nome: 'Sushi por peça',
    nota: 'maki, uramaki e hot: mínimo de 4 de cada',
    grupo: 'cozinha',
    itens: [
      peca('085', 'Maki de Salmão', 4),
      peca('086', 'Maki Philadelfia', 4),
      peca('079', 'Maki de Kani', 4),
      peca('080', 'Maki de Kani com Queijo', 4),
      peca('082', 'Maki de Skin', 4),
      peca('081', 'Maki de Skin com Queijo', 4),
      peca('084', 'Maki de Camarão', 4),
      peca('083', 'Maki de Camarão com Queijo', 4),
      peca('087', 'Maki de Atum', 4),
      peca('088', 'Maki Pasta de Salmão', 4),
      peca('089', 'Maki Pasta de Atum', 4),
      peca('090', 'Maki de Pepino', 4),
      peca('091', 'Maki Romeu e Julieta', 4),
      peca('092', 'Uramaki Skin', 4),
      peca('093', 'Uramaki Skin com Queijo', 4),
      peca('094', 'Uramaki Shakê', 4),
      peca('095', 'Uramaki Shakê com Queijo', 4),
      peca('096', 'Uramaki Ebiten', 4),
      peca('097', 'Uramaki Tomate Seco', 4),
      peca('098', 'Uramaki Califórnia', 4),
      peca('099', 'Hot Philadelfia', 4),
      peca('100', 'Hot de Camarão', 4),
      peca('107', 'Niguiri de Salmão', 6),
      peca('101', 'Niguiri de Camarão', 6),
      peca('102', 'Niguiri de Kani', 6),
      peca('103', 'Niguiri de Skin', 6),
      peca('104', 'Niguiri de Tilápia', 6),
      peca('105', 'Niguiri de Polvo', 6),
      peca('106', 'Niguiri de Atum', 6),
      peca('425', 'Niguiri Califórnia', 6),
      peca('361', 'Sashimi de Salmão', 6.2),
      peca('362', 'Sashimi de Atum', 6.2),
      peca('363', 'Sashimi de Tilápia', 6.2),
      peca('364', 'Sashimi de Kani', 6.2),
      peca('365', 'Sashimi de Camarão', 6.2),
      peca('366', 'Sashimi de Polvo', 6.2),
    ],
  },
  {
    id: 'temakis',
    nome: 'Temakis',
    grupo: 'cozinha',
    itens: [
      { cod: '429', nome: 'Especial Salmão', desc: 'Todo de salmão flambado, com recheio de camarão e cream cheese.', preco: 51.9 },
      { cod: '423', nome: 'Temaki 1 Recheio', preco: 27.9 },
      { cod: '424', nome: 'Temaki 2 Recheios', preco: 31.9 },
      { cod: '426', nome: 'Temaki Hot 1 Recheio', preco: 32.9 },
      { cod: '427', nome: 'Temaki Hot 2 Recheios', preco: 34.9 },
      { cod: '420', nome: 'Mini Temaki 1 Recheio', medida: un(4), preco: 29.9 },
      { cod: '421', nome: 'Mini Temaki 2 Recheios', medida: un(4), preco: 31.9 },
      { cod: '422', nome: 'Mini Temaki Hot 1 Recheio', medida: un(4), preco: 29.9 },
    ],
  },
  {
    id: 'pizzas',
    nome: 'Pizzas',
    nota: 'todas com mussarela, molho de tomate e orégano',
    grupo: 'cozinha',
    itens: [
      pizza('166', '466', 'Mussarela', 'Mussarela e tomate.', 36.9, 47.9),
      pizza('167', '467', 'Presunto', 'Mussarela e presunto.', 39.9, 49.9),
      pizza('168', '468', 'Calabresa', 'Mussarela, calabresa e cebola.', 38.9, 52.9),
      pizza('174', '474', 'Calabresa Especial', 'Calabresa, cream cheese e cebola caramelizada.', 49.9, 69.9, true),
      pizza('169', '469', 'Frango', 'Mussarela e frango.', 38.9, 52.9),
      pizza('170', '470', 'Frango com Milho', 'Mussarela, frango e milho.', 39.9, 53.9),
      pizza('171', '471', 'Frango com Catupiry', 'Mussarela, frango e catupiry.', 40.9, 55.9),
      pizza('172', '472', 'Portuguesa', 'Mussarela, presunto, ovo, ervilha, cebola e azeitona.', 40.9, 58.9),
      pizza('178', '478', 'Margherita', 'Mussarela, tomate e manjericão.', 37.9, 52.9),
      pizza('177', '477', 'Tomate Seco', 'Tomate seco, mussarela, parmesão e manjericão.', 40.9, 53.9, true),
      pizza('181', '481', 'Bacon', 'Mussarela e bacon.', 45.9, 56.9),
      pizza('180', '480', 'Quatro Queijos', 'Mussarela, gorgonzola, parmesão e provolone.', 48.9, 61.9),
      pizza('191', '491', 'À Moda', 'Mussarela, presunto, frango, tomate e catupiry.', 48.9, 65.9),
      pizza('173', '473', 'Pepperoni', 'Mussarela, pepperoni e cebola.', 51.9, 69.9),
      pizza('188', '488', 'Lombinho', 'Lombinho, mussarela, provolone e cebola caramelizada.', 52.9, 72.9, true),
      pizza('195', '495', 'Do Pizzaiolo', 'Mussarela, frango, calabresa, lombinho canadense e bacon.', 53.9, 72.9),
      pizza('192', '492', 'Strogonoff', 'Mussarela, carne picadinha, requeijão, batata palha e orégano.', 54.9, 71.9),
      pizza('185', '485', 'Carne de Sol', 'Mussarela, carne de sol desfiada, cebola e tomate picado.', 55.9, 73.9),
      pizza('189', '489', 'Camarão', 'Mussarela, camarão e catupiry.', 60.9, 77.9),
      // O cardápio impresso dá 174 para esta e para a Calabresa Especial.
      pizza('174', '479', 'Carne de Sol Especial', 'Carne de sol, cream cheese, cebola e tomate.', 61.9, 79.9, true),
      pizza('184', '484', 'Salmão', 'Mussarela, salmão, cream cheese e tarê.', 62.9, 77.9),
    ],
  },
  {
    id: 'pizzas-doces',
    nome: 'Pizzas doces',
    grupo: 'cozinha',
    itens: [
      pizza('196', '496', 'Romeu e Julieta', 'Mussarela, doce de goiaba e leite condensado.', 34.9, 52.9),
      pizza('197', '497', 'Brigadeiro', 'Chocolate e granulado.', 37.9, 53.9),
      pizza('198', '498', 'Cartola', 'Mussarela, banana, canela e leite condensado.', 37.9, 52.9),
      pizza('175', '475', 'Brownie', 'Chocolate com cubos de brownie.', 41.9, 54.9),
      pizza('186', '486', 'Sonho de Valsa', 'Chocolate derretido com pedaços de Sonho de Valsa.', 42.9, 59.9),
      pizza('194', '494', 'Nutella com Morango', 'Nutella, morango e leite ninho.', 47.9, 60.9),
      { cod: '202', nome: 'Borda de Catupiry', preco: 15 },
      { cod: '203', nome: 'Borda de Cheddar', preco: 15 },
      { cod: '2061', nome: 'Borda de Chocolate', preco: 16 },
      { cod: '2060', nome: 'Borda de Cream Cheese', preco: 24 },
    ],
  },
  {
    id: 'pratos',
    nome: 'Pratos individuais',
    grupo: 'cozinha',
    itens: [
      { cod: '248', nome: 'Risoto de Camarão', desc: 'Camarões no vinho, com manteiga, queijo fresco e molho de tomate.', preco: 54.9, novo: true },
      { cod: '230', nome: 'Filé de Frango Especial', desc: 'Com ervas frescas, tomate concassé, purê de batatas, arroz branco e bacon crocante.', preco: 45.9, novo: true },
      { cod: '247', nome: 'Frango Medalhão', desc: 'Medalhões de frango com bacon, creme de queijo e arroz de brócolis.', preco: 45.9, novo: true },
      { cod: '241', nome: 'Tilápia ao Molho de Coco', desc: 'Com purê de batata e arroz branco.', preco: 49.9, novo: true },
      { cod: '250', nome: 'Picanha Suína Agridoce', desc: 'Na manteiga de ervas, arroz de brócolis e farofa da casa.', preco: 43.9, novo: true },
      { cod: '244', nome: 'Spaguetti al Arrabiata', desc: 'Camarões flambados, azeitona preta, orégano, molho de tomate apimentado e parmesão.', preco: 52.9 },
      { cod: '245', nome: 'Nhoque do Chef', desc: 'Nhoque de batata com tiras de filé mignon e creme de queijo.', preco: 51.9 },
      { cod: '227', nome: 'Teppanyaki de Salmão', desc: 'Salmão na chapa com legumes ou fritas, e arroz yakimeshi.', preco: 62.9 },
      { cod: '237', nome: 'Salmão Grelhado', desc: 'Com spaguetti ao molho de tomate, alcaparras, azeitonas, manjericão e pimenta.', preco: 59.9 },
      { cod: '232', nome: 'Filé à Cavalo', desc: 'Filé mignon, ovos fritos, arroz branco e batata rústica.', preco: 55.9 },
      { cod: '233', nome: 'Picanha Grelhada', desc: 'Picanha importada, arroz biro biro e batatas fritas.', preco: 55.9 },
      { cod: '238', nome: 'Filé à Matriciana', desc: 'Ao molho madeira, nhoque de batata, molho de tomate, cebola e bacon.', preco: 56.9 },
      { cod: '239', nome: 'Filé Paillard', desc: 'Filé mignon fino selado na chapa, risoto de tomate seco e legumes.', preco: 53.9 },
      { cod: '240', nome: 'Tilápia à Milanesa', desc: 'Risoto de queijo e salada de tomate ao aceto balsâmico.', preco: 48.9 },
      { cod: '223', nome: 'Yakissoba de Filé Mignon', medida: 'individual', desc: 'Macarrão oriental, legumes e carne.', preco: 39.9 },
      { cod: '224', nome: 'Yakissoba de Frango', medida: 'individual', desc: 'Macarrão oriental, legumes e frango.', preco: 34.9 },
      { cod: '225', nome: 'Yakissoba Especial', medida: 'individual', desc: 'Macarrão oriental, legumes, carne, frango e camarão.', preco: 43.9 },
      { cod: '251', nome: 'Salada Nori', desc: 'Alface americana, tomate cereja, manga, tiras de frango e molho da casa.', preco: 30.9 },
      { cod: '249', nome: 'Salada do Chef', desc: 'Folhas, lascas de salmão, tomate cereja, queijo, manga e castanha-do-pará.', preco: 37.9 },
    ],
  },
  {
    id: 'dois',
    nome: 'Para 2 pessoas',
    grupo: 'cozinha',
    itens: [
      { cod: '267', nome: 'Carne de Sol Nordestina', desc: 'Carne de sol, baião mole, macaxeira e cebolinha.', preco: 96.9, novo: true },
      { cod: '273', nome: 'Salmão ao Molho de Maracujá', desc: 'Com arroz de brócolis.', preco: 99.9, novo: true },
      { cod: '278', nome: 'Camarão Internacional', desc: 'Camarão no creme de queijos, ervilha, presunto, batata palha e arroz no próprio molho.', preco: 111.9, novo: true },
      { cod: '269', nome: 'Filé tipo à Carbonara', desc: 'Filé ao molho madeira, com spaguetti à carbonara.', preco: 103.9 },
      { cod: '270', nome: 'Risoto de Camarão', preco: 102.9 },
      { cod: '271', nome: 'Filé à Medalhão', desc: 'Medalhões de filé, arroz yakimeshi e batatas fritas.', preco: 89.9 },
      { cod: '272', nome: 'Filé à Parmegiana', desc: 'Com arroz branco e purê.', preco: 83.9 },
      { cod: '274', nome: 'Frango à Parmegiana', desc: 'Com arroz branco e purê.', preco: 69.9 },
      { cod: '275', nome: 'Filé à Moda da Casa', desc: 'Filé mignon, mussarela e molho de vinho tinto, com arroz piamontese.', preco: 88.9 },
      { cod: '276', nome: 'Filé do Sertão', desc: 'Filé ao molho madeira com queijo coalho, e risoto do mesmo molho.', preco: 88.9 },
      { cod: '2062', nome: 'Tábua Mista', desc: '160 g de filé, coxa e sobrecoxa, linguiça toscana, repolho na chapa, arroz yakimeshi, molhos agridoce e barbecue.', preco: 76.9 },
      { cod: '2063', nome: 'Tábua Especial', desc: 'A Tábua Mista com 100 g de camarões no lugar da linguiça.', preco: 88.9 },
      { cod: '286', nome: 'Spaghetti à Bolonhesa', preco: 49.9 },
      { cod: '287', nome: 'Fettuccine tipo à Carbonara', desc: 'Molho branco e bacon.', preco: 50.9 },
      { cod: '288', nome: 'Fettuccine com Filé', desc: 'Tiras de filé, azeitonas pretas e funghi secchi.', preco: 66.9 },
      { cod: '289', nome: 'Fettuccine com Camarão 4 Queijos', preco: 74.9 },
    ],
  },
  {
    id: 'grelhados',
    nome: 'Grelhados',
    nota: 'mínimo de 200 g · com farofa e vinagrete',
    grupo: 'cozinha',
    itens: [
      { cod: '500', nome: 'Filé Mignon', medida: '100 g', preco: 29.9 },
      { cod: '501', nome: 'Picanha Argentina', medida: '100 g', preco: 27.9 },
      { cod: '502', nome: 'Maminha', medida: '100 g', preco: 19.9 },
      { cod: '503', nome: 'Picanha Suína', medida: '100 g', preco: 18.9 },
      { cod: '504', nome: 'Coxa e Sobrecoxa de Frango', medida: 'unidade', preco: 25.9 },
      { cod: '511', nome: 'Arroz Branco', medida: 'porção extra', preco: 9.9 },
      { cod: '518', nome: 'Purê de Batata', medida: 'porção extra', preco: 9.9 },
      { cod: '512', nome: 'Arroz Yakimeshi', medida: 'porção extra', preco: 11.9 },
      { cod: '513', nome: 'Arroz de Alho', medida: 'porção extra', preco: 13.9 },
      { cod: '514', nome: 'Arroz Biro Biro', medida: 'porção extra', preco: 15.9 },
      { cod: '515', nome: 'Arroz Piamontese', medida: 'porção extra', preco: 15.9 },
      { cod: '517', nome: 'Farofa de Ovos', medida: 'porção extra', preco: 16.9 },
      { cod: '516', nome: 'Baião de Dois', medida: 'porção extra', preco: 17.9 },
      { cod: '519', nome: 'Arroz de Brócolis', medida: 'porção extra', preco: 19.9 },
    ],
  },
  {
    id: 'lanches',
    nome: 'Lanches',
    grupo: 'cozinha',
    itens: [
      { cod: '346', nome: 'Ivete', desc: 'Pão bola, hambúrguer de 120 g, mussarela, molho especial e batata frita.', preco: 32.9 },
      { cod: '348', nome: 'Michel Teló', desc: 'Pão árabe, filé, mussarela, molho especial e verduras.', preco: 32.9 },
      { cod: '349', nome: 'Nori Barbecue', desc: 'Pão bola, hambúrguer de 120 g, cheddar, onion rings e molho barbecue.', preco: 33.9 },
      { cod: '388', nome: 'Pastel Giga Carne', desc: 'Carne moída e azeitonas.', preco: 29.9 },
      { cod: '390', nome: 'Pastel Giga Misto', desc: 'Mussarela e presunto de peru.', preco: 29.9 },
      { cod: '391', nome: 'Pastel Giga Calabresa', desc: 'Mussarela e calabresa picada.', preco: 29.9 },
      { cod: '392', nome: 'Pastel Giga Frango Catupiry', desc: 'Frango desfiado e catupiry.', preco: 30.9 },
      { cod: '356', nome: 'Adicional', desc: 'Queijo, presunto, ovo, bacon ou molho especial.', preco: 3 },
      { cod: '357', nome: 'Adicional', desc: 'Hambúrguer, frango, calabresa, batata frita, cheddar ou catupiry.', medida: 'reforçado', preco: 6 },
    ],
  },
  {
    id: 'kids',
    nome: 'Kids',
    grupo: 'cozinha',
    itens: [
      { cod: '261', nome: 'Filé Mignon Kids', desc: '100 g de filé trinchado, arroz branco e batata frita.', preco: 32.9 },
      { cod: '262', nome: 'Franguinho do Nori', desc: '100 g de peito de frango, arroz branco e batata frita.', preco: 29.9 },
      { cod: '263', nome: 'Fettuccine Kids', desc: 'Com presunto e queijo, ao molho branco.', preco: 28.9 },
    ],
  },
  {
    id: 'sobremesas',
    nome: 'Sobremesas',
    grupo: 'cozinha',
    itens: [
      { cod: '294', nome: 'Petit Gateau', desc: 'Com sorvete de creme.', preco: 19.9 },
      { cod: '295', nome: 'Brownie', desc: 'Com castanhas e sorvete de creme.', preco: 19.9 },
      { cod: '296', nome: 'Pudim de Leite', preco: 12.9 },
      { cod: '297', nome: 'Cocada com Sorvete', desc: 'Para compartilhar.', preco: 26.9 },
      { cod: '298', nome: 'Bola de Sorvete', preco: 11 },
    ],
  },
  {
    id: 'drinks',
    nome: 'Drinks',
    grupo: 'bar',
    itens: [
      { cod: '554', nome: 'Drink Autoral', preco: 39.9 },
      { cod: '549', nome: 'Gin com Especiarias', preco: 35.9 },
      { cod: '548', nome: 'Gin Tônica', preco: 27.9 },
      { cod: '552', nome: 'Mojito', preco: 27.9 },
      { cod: '551', nome: 'Blue Sky', preco: 27.9 },
      { cod: '550', nome: 'Sex on the Beach', preco: 31.9 },
      { cod: '541', nome: 'Caipirinha de Limão', preco: 19.9 },
      { cod: '542', nome: 'Caipirinha de Frutas da Estação', preco: 22.9 },
      { cod: '545', nome: 'Caipiroska Smirnoff de Limão', preco: 23.9 },
      { cod: '546', nome: 'Caipiroska Smirnoff de Frutas da Estação', preco: 26.9 },
      { cod: '547', nome: 'Caipiroska Absolut de Frutas da Estação', preco: 32.9 },
      { cod: '553', nome: 'Tropical Juice', medida: 'sem álcool', preco: 29.9 },
    ],
  },
  {
    id: 'sucos',
    nome: 'Sucos',
    nota: 'copo ou jarra',
    grupo: 'bar',
    itens: [
      suco('041', '441', 'Cajá', 8.9, 22.9),
      suco('042', '442', 'Limão', 7.9, 21.9),
      suco('043', '443', 'Laranja', 8.9, 22.9),
      suco('044', '444', 'Abacaxi com Hortelã', 8.9, 22.9),
      suco('049', '449', 'Abacaxi', 7.9, 21.9),
      suco('045', '445', 'Goiaba', 7.9, 19.9),
      suco('046', '446', 'Acerola', 7.9, 19.9),
      suco('047', '447', 'Limonada Suíça', 9.9, 25.9),
      suco('048', '448', 'Maracujá', 9.9, 25.9),
      suco('050', '450', 'Laranja com Acerola', 9.9, 25.9),
    ],
  },
  {
    id: 'cervejas',
    nome: 'Cervejas',
    grupo: 'bar',
    itens: [
      { cod: '025', nome: 'Devassa', medida: '600 ml', preco: 9.9 },
      { cod: '015', nome: 'Itaipava 100%', medida: '600 ml', preco: 9.9 },
      { cod: '030', nome: 'Amstel', medida: '600 ml', preco: 10.4 },
      { cod: '026', nome: 'Petra', medida: '600 ml', preco: 10.9 },
      { cod: '016', nome: 'Skol', medida: '600 ml', preco: 12.9 },
      { cod: '020', nome: 'Bohemia', medida: '600 ml', preco: 12.9 },
      { cod: '027', nome: 'Eisenbahn', medida: '600 ml', preco: 12.9 },
      { cod: '017', nome: 'Brahma', medida: '600 ml', preco: 14.9 },
      { cod: '018', nome: 'Brahma Duplo Malte', medida: '600 ml', preco: 15.9 },
      { cod: '024', nome: 'Budweiser', medida: '600 ml', preco: 15.9 },
      { cod: '019', nome: 'Antarctica Original', medida: '600 ml', preco: 16.9 },
      { cod: '023', nome: 'Spaten', medida: '600 ml', preco: 16.9 },
      { cod: '022', nome: 'Stella Artois', medida: '600 ml', preco: 18.9 },
      { cod: '021', nome: 'Heineken', medida: '600 ml', preco: 19.9 },
      { cod: '009', nome: 'Cerveja sem Álcool', medida: 'long neck', preco: 11.9 },
      { cod: '010', nome: 'Stella Artois', medida: 'long neck', preco: 11.9 },
      { cod: '012', nome: 'Bohemia', medida: 'long neck', preco: 11.9 },
      { cod: '013', nome: 'Budweiser', medida: 'long neck', preco: 11.9 },
      { cod: '011', nome: 'Heineken', medida: 'long neck', preco: 14.9 },
      { cod: '014', nome: 'Corona', medida: 'long neck', preco: 14.9 },
    ],
  },
  {
    id: 'doses',
    nome: 'Doses',
    grupo: 'bar',
    itens: [
      { cod: '532', nome: 'Saquê', preco: 10.9 },
      { cod: '526', nome: 'Absolut', preco: 18.9 },
      { cod: '527', nome: 'Smirnoff', preco: 11.9 },
      { cod: '528', nome: 'Orloff', preco: 8.9 },
      { cod: '529', nome: 'Rum Montilla', preco: 9.9 },
      { cod: '530', nome: 'Campari', preco: 11.9 },
      { cod: '531', nome: 'Martini', preco: 10.9 },
      { cod: '533', nome: 'Cointreau', preco: 29.9 },
      { cod: '535', nome: 'Ypióca', preco: 9.9 },
      { cod: '536', nome: 'Ypióca 150', preco: 11.9 },
      { cod: '061', nome: 'Whisky Black White', preco: 14.9 },
      { cod: '062', nome: 'Whisky Red Label', preco: 15.9 },
      { cod: '064', nome: 'Whisky Old Parr', preco: 22.9 },
      { cod: '063', nome: "Whisky Jack Daniel's", preco: 24.9 },
      { cod: '065', nome: 'Whisky Chivas Regal', preco: 26.9 },
      { cod: '066', nome: 'Whisky Black Label', preco: 26.9 },
    ],
  },
  {
    id: 'sem-alcool',
    nome: 'Sem álcool',
    grupo: 'bar',
    itens: [
      { cod: '004', nome: 'Água Mineral sem Gás', preco: 5.9 },
      { cod: '005', nome: 'Água Mineral com Gás', preco: 6.9 },
      { cod: '008', nome: 'Água Tônica', preco: 9.9 },
      { cod: '001', nome: 'Refrigerante KS', preco: 6.9 },
      { cod: '002', nome: 'Refrigerante Lata', preco: 7.5 },
      { cod: '003', nome: 'Refrigerante 1 L', preco: 13.9 },
      { cod: '534', nome: 'Energético', preco: 19.9 },
      {
        cod: '006',
        nome: 'Água de Coco',
        preco: [
          { rotulo: 'copo', valor: 8.5, cod: '006' },
          { rotulo: 'jarra', valor: 23.9, cod: '007' },
        ],
      },
    ],
  },
];

export const rodapeCardapio =
  'Taxa de serviço de 10% no salão. Maki, uramaki e hot saem em no mínimo 4 peças de cada.';

const F = (arquivo: string) => `/proposta/nori/${arquivo}`;

/**
 * As fotos da casa, todas do Instagram @norisushis — o nome do prato
 * vem da legenda do post quando ela diz. Ligadas ao cardápio pelo
 * código, para a miniatura aparecer ao lado do prato.
 */
const FOTO_DO_PRATO: Record<string, string> = {
  '108': F('sushi-dog.jpg'),
  '127': F('poke.jpg'),
  '099': F('hot-philadelfia.jpg'),
  '238': F('file-matriciana.jpg'),
  '320': F('rolinho-primavera.jpg'),
  '194': F('pizza-nutella.jpg'),
  '184': F('pizza-salmao.jpg'),
};
for (const secao of cardapio) {
  for (const item of secao.itens) {
    if (item.cod && FOTO_DO_PRATO[item.cod]) item.foto = FOTO_DO_PRATO[item.cod];
  }
}

/** Da cozinha — preço do cardápio de julho de 2026, quando a foto é de um prato só. */
export const cozinha = [
  { src: F('combinado.jpg'), alt: 'Combinado de sushi servido no barco', titulo: 'Combinados', detalhe: 'Do Combo 01 ao do Sushiman', preco: 'a partir de R$ 64,90' },
  { src: F('sushi-dog.jpg'), alt: 'Sushi Dog empanado com couve frita', titulo: 'Sushi Dog', detalhe: 'Sushis especiais', preco: 38.9 },
  { src: F('pizza-meio-a-meio.jpg'), alt: 'Pizza meio a meio', titulo: 'Pizza meio a meio', detalhe: '4 ou 8 fatias' },
  { src: F('hot-philadelfia.jpg'), alt: 'Hot philadelfia empanado', titulo: 'Hot Philadelfia', detalhe: 'Mínimo de 4 peças', preco: 'R$ 4,00 a peça' },
  { src: F('poke.jpg'), alt: 'Nori Poke de Camarão na taça', titulo: 'Nori Poke Camarão', detalhe: 'Novidade', preco: 42.9 },
  { src: F('file-matriciana.jpg'), alt: 'Filé à matriciana com nhoque', titulo: 'Filé à Matriciana', detalhe: 'Pratos individuais', preco: 56.9 },
  { src: F('salmao-flambado.jpg'), alt: 'Rolinhos de salmão flambado com cream cheese', titulo: 'Salmão flambado', detalhe: 'Sushis especiais' },
  { src: F('picanha.jpg'), alt: 'Carne grelhada com arroz e batata frita', titulo: 'Grelhados', detalhe: 'Pratos individuais' },
  { src: F('niguiri.jpg'), alt: 'Niguiris de salmão flambado', titulo: 'Niguiris', detalhe: 'Por peça', preco: 'R$ 6,00 a peça' },
  { src: F('uramakis.jpg'), alt: 'Uramakis de salmão', titulo: 'Uramakis', detalhe: 'Mínimo de 4 peças', preco: 'R$ 4,00 a peça' },
  { src: F('hots.jpg'), alt: 'Bandeja de hots empanados com cream cheese', titulo: 'Hots', detalhe: 'Mínimo de 4 peças', preco: 'R$ 4,00 a peça' },
  { src: F('yakisoba.jpg'), alt: 'Duas tigelas de yakisoba', titulo: 'Yakissoba', detalhe: 'Porção individual', preco: 'a partir de R$ 34,90' },
  { src: F('pizza-nutella.jpg'), alt: 'Pizza doce de Nutella com morangos', titulo: 'Nutella com Morango', detalhe: 'Pizzas doces', preco: 47.9 },
  { src: F('rolinho-primavera.jpg'), alt: 'Rolinhos primavera', titulo: 'Rolinho Primavera', detalhe: 'Entradas', preco: 11.9 },
];

export const rodape = {
  nome: 'Nori Restaurante',
  logo: { src: F('logo.png'), largura: 593, altura: 242 },
  lema: 'Sushi, pizza & sabor de verdade',
  razao: 'Nori Alimentos Ltda',
  cnpj: '12.361.181/0001-60',
  endereco: ['Rua Deputado Adail Barreto, 16 — Centro', 'Iguatu — CE · 63500-065'],
  horario: ['Todos os dias, 18h à 0h'],
  contatos: [
    { icone: 'telefone' as const, rotulo: '(88) 3581-0834', href: 'tel:+558835810834' },
    { icone: 'whatsapp' as const, rotulo: '(88) 99763-7364', href: `https://wa.me/${casa.whatsapp}` },
    { icone: 'instagram' as const, rotulo: '@norisushis', href: casa.instagram },
    { icone: 'local' as const, rotulo: 'Unidade Quixadá: @nori.quixada', href: quixada.instagram },
  ],
  observacoes: [
    'Taxa de serviço de 10% no salão.',
    'Não nos responsabilizamos por objetos deixados nas mesas e dependências do restaurante e do park.',
  ],
};
