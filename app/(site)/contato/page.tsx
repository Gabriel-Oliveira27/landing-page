import type { Metadata } from 'next';
import { perfil, linkWhatsApp } from '@/conteudo/perfil';

export const metadata: Metadata = {
  title: 'Contato',
  description: `Fale com ${perfil.nome} — ${perfil.contato.whatsappExibicao}, ${perfil.local}.`,
};

const CANAIS = [
  {
    rotulo: 'WhatsApp',
    valor: perfil.contato.whatsappExibicao,
    nota: 'O jeito mais rápido. Respondo fora do horário comercial também.',
    href: linkWhatsApp(),
    destaque: true,
  },
  {
    rotulo: 'E-mail',
    valor: perfil.contato.email,
    nota: 'Para quando tiver documento ou detalhe demais para uma mensagem.',
    href: `mailto:${perfil.contato.email}`,
  },
  {
    rotulo: 'GitHub',
    valor: 'Gabriel-Oliveira27',
    nota: 'O código dos projetos, para quem entende e quer conferir.',
    href: perfil.contato.github,
  },
  {
    rotulo: 'LinkedIn',
    valor: 'Gabriel Bezerra',
    nota: 'Perfil profissional.',
    href: perfil.contato.linkedin,
  },
];

export default function Contato() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-[family-name:var(--font-titulo)] text-4xl tracking-tight sm:text-5xl">
        Falar comigo
      </h1>
      <p className="mt-3 max-w-xl text-lg leading-relaxed text-tinta-media">
        Sou eu que respondo — não tem atendente, não tem formulário que cai numa caixa que
        ninguém abre. Me diga o que você vende e como vende hoje.
      </p>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {CANAIS.map((c) => (
          <li key={c.rotulo}>
            <a
              href={c.href}
              target={c.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`block h-full rounded-2xl border p-5 transition-colors ${
                c.destaque
                  ? 'border-acento/40 bg-acento-fraco hover:border-acento'
                  : 'border-borda bg-papel hover:border-borda-forte'
              }`}
            >
              <p className="text-xs font-medium uppercase tracking-wider text-tinta-fraca">
                {c.rotulo}
              </p>
              <p
                className={`mt-1 break-all font-semibold ${c.destaque ? 'text-acento' : ''}`}
              >
                {c.valor}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-tinta-media">{c.nota}</p>
            </a>
          </li>
        ))}
      </ul>

      <section className="mt-12 rounded-2xl border border-borda bg-areia/50 p-6">
        <h2 className="font-[family-name:var(--font-titulo)] text-2xl tracking-tight">
          Onde eu estou
        </h2>
        <p className="mt-2 leading-relaxed text-tinta-media">
          {perfil.local}. Atendo a região — Icó, Cedro, Várzea Alegre, Acopiara, Juazeiro,
          Crato e Barbalha, entre outras. Para conversa e entrega, à distância funciona;
          para conhecer o negócio de perto, eu vou até lá.
        </p>
      </section>
    </div>
  );
}
