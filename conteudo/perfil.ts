/**
 * Quem fala nesta vitrine.
 *
 * Herdado do portfólio anterior, com um corte: saiu o que era
 * currículo (trajetória, formação, stack) e ficou o que um dono de
 * comércio precisa saber antes de mandar mensagem. Recrutador quer
 * saber onde você estudou; cliente quer saber se você entrega e como
 * falar com você.
 */

export const perfil = {
  nome: 'Gabriel Oliveira',
  titulo: 'Desenvolvedor · Iguatu, Ceará',

  // A promessa, em uma frase. Sem "soluções inovadoras" e sem
  // "transformação digital" — quem vende para comércio de interior
  // perde a pessoa na terceira palavra difícil.
  chamada: 'Site, loja on-line e sistema para o comércio daqui.',

  resumo:
    'Faço o sistema inteiro sozinho: o site que o seu cliente vê, o painel onde você administra ' +
    'e o aplicativo no celular. Tudo publicado e funcionando, sem template pronto. ' +
    'Sou de Iguatu, atendo a região, e você fala comigo direto — não com um atendente.',

  local: 'Iguatu — CE',

  contato: {
    email: 'gab.oliveirab27@gmail.com',
    whatsapp: '5588988568911',
    whatsappExibicao: '(88) 98856-8911',
    github: 'https://github.com/Gabriel-Oliveira27',
    linkedin: 'https://www.linkedin.com/in/gabriel-bezerra-6ba04223b',
  },

  whatsappMensagem: 'Olá, Gabriel! Vi seus projetos e queria conversar sobre o meu negócio.',
} as const;

/** Link do WhatsApp já com o texto preenchido. */
export function linkWhatsApp(mensagem: string = perfil.whatsappMensagem) {
  return `https://wa.me/${perfil.contato.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * Como o trabalho acontece, em quatro passos.
 *
 * Existe porque a dúvida que trava a maioria não é preço, é "como
 * isso funciona" — quem nunca contratou software não sabe o que vai
 * ter que fazer nem quanto vai demorar.
 */
export const passos = [
  {
    titulo: 'A gente conversa',
    texto:
      'Você me conta o que vende e como vende hoje. Se já usa WhatsApp e Instagram, isso conta — ' +
      'boa parte do trabalho é organizar o que já existe.',
  },
  {
    titulo: 'Eu mostro um modelo',
    texto:
      'Escolho entre os projetos que já estão prontos o que mais se parece com o seu caso, ' +
      'e você navega antes de decidir qualquer coisa.',
  },
  {
    titulo: 'Adapto para você',
    texto:
      'Seu nome, suas cores, seus produtos, seu jeito de entregar. O que já existe pronto ' +
      'encurta o caminho; o que for só seu eu construo.',
  },
  {
    titulo: 'Publico e te ensino',
    texto:
      'Entra no ar com endereço próprio e eu te mostro como mexer no painel. ' +
      'Depois disso você não depende de mim para trocar um preço.',
  },
];
