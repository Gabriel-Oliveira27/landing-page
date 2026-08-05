import { Cabecalho } from "@/components/secoes/Cabecalho";
import { Hero } from "@/components/secoes/Hero";
import { Projetos } from "@/components/secoes/Projetos";
import { Processo } from "@/components/secoes/Processo";
import { Servicos } from "@/components/secoes/Servicos";
import { Sobre } from "@/components/secoes/Sobre";
import { Contato } from "@/components/secoes/Contato";
import { Rodape } from "@/components/secoes/Rodape";
import { DadosEstruturados } from "@/components/DadosEstruturados";

export default function Pagina() {
  return (
    <>
      <DadosEstruturados />
      <Cabecalho />
      <main>
        <Hero />
        <Projetos />
        <Processo />
        <Servicos />
        <Sobre />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}
