import type { Secao, Semana, Tema } from '../_restaurante/tipos';

/**
 * Conteúdo do Vila da Telha Gastrobar.
 *
 * Levantado em 23/09/2026, de três fontes da própria casa:
 *
 * - o cardápio "CARDÁPIO VILA DA TELHA 2026.pdf", 12 páginas e 21 MB,
 *   linkado na bio do Instagram — todos os pratos, códigos e preços;
 * - a bio e os posts do @viladatelha — horário, Menu Executivo;
 * - a página do Facebook — a logo em alta e a "recomendação" de 96%.
 *
 * Os nomes dos pratos estão como no cardápio impresso, inclusive a
 * grafia ("Spaguetti", "Tournedor"). As descrições foram encurtadas
 * sem tirar ingrediente. É o arquivo que a casa precisa revisar antes
 * de publicar, e ninguém revisa conteúdo lendo JSX.
 */

export const casa = {
  nome: 'Vila da Telha Gastrobar',
  curto: 'Vila da Telha',
  lema: 'Momentos & Cultura & Sabores',
  desde: 2015,

  endereco: ['Rua Bandeira, 78 — Centro', 'Iguatu — CE'],
  consultaMapa: 'Vila da Telha Gastrobar, R. Bandeira, 78 - Centro, Iguatu - CE',
  telefone: '(88) 3581-0163',
  // O número do link "Reservas & delivery" da bio, como o próprio
  // WhatsApp devolve. Não é exibido na página: só o botão.
  whatsapp: '558897238523',
  instagram: 'https://www.instagram.com/viladatelha',
  instagramArroba: '@viladatelha',
  facebook: 'https://www.facebook.com/people/Vila-da-Telha-Gastrobar/100069557531533/',
  linkGoogle: 'https://www.google.com/maps/search/?api=1&query=Vila+da+Telha+Gastrobar+Iguatu',
};

/**
 * O horário da bio do Instagram: "11h às 15h | 18h às 00h".
 *
 * O Google diz outra coisa — fecha às 22h — e nenhum dos dois diz se
 * algum dia da semana é fechado. Usamos o da bio por ser o que a casa
 * escreveu; confirmar é a primeira pergunta da conversa.
 */
const almocoEJantar: Semana[number] = [
  ['11:00', '15:00'],
  ['18:00', '24:00'],
];
export const semana: Semana = [
  almocoEJantar,
  almocoEJantar,
  almocoEJantar,
  almocoEJantar,
  almocoEJantar,
  almocoEJantar,
  almocoEJantar,
];

export const tema: Tema = {
  marca: '#7B1A22',
  marcaEscura: '#3E0D12',
  sobreMarca: '#FBF3E6',
  destaque: '#D9A45B',
  fundo: '#FBF6EE',
  papel: '#FFFFFF',
  areia: '#F3E9DA',
  borda: '#E6D8C4',
  tinta: '#2A1D18',
  tintaMedia: '#6B584B',
  tintaFraca: '#9A8676',
};

/** Do post de 24/08/2026: almoço de segunda a sexta, com desconto no delivery. */
export const executivo = {
  preco: 34.9,
  quando: 'Almoço de segunda a sexta',
  delivery: '10% de desconto no delivery',
  pratos: [
    'Escalopinho de Filé Suíno',
    'Picadinho do Chef',
    'Risotinho do Cariri',
    'Tilápia ao Pomodoro',
    'Parmegiana de Frango',
    'Spaghetti Integral com Filé de Peixe ou Filé de Frango',
  ],
};

