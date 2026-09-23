'use client';

import { useState } from 'react';
import { DIAS, agoraEmIguatu, horariosDeReserva, useHoje } from './horario';
import { I } from './Icones';
import { whatsapp, type Semana } from './tipos';

export type Pedido = { data: string; dia: number; hora: string; pessoas: number; ocasiao: string };

/**
 * A reserva vira uma mensagem completa no WhatsApp da casa.
 *
 * Hoje reservar é abrir o WhatsApp e começar do zero: "boa noite, tem
 * mesa?", "pra quando?", "quantas pessoas?", "que horas?". Quatro idas
 * e voltas até a casa saber o que precisa — e, no sábado à noite, quem
 * responde é a mesma pessoa que está atendendo o salão.
 *
 * Aqui a primeira mensagem já chega com data, hora, pessoas e ocasião.
 * O horário oferecido sai do funcionamento do dia escolhido, então
 * ninguém pede mesa para a hora em que a casa está fechada.
 */
export default function Reserva({
  casa,
  numeroWhatsApp,
  semana,
  ocasioes = ['Só vou comer bem', 'Aniversário', 'A dois', 'Família', 'Trabalho'],
  criancas,
  dica,
}: {
  casa: string;
  numeroWhatsApp: string;
  semana: Semana;
  ocasioes?: string[];
  /** Rótulo da pergunta sobre crianças — o Nori pergunta por causa do park. */
  criancas?: string;
  /** Aviso que muda conforme a escolha: feijoada no sábado, aniversariante no rodízio. */
  dica?: (p: Pedido) => string | null;
}) {
  const hoje = useHoje();
  // Sem escolha, a reserva é para hoje.
  const [escolhida, setData] = useState('');
  const data = escolhida || hoje;
  const [hora, setHora] = useState('');
  const [pessoas, setPessoas] = useState(2);
  const [nCriancas, setNCriancas] = useState(0);
  const [ocasiao, setOcasiao] = useState(ocasioes[0]);
  const [nome, setNome] = useState('');
  const [obs, setObs] = useState('');

  const dia = data ? new Date(`${data}T12:00:00`).getDay() : -1;
  // Para hoje, só o que ainda está por vir: pedir mesa para as 12h às
  // 16h é mensagem que a casa responde com "já passou".
  const agora = data && data === hoje ? agoraEmIguatu().minuto : -1;
  const horarios = (dia >= 0 ? horariosDeReserva(semana[dia]) : []).filter((h) => {
    const [hh, mm] = h.split(':').map(Number);
    return hh * 60 + mm > agora;
  });
  const horaValida = horarios.includes(hora) ? hora : (horarios.find((h) => h >= '19:00') ?? horarios[0] ?? '');

  // Diminuir o total de pessoas não pode deixar mais crianças que gente na mesa.
  const nCriancasValido = Math.min(nCriancas, pessoas);
  const pedido: Pedido = { data, dia, hora: horaValida, pessoas, ocasiao };
  const aviso = dia >= 0 && dica ? dica(pedido) : null;

  const [, mes, dd] = data.split('-');
  const quando = dia >= 0 ? `${DIAS[dia].toLowerCase()}, ${dd}/${mes}` : '';

  const texto = [
    `Olá! Gostaria de reservar uma mesa no ${casa}.`,
    '',
    `Dia: ${quando}`,
    `Horário: ${horaValida.replace(':', 'h')}`,
    `Pessoas: ${pessoas}${criancas && nCriancasValido ? ` (${nCriancasValido} ${nCriancasValido === 1 ? 'criança' : 'crianças'} para o park)` : ''}`,
    ocasiao !== ocasioes[0] ? `Ocasião: ${ocasiao}` : false,
    nome.trim() ? `Nome: ${nome.trim()}` : false,
    obs.trim() ? `Obs.: ${obs.trim()}` : false,
  ]
    .filter((l): l is string => l !== false)
    .join('\n');

  const rotulo = 'flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[var(--tinta-fraca)]';
  const campo =
    'mt-1.5 w-full border border-[var(--borda)] bg-[var(--fundo)] px-3 py-2.5 outline-none transition-colors focus:border-[var(--marca)]';

  return (
    <div className="grid gap-6 border border-[var(--borda)] bg-[var(--papel)] p-5 sm:p-7 lg:grid-cols-[1fr_auto]">
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={rotulo}>
              <I.calendario className="size-3.5" /> Dia
            </span>
            <input type="date" value={data} min={hoje} onChange={(e) => setData(e.target.value)} className={campo} />
          </label>

          <label className="block">
            <span className={rotulo}>
              <I.relogio className="size-3.5" /> Horário
            </span>
            <select
              value={horaValida}
              onChange={(e) => setHora(e.target.value)}
              disabled={!horarios.length}
              className={`${campo} disabled:opacity-60`}
            >
              {horarios.length ? (
                horarios.map((h) => (
                  <option key={h} value={h}>
                    {h.replace(':', 'h')}
                  </option>
                ))
              ) : (
                <option>{agora >= 0 ? 'Sem horário hoje' : 'Fechado neste dia'}</option>
              )}
            </select>
          </label>
        </div>

        <div className="flex flex-wrap gap-6">
          <Contador rotulo="Pessoas" icone={<I.pessoas className="size-3.5" />} valor={pessoas} muda={setPessoas} min={1} max={40} />
          {criancas && (
            <Contador
              rotulo={criancas}
              icone={<I.balao className="size-3.5" />}
              valor={nCriancasValido}
              muda={setNCriancas}
              min={0}
              max={pessoas}
            />
          )}
        </div>

        <div>
          <span className={rotulo}>
            <I.presente className="size-3.5" /> Ocasião
          </span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {ocasioes.map((o) => (
              <button
                key={o}
                type="button"
                onClick={() => setOcasiao(o)}
                className={`border px-3.5 py-1.5 text-sm transition-colors ${
                  ocasiao === o
                    ? 'border-[var(--marca)] bg-[var(--marca)] text-[var(--sobre-marca)]'
                    : 'border-[var(--borda)] text-[var(--tinta-media)] hover:border-[var(--tinta-fraca)]'
                }`}
              >
                {o}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={rotulo}>Seu nome</span>
            <input value={nome} onChange={(e) => setNome(e.target.value)} className={campo} />
          </label>
          <label className="block">
            <span className={rotulo}>Algum pedido?</span>
            <input
              value={obs}
              onChange={(e) => setObs(e.target.value)}
              placeholder="cadeirão, mesa perto da janela…"
              className={`${campo} placeholder:text-[var(--tinta-fraca)]`}
            />
          </label>
        </div>

        {aviso && (
          <p
            key={aviso}
            className="rest-troca flex gap-2.5 border-l-2 border-[var(--destaque)] bg-[var(--destaque)]/12 px-4 py-3 text-sm leading-relaxed text-[var(--tinta)]"
          >
            <I.brilho className="mt-0.5 size-4 shrink-0 text-[var(--marca)]" />
            {aviso}
          </p>
        )}
      </div>

      {/* O resumo é a própria mensagem: quem reserva vê exatamente o
          que a casa vai receber, antes de mandar. */}
      <div className="flex flex-col lg:w-72">
        <p className={rotulo}>
          <I.whatsapp className="size-3.5" /> O que a casa recebe
        </p>
        <pre className="mt-2 flex-1 whitespace-pre-wrap bg-[#E7F7DC] p-4 font-[family-name:var(--font-texto)] text-sm leading-relaxed text-[#1c2a17]">
          {texto}
        </pre>
        <a
          href={horarios.length ? whatsapp(numeroWhatsApp, texto) : undefined}
          aria-disabled={!horarios.length}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-3 flex items-center justify-center gap-2 py-3.5 font-semibold text-white transition-opacity ${
            horarios.length ? 'bg-[#1FA855] hover:opacity-90' : 'pointer-events-none bg-zinc-400'
          }`}
        >
          <I.whatsapp className="size-5" />
          Pedir reserva no WhatsApp
        </a>
      </div>
    </div>
  );
}

function Contador({
  rotulo,
  icone,
  valor,
  muda,
  min,
  max,
}: {
  rotulo: string;
  icone: React.ReactNode;
  valor: number;
  muda: (n: number) => void;
  min: number;
  max: number;
}) {
  return (
    <div>
      <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[var(--tinta-fraca)]">
        {icone} {rotulo}
      </span>
      <div className="mt-1.5 flex items-center border border-[var(--borda)] bg-[var(--fundo)]">
        <button
          type="button"
          onClick={() => muda(Math.max(min, valor - 1))}
          aria-label={`Menos — ${rotulo}`}
          className="grid size-11 place-items-center transition-colors hover:text-[var(--marca)]"
        >
          <I.menos className="size-4" />
        </button>
        <span key={valor} className="rest-pulo w-10 text-center text-lg font-semibold tabular-nums">
          {valor}
        </span>
        <button
          type="button"
          onClick={() => muda(Math.min(max, valor + 1))}
          aria-label={`Mais — ${rotulo}`}
          className="grid size-11 place-items-center transition-colors hover:text-[var(--marca)]"
        >
          <I.mais className="size-4" />
        </button>
      </div>
    </div>
  );
}
