/**
 * Observação dirigida à CASA, não ao cliente dela.
 *
 * Mesmo recurso da proposta do Diocesano: some quando o site for para
 * valer. Existe porque os achados do levantamento são o argumento — o
 * PDF de 21 MB, o perfil do Google sem dono, o horário que cada canal
 * diz de um jeito — e escondê-los numa conversa separada seria jogar
 * fora a parte que convence.
 */
export default function ParaACasa({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <aside className="border border-dashed border-[#C9A227] bg-[#FDF8EC] p-5 text-[#4a3f33] sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A6D1B]">
        Para a casa · não aparece no site final
      </p>
      <p className="mt-1.5 font-semibold text-[#2d261f]">{titulo}</p>
      <div className="mt-2 space-y-2.5 text-[15px] leading-relaxed [&_b]:text-[#2d261f]">{children}</div>
    </aside>
  );
}
