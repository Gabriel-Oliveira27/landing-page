import Cabecalho from '@/componentes/Cabecalho';
import Rodape from '@/componentes/Rodape';
import Assistente from '@/componentes/Assistente';

/**
 * O casco do site.
 *
 * Fica num grupo de rota para as demos NÃO herdarem: elas fingem ser
 * o site de outra empresa, e um cabeçalho meu em cima estragaria a
 * ilusão inteira — a pessoa precisa ver como ficaria o site dela, não
 * o meu site mostrando o dela.
 */
export default function LayoutSite({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Cabecalho />
      <main>{children}</main>
      <Rodape />
      <Assistente />
    </>
  );
}