export const cardapio: Secao[] = [
  {
    id: 'compartilhar',
    nome: 'Para compartilhar',
    grupo: 'cozinha',
    itens: [
      { cod: '1174', nome: 'Camarão à Parmegiana', desc: 'Camarões empanados, mussarela e molho artesanal de tomate.', preco: 52.9, novo: true },
      { cod: '3728', nome: 'Brusquetas de Camarão', desc: 'Fatias de pão tostadas com pasta de camarão e catupiry, tomate cereja e cebolinha.', preco: 39.9, novo: true },
      { cod: '3729', nome: 'Croquete Suíno', desc: 'Carne suína assada e desfiada, temperada com pimentões, cebola roxa, mostarda e coentro, empanada no panko, com maionese temperada e goiabada.', preco: 34.9, novo: true },
      { cod: '3730', nome: 'Crocante de Salmão', desc: 'Salmão com cream cheese e cebolinha empanado no panko, com crispy de couve e molho tarê.', preco: 39.9, novo: true },
      { cod: '3732', nome: 'Toast de Shimeji', desc: 'Pão de fermentação natural, azeite de alho, creme de gorgonzola, shimeji salteado, pera glaceada e cebola roxa marinada.', preco: 39.9, novo: true },
      { cod: '3733', nome: 'Toast de Caprese', desc: 'Pão de fermentação natural, azeite de alho, cream cheese, tomate cereja confit e uma generosa camada de pesto.', preco: 38.9, novo: true },
      { cod: '3734', nome: 'Varal de Frios e Queijos', desc: 'Seleção de embutidos, queijos, azeitonas e frutas. Serve 3 a 4 pessoas.', preco: 89.9, novo: true },
      { cod: '3735', nome: 'Camarões no Azeite Quente', desc: 'Camarões GG grelhados e flambados, pão italiano de fermentação natural, alho, salsinha e bastante azeite extravirgem.', preco: 56.9, novo: true },
      { cod: '002', nome: 'Steak Tartare', desc: 'Filé mignon cru em pedacinhos, temperado e regado com azeite, com chips de batata.', preco: 56.9 },
      { cod: '036', nome: 'Tartare de Salmão', desc: 'Salmão em pedacinhos e cream cheese, com torradas.', preco: 55.9 },
      { cod: '1173', nome: 'Vinagrete de Polvo', desc: 'Polvo picado, cebola, pimentões e frutas, com azeite e molho cítrico.', preco: 58.9 },
      { cod: '1170', nome: 'Burrata do Vila', desc: 'Burrata de búfala, tomatinhos concassé, presunto de Parma e pesto genovês.', preco: 74.9 },
      { cod: '1171', nome: 'Filé Gorgonzola', desc: 'Filé trinchado com molho gorgonzola.', preco: 49.9 },
      { cod: '1172', nome: 'Mignonzinhos Blue Cheese', desc: 'Seis bombons de filé mignon sobre minibatatas, com molho especial de gorgonzola.', preco: 42.9 },
      { cod: '1176', nome: 'Pão de Alho Especial', desc: 'Pão de alho recheado com frango desfiado.', preco: 14.9 },
      { cod: '001', nome: 'Bruschetta Tradicional', desc: 'Queijo, tomate, manjericão e azeite sobre torradas, gratinado com parmesão e pesto.', preco: 29.9 },
      { cod: '006', nome: 'Carpaccio Tradicional', desc: 'Fatias finas de carne crua, molho italiano, alcaparras, parmesão e azeite trufado.', preco: 49.9 },
      { cod: '007', nome: 'Ceviche de Salmão', desc: 'Salmão marinado no limão, cebola roxa, cebolinha e pimenta dedo-de-moça.', preco: 42.9 },
      { cod: '009', nome: 'Camarão Alho e Óleo', desc: 'Camarões puxados no azeite, alho e salsa fresca.', preco: 49.9 },
      { cod: '010', nome: 'Camarão Provençal', desc: 'Camarões com alho, molho de tomate, vinho branco, salsa fresca e limão.', preco: 49.9 },
      { cod: '011', nome: 'Camarão à Grega', desc: 'Camarões empanados intercalados com queijo frito, com geleia de pimenta e melaço de cana.', preco: 55.9 },
      { cod: '1090', nome: 'Mistura Nordestina', desc: 'Feijão tropeiro, carne seca com purê de macaxeira, picanha ao chimichurri, filé mignon, queijo coalho com melaço, vinagrete e molho de cebola.', preco: 79.9 },
      { cod: '016', nome: 'Parmegiana Aperitivo', desc: 'Filé empanado ao molho de tomates frescos, gratinado com mussarela e parmesão, com batatas fritas.', preco: 44.9 },
      { cod: '018', nome: 'Batata Frita', desc: 'Com molho rosé.', preco: 27.9 },
      { cod: '019', nome: 'Batata Frita do Vila', desc: 'Com bacon, cheddar e parmesão.', preco: 32.9 },
      { cod: '020', nome: 'Filé Acebolado', desc: 'Filé trinchado acebolado, com molho madeira.', preco: 47.9 },
      { cod: '021', nome: 'Costelinha Suína', desc: 'Com molho barbecue e feijão tropeiro.', preco: 39.9 },
      { cod: '023', nome: 'Pasteizinhos de Filé', desc: 'Com geleia de pimenta.', preco: 29.9 },
      { cod: '024', nome: 'Pão de Alho', desc: 'Pão francês com molho de alho especial.', preco: 14.9 },
      { cod: '026', nome: 'Carne Seca Nordestina', desc: 'Carne seca refogada com cebola roxa, pimenta-de-cheiro e cebolinha, queijo coalho e macaxeira frita na manteiga da terra.', preco: 39.9 },
      { cod: '029', nome: 'Caldinho de Peixe', desc: 'Feito com salmão.', preco: 14.9 },
      { cod: '030', nome: 'Caldinho de Feijão', desc: 'Com bacon frito, ovos e cebolinha.', preco: 16.9 },
      { cod: '276', nome: 'Croissant de Camarão', desc: 'Camarão envolto em massa especial e catupiry. Leva 20 minutos.', preco: 56.9 },
    ],
  },
  {
    id: 'angus',
    nome: 'Cortes especiais',
    nota: 'Angus Beef',
    grupo: 'cozinha',
    itens: [
      { cod: '044', nome: 'Beef Ancho', desc: '300 g do marmorizado, do centro do contrafilé, entre a 6ª e a 10ª costela.', preco: 68.9 },
      { cod: '045', nome: 'Beef Chorizo', desc: '300 g do contrafilé, entre a 10ª e a 12ª costela.', preco: 68.9 },
      { cod: '047', nome: 'Prime Rib Suíno', desc: '350 g do corte com osso da ponta do contrafilé suíno.', preco: 40.9 },
      { cod: '049', nome: 'Chateaubriand', desc: '400 g do corte alto do filé mignon.', preco: 79.9 },
    ],
  },
  {
    id: 'grelhados',
    nome: 'Grelhados',
    nota: 'por 100 g ou por unidade',
    grupo: 'cozinha',
    itens: [
      { cod: '1178', nome: 'Linguiça Cuiabana Recheada com Queijo', medida: 'unidade', preco: 25.9, novo: true },
      { cod: '1177', nome: 'Linguiça Suína', medida: 'unidade', preco: 14.9 },
      { cod: '051', nome: 'Frango Desossado', desc: 'Coxa e sobrecoxa.', medida: 'unidade', preco: 26.9 },
      { cod: '052', nome: 'Filé Mignon', medida: '100 g', preco: 29.9 },
      { cod: '053', nome: 'Picanha', medida: '100 g', preco: 29.9 },
      { cod: '054', nome: 'Maminha', medida: '100 g', preco: 20.9 },
      { cod: '055', nome: 'Picanha Suína', medida: '100 g', preco: 18.9 },
      { cod: '057', nome: 'Picanha de Cordeiro', medida: '100 g', preco: 27.9 },
      { cod: '058', nome: 'Carré de Cordeiro', medida: '100 g', preco: 32.9 },
      { cod: '059', nome: 'Linguiça de Cabrito', medida: '100 g', preco: 19.9 },
      { cod: '351', nome: 'Filé de Frango Grelhado', medida: '100 g', preco: 13.9 },
    ],
  },
  {
    id: 'acompanhamentos',
    nome: 'Acompanhamentos',
    grupo: 'cozinha',
    itens: [
      { cod: '063', nome: 'Arroz Branco', preco: 11.9 },
      { cod: '064', nome: 'Arroz com Alho', preco: 15.9 },
      { cod: '065', nome: 'Arroz à Grega', preco: 16.9 },
      { cod: '066', nome: 'Arroz com Brócolis', preco: 20.9 },
      { cod: '067', nome: 'Arroz Biro Biro', preco: 23.9 },
      { cod: '068', nome: 'Arroz Piamontese', preco: 24.9 },
      { cod: '279', nome: 'Feijão Tropeiro', preco: 22.9 },
      { cod: '069', nome: 'Baião de Dois', preco: 21.9 },
      { cod: '071', nome: 'Legumes no Azeite', preco: 17.9 },
      { cod: '306', nome: 'Legumes Grelhados', desc: 'Tomate, abobrinha e cebola na manteiga, com alcaparras.', preco: 18.9 },
      { cod: '075', nome: 'Farofa de Ovos', preco: 18.9 },
      { cod: '080', nome: 'Batata Rústica', preco: 12.9 },
      { cod: '072', nome: 'Ovo Caipira Frito', preco: 2.9 },
      { cod: '074', nome: 'Banana Milanesa', preco: 3.9 },
    ],
  },
  {
    id: 'panelinha',
    nome: 'Panelinha do Vila',
    grupo: 'cozinha',
    itens: [
      { cod: '360', nome: 'Arroz de Polvo', preco: 41.9 },
      { cod: '361', nome: 'Arroz de Carneiro', preco: 41.9 },
      { cod: '362', nome: 'Arroz de Linguiça', preco: 30.9 },
    ],
  },
  {
    id: 'saladas',
    nome: 'Saladas',
    grupo: 'cozinha',
    itens: [
      { cod: '3736', nome: 'Salada Villa de Camarão', desc: 'Folhas, gergelim, abacaxi, cenoura e pepino ralados, brócolis, camarão, tomate cereja, repolho roxo e molho tarê.', preco: 40.9, novo: true },
      { cod: '3737', nome: 'Salada de Carne de Sol', desc: 'Folhas, queijo coalho, tomate cereja, cenoura, carne de sol desfiada, amêndoas, chips de batata-doce, mostarda e mel.', preco: 38.9, novo: true },
      { cod: '3738', nome: 'Salada de Frango e Legumes', desc: 'Folhas, penne, milho verde, cenoura ralada e frango.', preco: 34.9, novo: true },
      { cod: '083', nome: 'Salada Ceaser', desc: 'Alface americana, tiras de frango, bacon, queijo e croutons.', preco: 33.9 },
      { cod: '085', nome: 'Salada do Chef', desc: 'Folhas, lascas de salmão, tomate cereja, queijo, manga e castanha-do-pará ao molho de mostarda e mel.', preco: 38.9 },
    ],
  },
  {
    id: 'especiais',
    nome: 'Especiais do Vila',
    grupo: 'cozinha',
    itens: [
      { cod: '3748', nome: 'Bacalhau à Riviera', desc: 'Assado no forno com batatas coradas, tomate, pimentões e brócolis, bastante azeite, crosta de alho e arroz branco.', preco: 126.9, novo: true },
      { cod: '3739', nome: 'Bacalhau do Porto', desc: 'Grelhado em cama de cebola e pimentão, confit de alho, tomate cereja, azeitonas pretas e ovos cozidos, com legumes torneados e arroz de brócolis.', preco: 126.9, novo: true },
      { cod: '112', nome: 'Bacalhau Gomes de Sá', desc: '160 g de lascas no azeite, azeitonas pretas, cebolinha, salsinha, brócolis, ovos cozidos e batata sauté.', preco: 95.9 },
      { cod: '1189', nome: 'Polvo ao Mediterrâneo', desc: 'Polvo confitado e salteado com rúcula e tomate cereja, arroz negro e purê de beterraba com catupiry.', preco: 69.9, novo: true },
      { cod: '1181', nome: 'Camarão ao Tartufo', desc: 'Camarão grelhado ao creme e azeite trufado, risoto de funghi e cebolete glaceada.', preco: 69.9 },
      { cod: '1182', nome: 'Magret de Pato', desc: 'Peito de pato ao ponto, risoto de pera com gorgonzola e molho de laranja com mel trufado.', preco: 89.9 },
    ],
  },
  {
    id: 'massas',
    nome: 'Massas',
    grupo: 'cozinha',
    itens: [
      { cod: '3743', nome: 'Carbonara Originale', desc: 'Massa grano duro, emulsão de gemas, parmesão, pimenta, panceta em cubos e manteiga.', preco: 45.9, novo: true },
      { cod: '3744', nome: 'Gnocchi do Marinheiro', desc: 'Gnocchi dourado ao molho marinheiro, tomates com gorgonzola e camarões na manteiga com salsinha.', preco: 47.9, novo: true },
      { cod: '3745', nome: 'Gnocchi ao Gorgonzola', desc: 'Bombons de filé mignon e gnocchi ao molho de gorgonzola, gratinados com parmesão.', preco: 54.9, novo: true },
      { cod: '1183', nome: 'Lagosta do Vila', desc: 'Lagosta grelhada, molho de ervas de Provence com alho e limão, spaguetti ao molho de camarão.', preco: 88.9 },
      { cod: '088', nome: 'Spaguetti com Camarão', desc: 'No azeite, com molho de tomate, azeitonas pretas, champignon e bacon.', preco: 63.9 },
      { cod: '281', nome: 'Spaguetti Fruto do Mar', desc: 'Misto de mariscos no molho de tomate.', preco: 69.9 },
      { cod: '339', nome: 'Fettuccine Camarão no Molho 4 Queijos', preco: 66.9 },
      { cod: '091', nome: 'Penne ala Toscana', desc: 'Redução de calabresa, linguiça toscana, tomate fresco, azeite e parmesão.', preco: 39.9 },
    ],
  },
  {
    id: 'risotos',
    nome: 'Risotos',
    grupo: 'cozinha',
    itens: [
      { cod: '097', nome: 'Risoto de Carne Seca', desc: 'Carne seca na manteiga de garrafa, cebola roxa, pimenta-de-cheiro, coentro, parmesão e banana-da-terra.', preco: 59.9, novo: true },
      { cod: '3747', nome: 'Risoto de Cogumelos e Tartufo', desc: 'Shimeji e shitake, leite de coco, açafrão e azeite trufado.', preco: 50.9, novo: true },
      { cod: '1186', nome: 'Risoto de Filé Mignon', desc: 'Cubos de filé no vinho branco, parmesão, queijo coalho e azeite trufado.', preco: 64.9 },
      { cod: '095', nome: 'Risoto de Camarão', desc: 'Camarões no vinho branco, tomate cereja, rúcula, manga e champignon.', preco: 66.9 },
      { cod: '099', nome: 'Risoto de Picanha', desc: 'Cubos de picanha no vinho tinto, funghi secchi, cebola roxa e parmesão.', preco: 60.9 },
      { cod: '341', nome: 'Risoto de Salmão com Camarões', desc: 'Cubos de salmão no azeite com cebolinha, molho de tomate e parmesão, e camarões no azeite.', preco: 72.9 },
    ],
  },
  {
    id: 'peixes',
    nome: 'Peixes e mariscos',
    grupo: 'cozinha',
    itens: [
      { cod: '3741', nome: 'Salmão Negro', desc: 'Salmão com creme cítrico de limão-siciliano e risoto de arroz negro com alho-poró.', preco: 64.9, novo: true },
      { cod: '3749', nome: 'Salmão Canadense', desc: 'Ao molho agridoce de coco com açafrão e vermute, batatas coradas, camarão, alcaparras e risoto de queijo.', preco: 63.9, novo: true },
      { cod: '3750', nome: 'Camarão Tropical', desc: 'Camarões ao molho de catupiry, abacaxi e hortelã, servidos no abacaxi, com risoto no próprio molho.', preco: 69.9, novo: true },
      { cod: '3751', nome: 'Tilápia Suprema', desc: 'Gratinada com queijo e banana ao bechamel, purê de batatas e risoto de queijo.', preco: 49.9, novo: true },
      { cod: '1063', nome: 'Salmão Siciliano', desc: '180 g ao molho de alcaparras, champignon e tomate cereja, com arroz de brócolis e legumes.', preco: 68.9 },
      { cod: '1190', nome: 'Moqueca de Camarão', desc: 'À baiana, com arroz branco e farofa especial.', preco: 63.9 },
      { cod: '101', nome: 'Tilápia Milanesa com Camarão', desc: '170 g empanada, coberta com molho de camarão, e arroz à grega.', preco: 59.9 },
      { cod: '327', nome: 'Tilápia ao Pescador', desc: '180 g grelhada, molho de alcaparras e risoto de camarão.', preco: 64.9 },
      { cod: '102', nome: 'Salmão com Laranja e Gengibre', desc: '190 g grelhado, com risoto de queijo.', preco: 60.9 },
      { cod: '106', nome: 'Salmão Basílico', desc: 'Com espinafre e cebolas no azeite, tomates frescos, alcaparras e risoto de queijo.', preco: 68.9 },
      { cod: '347', nome: 'Salmão com Risoto de Camarão', desc: '180 g de salmão e risoto de camarão com manteiga de ervas.', preco: 79.9 },
      { cod: '328', nome: 'Sirigado à Belle Meunier', desc: '180 g grelhado ao meunier — manteiga, champignon, alcaparras e camarão —, arroz de brócolis e batata sauté.', preco: 68.9 },
      { cod: '116', nome: 'Camarão à Parmegiana', desc: '150 g gratinados com queijo e molho de tomates frescos, arroz à grega.', preco: 72.9 },
      { cod: '326', nome: 'Camarão com Shimeji', desc: '150 g flambados, spaguetti na manteiga com espinafre e shimeji.', preco: 74.9 },
      { cod: '348', nome: 'Polvo à Espanhola', desc: '180 g com batatas, páprica picante, vinho branco, açafrão, pimentão e azeitonas pretas.', preco: 65.9 },
    ],
  },
  {
    id: 'carnes',
    nome: 'Aves e carnes',
    grupo: 'cozinha',
    itens: [
      { cod: '565', nome: 'Ravióli à la Matriciana', desc: 'Filé mignon com raviólis artesanais de ricota e tomate seco, molho de tomate com bacon e manjericão.', preco: 68.9, novo: true },
      { cod: '275', nome: 'Carré Maravilha', desc: 'Ao molho agridoce de mostarda e hortelã, risoto de provolone e purê de mandioquinha.', preco: 67.9, novo: true },
      { cod: '3742', nome: 'Carré Caipira', desc: 'Na manteiga de garrafa e alho, farofa com ovo caipira, bacon, linguiça de cabrito e coentro, e arroz de castanha.', preco: 65.9, novo: true },
      { cod: '466', nome: 'Picanha ao Creme de Queijo', desc: 'Com baião mole e macaxeira na manteiga da terra com açafrão.', preco: 68.9, novo: true },
      { cod: '123', nome: 'Filé Rústico', desc: 'Filé mignon na cestinha crocante ao molho de cogumelos, risoto de alho-poró.', preco: 69.9, novo: true },
      { cod: '3752', nome: 'Filé Suíço', desc: 'Ao molho funghi, risoto de abóbora e purê de dois queijos.', preco: 62.9 },
      { cod: '3753', nome: 'Filé ao Funghi', desc: 'Com risoto de funghi.', preco: 64.9 },
      { cod: '1192', nome: 'Filé Europeu', desc: 'Na manteiga Café de Paris, nhoque de mandioquinha, molho quatro queijos e azeite trufado.', preco: 69.9 },
      { cod: '1185', nome: 'Tournedor Blue Cheese', desc: 'Filé mignon com fettuccine ao molho de gorgonzola.', preco: 63.9 },
      { cod: '118', nome: 'Filé Vila da Telha', desc: '180 g recheado com cream cheese, molho zingara, risoto de tomate seco e rúcula.', preco: 67.9 },
      { cod: '119', nome: 'Filé Barolo', desc: '180 g, molho de vinho e balsâmico, risoto piemontese e batata rústica.', preco: 65.9 },
      { cod: '126', nome: 'Filé à Parmegiana', desc: '180 g empanado, queijo e molho de tomate, fettuccine a quatro queijos.', preco: 60.9 },
      { cod: '3767', nome: 'Filé ao Molho Madeira', desc: '180 g, arroz à grega e batata frita.', preco: 69.9 },
      { cod: '283', nome: 'Filé tipo à Carbonara', desc: '180 g ao molho madeira, spaguetti no molho branco, ovos e bacon.', preco: 60.9 },
      { cod: '322', nome: 'Filé da Roça', desc: '180 g intercalado com queijo coalho, risoto de tomate seco e espinafre, batata rosti e mel de engenho.', preco: 66.9 },
      { cod: '323', nome: 'Filé 3 Cozinhas', desc: '180 g ao molho de mostarda, gorgonzola e castanha de caju, risoto de açafrão e tomate recheado.', preco: 69.9 },
      { cod: '356', nome: 'Filé Osvaldo Aranha', desc: '180 g com crosta de alho, batatas laminadas fritas e farofa de ovos e bacon.', preco: 64.9 },
      { cod: '352', nome: 'Filé Coroado', desc: '180 g ao molho madeira, batata gratinada e risoto de queijo.', preco: 69.9 },
      { cod: '114', nome: 'Frango Tropical', desc: '170 g de peito grelhado, risoto de palmito, banana e legumes no azeite.', preco: 48.9 },
      { cod: '115', nome: 'Frango Piemontese', desc: '170 g grelhado com queijo e bacon, legumes e risoto piemontese.', preco: 48.9 },
      { cod: '117', nome: 'Filé de Frango à Parmegiana', desc: '150 g empanado, queijo, molho de tomate e fettuccine quatro queijos.', preco: 47.9 },
    ],
  },
  {
    id: 'dois',
    nome: 'Para 2 pessoas',
    grupo: 'cozinha',
    itens: [
      { cod: '1193', nome: 'Moqueca de Camarão', desc: 'À baiana, com arroz branco e farofa especial.', preco: 122.9 },
      { cod: '1026', nome: 'Filé à Parmegiana', desc: '350 g, fettuccine a quatro queijos.', preco: 115.9 },
      { cod: '1027', nome: 'Filé de Frango à Parmegiana', desc: '300 g, fettuccine quatro queijos.', preco: 90.9 },
      { cod: '1028', nome: 'Camarão à Parmegiana', desc: '300 g gratinados, arroz à grega.', preco: 140.9 },
      { cod: '1075', nome: 'Filé tipo à Carbonara', desc: '350 g, spaguetti no molho branco, ovos e bacon.', preco: 120.9 },
      { cod: '1076', nome: 'Filé ao Molho Madeira', desc: '350 g, arroz à grega e batata frita.', preco: 120.9 },
      { cod: '1077', nome: 'Salmão Siciliano', desc: '350 g, arroz de brócolis e legumes.', preco: 130.9 },
      { cod: '1078', nome: 'Tilápia à Milanesa', desc: '340 g, molho de camarão e arroz à grega.', preco: 100.9 },
    ],
  },
  {
    id: 'quatro',
    nome: 'Para 4 pessoas',
    grupo: 'cozinha',
    itens: [
      { cod: '127', nome: 'Filé à Parmegiana', desc: '600 g, fettuccine quatro queijos.', preco: 229.9 },
      { cod: '129', nome: 'Filé Molho Madeira', desc: '600 g, arroz à grega e batata frita.', preco: 229.9 },
      { cod: '130', nome: 'Filé de Frango à Parmegiana', desc: '600 g, fettuccine quatro queijos.', preco: 169.9 },
      { cod: '131', nome: 'Filé de Tilápia com Risoto de Camarão', desc: '500 g, molho de alcaparras.', preco: 209.9 },
      { cod: '132', nome: 'Filé tipo à Carbonara', desc: '600 g, spaguetti no molho branco, ovos e bacon.', preco: 229.9 },
      { cod: '134', nome: 'Risoto de Camarão', desc: '500 g de camarões no vinho, queijo fresco, rúcula e manga.', preco: 240.9 },
      { cod: '136', nome: 'Spaguetti com Camarão', desc: '500 g de camarões no azeite, azeitonas, champignon e bacon.', preco: 250.9 },
      { cod: '329', nome: 'Salmão Siciliano', desc: '600 g, arroz de brócolis e legumes.', preco: 260.9 },
    ],
  },
  {
    id: 'sabado',
    nome: 'Sábado',
    nota: 'para 2 pessoas',
    grupo: 'cozinha',
    itens: [{ cod: '157', nome: 'Feijoada', preco: 54.9 }],
  },
  {
    id: 'infantil',
    nome: 'Infantil',
    grupo: 'cozinha',
    itens: [
      { cod: '158', nome: 'Filé de Carne com Batata Frita', desc: 'Filé mignon, arroz branco e batata frita.', preco: 35.9 },
      { cod: '159', nome: 'Filé de Frango Grelhado', desc: 'Arroz branco e purê de batatas.', preco: 29.9 },
      { cod: '160', nome: 'Spaguetti Marguerita', desc: 'Molho de tomate, queijo fresco, manjericão e parmesão.', preco: 28.9 },
      { cod: '295', nome: 'Toscana Kids', desc: 'Linguiça toscana em rodelas, arroz branco e batata frita.', preco: 28.9 },
    ],
  },
  {
    id: 'sobremesas',
    nome: 'Sobremesas',
    grupo: 'cozinha',
    itens: [
      { cod: '146', nome: 'Rabanada de Brioche', desc: 'Brioche empanado e frito, sorvete de doce de leite e chantilly de canela.', preco: 25.9, novo: true },
      { cod: '3758', nome: 'Mini Churros com Doce de Leite', preco: 22.9 },
      { cod: '1194', nome: 'Brownie Amargo com Sorvete de Doce de Leite', preco: 29.9 },
      { cod: '1195', nome: 'Chocolamour', desc: 'Sugestão para 2 pessoas.', preco: 29.9 },
      { cod: '140', nome: 'Tartelete de Chocolate com Nutella', preco: 27.9 },
      { cod: '141', nome: 'Petit Gateau de Chocolate', preco: 25.9 },
      { cod: '142', nome: 'Cocada com Sorvete', desc: 'Sugestão para 2 pessoas.', preco: 29.9 },
      { cod: '143', nome: 'Torta de Limão', preco: 25.9 },
      { cod: '145', nome: 'Romeu e Julieta do Vila', preco: 29.9 },
      { cod: '357', nome: 'Pudim de Leite com Calda de Caramelo e Ameixa', preco: 19.9 },
    ],
  },
  {
    id: 'sucos',
    nome: 'Sucos',
    nota: 'copo ou jarra',
    grupo: 'bar',
    itens: [
      { cod: '219/220', nome: 'Cajá', preco: [{ rotulo: 'copo', valor: 8.9 }, { rotulo: 'jarra', valor: 22.9 }] },
      { cod: '221/222', nome: 'Limão', preco: [{ rotulo: 'copo', valor: 7.9 }, { rotulo: 'jarra', valor: 21.9 }] },
      { cod: '223/224', nome: 'Laranja', preco: [{ rotulo: 'copo', valor: 8.9 }, { rotulo: 'jarra', valor: 22.9 }] },
      { cod: '225/226', nome: 'Abacaxi com Hortelã', preco: [{ rotulo: 'copo', valor: 8.9 }, { rotulo: 'jarra', valor: 22.9 }] },
      { cod: '227/228', nome: 'Goiaba', preco: [{ rotulo: 'copo', valor: 7.9 }, { rotulo: 'jarra', valor: 18.9 }] },
      { cod: '229/230', nome: 'Acerola', preco: [{ rotulo: 'copo', valor: 7.9 }, { rotulo: 'jarra', valor: 18.9 }] },
      { cod: '231/232', nome: 'Limonada Suíça', preco: [{ rotulo: 'copo', valor: 9.9 }, { rotulo: 'jarra', valor: 24.9 }] },
      { cod: '233/234', nome: 'Maracujá', preco: [{ rotulo: 'copo', valor: 9.9 }, { rotulo: 'jarra', valor: 24.9 }] },
    ],
  },
  {
    id: 'cervejas',
    nome: 'Cervejas',
    grupo: 'bar',
    itens: [
      { cod: '180', nome: 'Skol Pilsen', medida: '600 ml', preco: 12.9 },
      { cod: '182', nome: 'Bohemia Puro Malte', medida: '600 ml', preco: 12.9 },
      { cod: '3612', nome: 'Brahma Chopp', medida: '600 ml', preco: 14.9 },
      { cod: '288', nome: 'Petra', medida: '600 ml', preco: 11.9 },
      { cod: '1196', nome: 'Budweiser', medida: '600 ml', preco: 15.9 },
      { cod: '178', nome: 'Original', medida: '600 ml', preco: 16.9 },
      { cod: '1197', nome: 'Spaten', medida: '600 ml', preco: 16.9 },
      { cod: '290', nome: 'Stella Artois', medida: '600 ml', preco: 18.9 },
      { cod: '183', nome: 'Heineken', medida: '600 ml', preco: 19.9 },
      { cod: '1213', nome: 'Stella Artois Pure Gold', medida: '600 ml', preco: 20.9 },
      { cod: '169', nome: 'Budweiser Zero', medida: 'long neck', preco: 10.9 },
      { cod: '170', nome: 'Cerveja Zero Álcool', medida: 'long neck', preco: 11.9 },
      { cod: '171', nome: 'Stella Artois', medida: 'long neck', preco: 11.9 },
      { cod: '174', nome: 'Budweiser', medida: 'long neck', preco: 11.9 },
      // Mesmo código da Brahma Chopp no cardápio impresso — está assim lá.
      { cod: '3612', nome: 'Spaten', medida: 'long neck', preco: 12.9 },
      { cod: '175', nome: 'Corona', medida: 'long neck', preco: 14.9 },
      { cod: '176', nome: 'Heineken', medida: 'long neck', preco: 14.9 },
      { cod: '564', nome: 'Stella Artois Pure Gold', medida: 'long neck', preco: 15.9 },
    ],
  },
  {
    id: 'doses',
    nome: 'Doses e licores',
    grupo: 'bar',
    itens: [
      { cod: '189', nome: 'Gim Tônica', preco: 27.9 },
      { cod: '192', nome: 'Gin', medida: 'dose', preco: 24.9 },
      { cod: '184', nome: 'Vodka Smirnoff', medida: 'dose', preco: 11.9 },
      { cod: '185', nome: 'Vodka Absolut', medida: 'dose', preco: 18.9 },
      { cod: '186', nome: 'Vodka Ciroc', medida: 'dose', preco: 27.9 },
      { cod: '187', nome: 'Vodka Grey Goose', medida: 'dose', preco: 27.9 },
      { cod: '188', nome: 'Vodka Orloff', medida: 'dose', preco: 8.9 },
      { cod: '190', nome: 'Tequila Prata', medida: 'dose', preco: 18.9 },
      { cod: '191', nome: 'Tequila Ouro', medida: 'dose', preco: 18.9 },
      { cod: '193', nome: 'Rum Montilla Cristal', medida: 'dose', preco: 9.9 },
      { cod: '195', nome: 'Rum Bacardi', medida: 'dose', preco: 12.9 },
      { cod: '196', nome: 'Campari', medida: 'dose', preco: 11.9 },
      { cod: '197', nome: 'Martini', medida: 'dose', preco: 10.9 },
      { cod: '200', nome: 'Ypióca 150', medida: 'dose', preco: 11.9 },
      { cod: '148', nome: 'Cointreau', preco: 29.9 },
      { cod: '149', nome: 'Licor 43', preco: 30.9 },
      { cod: '150', nome: 'Peachtree', preco: 30.9 },
      { cod: '151', nome: 'Frangélico', preco: 30.9 },
      { cod: '152', nome: 'Amarula', preco: 29.9 },
    ],
  },
  {
    id: 'sem-alcool',
    nome: 'Sem álcool',
    grupo: 'bar',
    itens: [
      { cod: '161', nome: 'Água Mineral sem Gás', preco: 5.9 },
      { cod: '162', nome: 'Água Mineral com Gás', preco: 6.9 },
      { cod: '163', nome: 'H2O Lemon Fresh', preco: 8.9 },
      { cod: '289', nome: 'H2O Limoneto', preco: 8.9 },
      { cod: '164', nome: 'Refrigerante KS', preco: 6.9 },
      { cod: '165', nome: 'Refrigerante Lata', preco: 7.5 },
      { cod: '181', nome: 'Schweppes / Schweppes Citrus', preco: 9.9 },
      { cod: '166', nome: 'Energético', preco: 19.9 },
      { cod: '167/168', nome: 'Água de Coco', preco: [{ rotulo: 'copo', valor: 8.5 }, { rotulo: 'jarra', valor: 23.9 }] },
    ],
  },
];

