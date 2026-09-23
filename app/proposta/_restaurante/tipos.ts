/**
 * O formato comum dos restaurantes das propostas.
 *
 * Nori e Vila da Telha são do mesmo dono e pedem as mesmas coisas —
 * cardápio, reserva, avaliação, como chegar. Em vez de duas páginas
 * copiadas que divergem na primeira correção, as peças moram em
 * `_restaurante/` e cada casa entra só com os seus dados e as suas
 * cores. A pasta começa com `_` para o roteador do Next ignorá-la.
 */

/**
 * Um preço só, ou vários com rótulo — pizza de 4 e 8 fatias, suco no
 * copo e na jarra. Cada opção pode ter código próprio: no Nori, a
 * mussarela de 4 fatias é 166 e a de 8 é 466.
 */
export type Preco = number | { rotulo: string; valor: number; cod?: string }[];

export type Item = {
  /** Código do cardápio impresso. É o que o cliente fala no WhatsApp ao pedir. */
  cod?: string;
  nome: string;
  /** "600 ml", "long neck", "100 g" — o que distingue dois itens de mesmo nome. Vai junto no pedido. */
  medida?: string;
  desc?: string;
  preco: Preco;
  novo?: boolean;
  /** Foto do prato, quando a casa tem uma. Aparece em miniatura no cardápio. */
  foto?: string;
};

export type Secao = {
  id: string;
  nome: string;
  /** Linha curta abaixo do título: "sugestão para 2 pessoas", "mínimo de 200 g". */
  nota?: string;
  grupo: 'cozinha' | 'bar';
  itens: Item[];
};

/**
 * Turnos do dia em "HH:MM". Fechamento depois da meia-noite vai além
 * de 24 — "25:00" é 1h da manhã do dia seguinte — para a conta de
 * "aberto agora" não precisar de caso especial.
 */
export type Turno = [abre: string, fecha: string];

/** Índice 0 é domingo, como `Date.getDay()`. Dia sem turno é dia fechado. */
export type Semana = [Turno[], Turno[], Turno[], Turno[], Turno[], Turno[], Turno[]];

export type Tema = {
  marca: string;
  marcaEscura: string;
  sobreMarca: string;
  destaque: string;
  fundo: string;
  papel: string;
  areia: string;
  borda: string;
  tinta: string;
  tintaMedia: string;
  tintaFraca: string;
};

/** As cores viram variáveis CSS na raiz da página; as peças só leem as variáveis. */
export function variaveis(t: Tema): React.CSSProperties {
  return {
    '--marca': t.marca,
    '--marca-escura': t.marcaEscura,
    '--sobre-marca': t.sobreMarca,
    '--destaque': t.destaque,
    '--fundo': t.fundo,
    '--papel': t.papel,
    '--areia': t.areia,
    '--borda': t.borda,
    '--tinta': t.tinta,
    '--tinta-media': t.tintaMedia,
    '--tinta-fraca': t.tintaFraca,
  } as React.CSSProperties;
}

export const real = (v: number) =>
  `R$ ${v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const whatsapp = (numero: string, texto: string) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
