import { useSyncExternalStore } from 'react';
import type { Semana, Turno } from './tipos';

export const DIAS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const minutos = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

/** "18:00" → "18h", "19:30" → "19h30", "24:00" → "0h", "25:00" → "1h". */
export const hora = (hhmm: string) => {
  const t = minutos(hhmm) % 1440;
  const h = Math.floor(t / 60);
  const m = t % 60;
  return m ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`;
};

export const turnoTexto = ([a, f]: Turno) => `${hora(a)} às ${hora(f)}`;

/**
 * Dia da semana e minuto do dia em Iguatu, não no fuso de quem abre.
 *
 * Quem olha a página de São Paulo no horário de verão, ou de Lisboa,
 * precisa ver "aberto" quando o restaurante está aberto lá — não no
 * relógio do próprio celular. Fortaleza não tem horário de verão, mas
 * o fuso vem do Intl mesmo assim, e não de um -3 escrito à mão.
 */
export function agoraEmIguatu(d = new Date()) {
  const partes = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Fortaleza',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(d);
  const pega = (t: string) => partes.find((p) => p.type === t)?.value ?? '';
  const dia = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(pega('weekday'));
  return { dia, minuto: Number(pega('hour')) * 60 + Number(pega('minute')) };
}

/** Hoje em Iguatu, no formato do `<input type="date">`. */
export function hojeEmIguatu(d = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Fortaleza' }).format(d);
}

const semAviso = () => () => {};

/**
 * Hoje, para um componente. Vazio no servidor e na primeira pintura:
 * o servidor não sabe que dia é para quem está lendo, e calcular lá
 * daria outro dia perto da meia-noite e quebraria a hidratação.
 */
export function useHoje() {
  return useSyncExternalStore(semAviso, () => hojeEmIguatu(), () => '');
}

export type Estado = { aberto: boolean; texto: string };

/**
 * "Aberto agora · fecha às 15h" ou "Fechado · abre às 18h".
 *
 * O turno que passa da meia-noite pertence ao dia em que começou: a
 * 0h30 de sábado, quem está aberto é o turno de SEXTA que vai até 1h.
 * Por isso a conta olha o dia anterior também.
 */
export function estadoAgora(semana: Semana, d = new Date()): Estado {
  const { dia, minuto } = agoraEmIguatu(d);
  const ontem = (dia + 6) % 7;

  const candidatos: { inicio: number; fim: number; fecha: string }[] = [
    ...semana[dia].map(([a, f]) => ({ inicio: minutos(a), fim: minutos(f), fecha: f })),
    ...semana[ontem].map(([a, f]) => ({ inicio: minutos(a) - 1440, fim: minutos(f) - 1440, fecha: f })),
  ];

  const atual = candidatos.find((t) => minuto >= t.inicio && minuto < t.fim);
  if (atual) return { aberto: true, texto: `Aberto agora · fecha às ${hora(atual.fecha)}` };

  const maisTarde = semana[dia]
    .map(([a]) => a)
    .find((a) => minutos(a) > minuto);
  if (maisTarde) return { aberto: false, texto: `Fechado agora · abre às ${hora(maisTarde)}` };

  for (let i = 1; i <= 7; i++) {
    const outro = (dia + i) % 7;
    if (semana[outro].length) {
      const quando = i === 1 ? 'amanhã' : DIAS[outro].toLowerCase();
      return { aberto: false, texto: `Fechado agora · abre ${quando} às ${hora(semana[outro][0][0])}` };
    }
  }
  return { aberto: false, texto: 'Fechado' };
}

/**
 * Horários que dá para pedir numa reserva, de meia em meia hora.
 *
 * Para `antesDeFechar` minutos antes do fim do turno: reservar mesa às
 * 14h45 num almoço que termina às 15h não é reserva, é problema na
 * cozinha.
 */
export function horariosDeReserva(turnos: Turno[], antesDeFechar = 90) {
  const saida: string[] = [];
  for (const [a, f] of turnos) {
    for (let m = minutos(a); m <= minutos(f) - antesDeFechar; m += 30) {
      const t = m % 1440;
      saida.push(`${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`);
    }
  }
  return saida;
}