export const rodapeCardapio =
  'Taxa de serviço de 10% no salão. Aceitamos Visa, Mastercard, Elo, Diners e American Express.';

export const avaliacoes = {
  notas: [
    { valor: '4,5', rotulo: 'no Google', detalhe: '863 avaliações' },
    { valor: '96%', rotulo: 'recomendam', detalhe: '509 avaliações no Facebook' },
  ],
  // Os destaques que o próprio Google tira das avaliações.
  trechos: [
    { texto: 'É difícil ver um restaurante desse padrão em cidades do interior do Brasil!', fonte: 'Avaliação no Google' },
    { texto: 'Boa comida, ambiente aconchegante, bons preços e tem área climatizada.', fonte: 'Avaliação no Google' },
    { texto: 'Muitas opções de pratos e comida para todos os gostos.', fonte: 'Avaliação no Google' },
  ],
};

const F = (arquivo: string) => `/proposta/vila-da-telha/${arquivo}`;

/**
 * As fotos da casa, todas do Instagram @viladatelha — o nome de cada
 * prato vem da legenda do post, não de palpite.
 *
 * Ligadas ao cardápio pelo código, para a miniatura aparecer ao lado
 * do prato. O Filé tipo à Carbonara da foto é o para duas pessoas: é o
 * que a legenda diz.
 */
