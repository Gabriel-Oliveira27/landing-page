import { perfil } from "@/content/perfil";
import { projetos } from "@/content/projetos";

/**
 * JSON-LD schema.org — ajuda o Google a entender que a página é o perfil
 * profissional de uma pessoa, e não uma landing de produto qualquer.
 */
export function DadosEstruturados() {
  const dados = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: perfil.nome,
    jobTitle: perfil.titulo,
    email: `mailto:${perfil.contato.email}`,
    address: { "@type": "PostalAddress", addressCountry: "BR", addressRegion: perfil.local },
    sameAs: [perfil.contato.github, perfil.contato.linkedin].filter(Boolean),
    knowsAbout: [
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Desenvolvimento full-stack",
    ],
    subjectOf: projetos.map((p) => ({
      "@type": "SoftwareApplication",
      name: p.nome,
      description: p.tagline,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }}
    />
  );
}
