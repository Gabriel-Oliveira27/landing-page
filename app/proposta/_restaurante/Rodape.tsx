import Image from 'next/image';
import Link from 'next/link';
import { I } from './Icones';

export type DadosRodape = {
  nome: string;
  logo: { src: string; largura: number; altura: number };
  lema?: string;
  /** Razão social e CNPJ, como estão na Receita — o que um rodapé de empresa mostra. */
  razao: string;
  cnpj: string;
  endereco: string[];
  horario: string[];
  contatos: { icone: keyof typeof I; rotulo: string; href?: string }[];
  pagamento?: string[];
  observacoes?: string[];
};

/**
 * O rodapé institucional.
 *
 * É onde a pessoa procura as coisas chatas e necessárias — CNPJ para a
 * nota, forma de pagamento, telefone fixo — e onde um site de empresa
 * de verdade se diferencia de um cartão de visita. A assinatura do
 * autor fica na última linha, discreta, como em qualquer site feito
 * por encomenda.
 */
export default function Rodape({ d }: { d: DadosRodape }) {
  return (
    <footer className="bg-[var(--marca-escura)] text-[#EFE6D8]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src={d.logo.src} alt={d.nome} width={d.logo.largura} height={d.logo.altura} className="h-14 w-auto" />
          {d.lema && <p className="mt-4 text-sm text-white/60">{d.lema}</p>}
          <p className="mt-4 text-xs leading-relaxed text-white/45">
            {d.razao}
            <br />
            CNPJ {d.cnpj}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--destaque)]">Onde</p>
          <address className="mt-3 flex gap-2.5 text-sm not-italic leading-relaxed text-white/75">
            <I.local className="mt-0.5 size-4 shrink-0" />
            <span>
              {d.endereco.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </span>
          </address>
          <div className="mt-3 flex gap-2.5 text-sm leading-relaxed text-white/75">
            <I.relogio className="mt-0.5 size-4 shrink-0" />
            <span>
              {d.horario.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--destaque)]">Fale com a casa</p>
          <ul className="mt-3 space-y-2 text-sm">
            {d.contatos.map((c) => {
              const Icone = I[c.icone];
              const conteudo = (
                <>
                  <Icone className="size-4 shrink-0" />
                  {c.rotulo}
                </>
              );
              return (
                <li key={c.rotulo}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-white/75 transition-colors hover:text-white"
                    >
                      {conteudo}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2.5 text-white/75">{conteudo}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          {d.pagamento && (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--destaque)]">Pagamento</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {d.pagamento.map((p) => (
                  <li key={p} className="flex items-center gap-1.5 border border-white/15 px-2 py-1 text-xs text-white/75">
                    <I.cartao className="size-3.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </>
          )}
          {d.observacoes && (
            <ul className={`space-y-1.5 text-xs leading-relaxed text-white/50 ${d.pagamento ? 'mt-5' : ''}`}>
              {d.observacoes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-5 text-xs text-white/45">
          <p>
            © {new Date().getFullYear()} {d.nome}
          </p>
          <p>Proposta de site — não é o site oficial.</p>
          <Link href="/" className="ml-auto transition-colors hover:text-white">
            Site por <span className="font-semibold text-white/70">Gabriel Oliveira</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