const FOTO_DO_PRATO: Record<string, string> = {
  '1170': F('burrata.jpg'),
  '1186': F('risoto-file.jpg'),
  '1075': F('file-carbonara.jpg'),
  '009': F('camarao-alho-oleo.jpg'),
  '352': F('file-coroado.jpg'),
  '276': F('croissant-camarao.jpg'),
  '3734': F('varal-frios.jpg'),
  '140': F('tartelete.jpg'),
};
for (const secao of cardapio) {
  for (const item of secao.itens) {
    if (item.cod && FOTO_DO_PRATO[item.cod]) item.foto = FOTO_DO_PRATO[item.cod];
  }
}

/** O salão depois do retrofit, a mesa posta e a fachada à noite. */
export const espaco = [
  { src: F('salao-mural.jpg'), alt: 'Salão do Vila da Telha com mural colorido na parede', titulo: 'O salão, depois do retrofit' },
  { src: F('fachada.jpg'), alt: 'Fachada do Vila da Telha à noite, com arcos e lanternas', titulo: 'A fachada, na Rua Bandeira' },
  { src: F('mesa-posta.jpg'), alt: 'Mesa posta com toalha vermelha e taças', titulo: 'Mesa posta' },
  { src: F('salao-pb.jpg'), alt: 'Salão do Vila em preto e branco, com mesas e prateleiras', titulo: 'O salão' },
];

