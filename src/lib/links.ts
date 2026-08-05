import { perfil } from "@/content/perfil";

/** wa.me com a mensagem já preenchida. */
export function linkWhatsapp(mensagem: string = perfil.whatsappMensagem) {
  return `https://wa.me/${perfil.contato.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/** mailto com assunto — evita e-mail em branco chegando sem contexto. */
export function linkEmail(assunto = "Contato pelo portfólio") {
  return `mailto:${perfil.contato.email}?subject=${encodeURIComponent(assunto)}`;
}
