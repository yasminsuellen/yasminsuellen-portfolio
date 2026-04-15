export const pt = {
  nav: {
    about: "Sobre",
    stack: "Stack",
    projects: "Projetos",
    contact: "Contato",
  },
  hero: {
    greeting: "Oi, eu sou",
    name: "Yasmin Suellen",
    role: "Desenvolvedora Frontend & Backend",
    description:
      "Estudante de Sistemas de Informação com foco em desenvolvimento web. Construo aplicações que unem funcionalidade, organização e uma excelente experiência do usuário.",
    cta_github: "Ver GitHub",
    cta_linkedin: "LinkedIn",
    cta_contact: "Fale comigo",
  },
  about: {
    title: "Sobre mim",
    bio: "Sou desenvolvedora frontend e backend em início de carreira, com foco em desenvolvimento web. Meu objetivo é ir além da curva — construindo coisas reais, aprendendo com profundidade e documentando cada passo da jornada.",
    background_title: "Antes do código",
    background:
      "Antes de migrar para desenvolvimento, passei 2+ anos na Stone investigando incidentes de segurança e analisando fraudes transacionais com Splunk (SIEM). Depois fui para a AnotaAI (iFood), onde gerenciei o onboarding técnico de plataformas de automação — 900+ clientes onboardados.",
    background_closing:
      "Esse histórico moldou como eu enxergo software: com consciência prática de comportamento de sistemas, integridade de dados e documentação técnica.",
    currently_title: "Atualmente",
    currently: [
      "Cursando Sistemas de Informação na Universidade Veiga de Almeida (previsão: 2028)",
      "Aprofundando conhecimento em Node.js, PostgreSQL e fundamentos de backend",
      "Construindo projetos que refletem padrões do mundo real — sem tutoriais",
    ],
  },
  stack: {
    title: "Tech Stack",
    primary: "Principal",
    tools: "Ferramentas",
    learning: "Aprendendo",
  },
  projects: {
    title: "Projetos",
    view_code: "Ver código",
    view_demo: "Ver demo",
    items: [
      {
        title: "Appointment Rebooking",
        description:
          "Funcionalidade de reagendamento de consultas médicas construída com Next.js 15, RTK Query e TypeScript. Inclui validação server-side, invalidação automática de cache e lógica de reagendamento por especialidade.",
        tags: ["Next.js 15", "RTK Query", "TypeScript"],
        github: "https://github.com/yasminsuellen/appointment-rebooking",
      },
      {
        title: "Task Management Dashboard",
        description:
          "Aplicação de gerenciamento de tarefas com filtragem, ordenação e persistência em localStorage. Construída com Next.js 14 App Router e TypeScript.",
        tags: ["Next.js 14", "TypeScript", "localStorage"],
        github: "https://github.com/yasminsuellen/task-management-dashboard",
      },
    ],
  },
  contact: {
    title: "Contato",
    subtitle: "Tem um projeto em mente ou quer trocar uma ideia? Me manda uma mensagem.",
    name_label: "Nome",
    name_placeholder: "Seu nome",
    email_label: "Email",
    email_placeholder: "seu@email.com",
    message_label: "Mensagem",
    message_placeholder: "Olá Yasmin, gostaria de...",
    send: "Enviar mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada! Retorno em breve.",
    error: "Ops, algo deu errado. Tente novamente.",
    or: "ou me encontre em",
  },
  footer: {
    made: "Feito por",
    rights: "Todos os direitos reservados.",
  },
};

export type Translations = typeof pt;