/** Da cozinha — o preço é o do cardápio de 2026. */
export const cozinha = [
  { src: F('burrata.jpg'), alt: 'Burrata com tomatinhos, presunto de Parma e pesto', titulo: 'Burrata do Vila', detalhe: 'Para compartilhar', preco: 74.9 },
  { src: F('risoto-file.jpg'), alt: 'Risoto de filé mignon', titulo: 'Risoto de Filé Mignon', detalhe: 'Risotos', preco: 64.9 },
  { src: F('camarao-alho-oleo.jpg'), alt: 'Camarões no alho e óleo', titulo: 'Camarão Alho e Óleo', detalhe: 'Para compartilhar', preco: 49.9 },
  { src: F('file-carbonara.jpg'), alt: 'Filé com spaguetti ao molho branco', titulo: 'Filé tipo à Carbonara', detalhe: 'Para 2 pessoas', preco: 120.9 },
  { src: F('varal-frios.jpg'), alt: 'Varal de frios com queijos e frutas', titulo: 'Varal de Frios e Queijos', detalhe: 'Serve 3 a 4 pessoas', preco: 89.9 },
  { src: F('file-coroado.jpg'), alt: 'Filé mignon com risoto e batata gratinada', titulo: 'Filé Coroado', detalhe: 'Aves e carnes', preco: 69.9 },
  { src: F('croissant-camarao.jpg'), alt: 'Croissants de camarão com taça de vinho branco', titulo: 'Croissant de Camarão', detalhe: 'Para compartilhar', preco: 56.9 },
  { src: F('carnes.jpg'), alt: 'Carne fatiada na chapa com acompanhamentos', titulo: 'Carnes na chapa', detalhe: 'Grelhados e cortes' },
  { src: F('tartelete.jpg'), alt: 'Tartelete de chocolate com Nutella', titulo: 'Tartelete com Nutella', detalhe: 'Sobremesas', preco: 27.9 },
];

export const rodape = {
  nome: 'Vila da Telha Gastrobar',
  logo: { src: F('logo-claro.png'), largura: 945, altura: 381 },
  lema: 'Momentos & Cultura & Sabores',
  razao: 'Vila da Telha Alimentos Ltda',
  cnpj: '22.307.661/0001-05',
  endereco: ['Rua Bandeira, 78 — Centro', 'Iguatu — CE'],
  horario: ['Almoço, 11h às 15h', 'Jantar, 18h à 0h'],
  contatos: [
    { icone: 'telefone' as const, rotulo: '(88) 3581-0163', href: 'tel:+558835810163' },
    { icone: 'whatsapp' as const, rotulo: 'Reservas e delivery', href: `https://wa.me/${casa.whatsapp}` },
    { icone: 'instagram' as const, rotulo: '@viladatelha', href: casa.instagram },
    { icone: 'facebook' as const, rotulo: 'Vila da Telha Gastrobar', href: casa.facebook },
  ],
  pagamento: ['Visa', 'Mastercard', 'Elo', 'Diners', 'American Express'],
  observacoes: ['Taxa de serviço de 10% no salão.', 'Não nos responsabilizamos por objetos deixados nas mesas e dependências.'],
};
