export const pt = {
  nav: {
    about: "Sobre",
    stack: "Stack",
    projects: "Projetos",
    contact: "Contato",
  },
  hero: {
    name: "Yasmin Suellen",
    role: "Desenvolvedora Frontend & Backend",
    description:
      `Estudante de Sistemas de Informação com foco em desenvolvimento web para construção de 
      aplicações bem tipadas e de qualidade para produção que unem funcionalidade, 
      organização e uma excelente experiência do usuário.`,
    cta_github: "Ver GitHub",
    cta_linkedin: "LinkedIn",
    cta_contact: "Fale comigo",
  },
  about: {
    title: "Sobre mim",
    bio: `Sou desenvolvedora frontend e backend em início de carreira, com foco em desenvolvimento web. 
    Meu objetivo é ir além da curva, construindo aplicações reais de relevancia, aprendendo com profundidade e documentando cada passo da jornada.`,
    background_title: "Antes do código",
    background:
      `Antes de migrar para desenvolvimento, passei 2+ anos na Stone investigando incidentes 
      de segurança e analisando fraudes transacionais com Splunk - SIEM. Depois fui para a AnotaAI/iFood, 
      onde gerenciei o onboarding técnico de plataformas de automação, com 900+ clientes onboardados.`,
    background_closing:
      `Esse histórico moldou como eu enxergo software: com consciência prática de comportamento 
      de sistemas, integridade de dados e documentação técnica.`,
    currently_title: "Atualmente",
    currently: [
      "Cursando Sistemas de Informação na Universidade Veiga de Almeida, previsão: 2028.",
      "Aprofundando conhecimento em Node.js, PostgreSQL e fundamentos de backend.",
      "Construindo projetos que refletem padrões do mundo real, sem tutoriais.",
    ],
  },
  stack: {
    title: "Tech Stack",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Ferramentas",
    learning: "Aprendendo",
  },
  projects: {
    title: "Projetos",
    view_code: "Ver Código",
    view_demo: "Ver Demo",
    items: [
      {
        title: "Appointment Rebooking",
        description:
          `Funcionalidade de reagendamento de consultas médicas construída com Next.js 15, 
          RTK Query e TypeScript. Inclui validação server-side, invalidação 
          automática de cache e lógica de reagendamento por especialidade.`,
        tags: ["Next.js 15", "RTK Query", "TypeScript"],
        github: "https://github.com/yasminsuellen/appointment-rebooking",
        demo: "https://appointment-rebooking.vercel.app",
      },
      {
        title: "Task Management Dashboard",
        description:
          "Aplicação de gerenciamento de tarefas com filtragem, ordenação e persistência em localStorage. Construída com Next.js 14 App Router e TypeScript.",
        tags: ["Next.js 14", "TypeScript", "localStorage"],
        github: "https://github.com/yasminsuellen/task-management-dashboard",
        demo: "https://task-management-dashboard-ten-navy.vercel.app",
      },
      {
        title: "Lead Flow Landing",
        description:
          `Landing page de produto para um serviço de automação de qualificação de leads. 
          Construída com Next.js e TypeScript, animações com Framer Motion, persistência em PostgreSQL 
          via Prisma e layout responsivo com Tailwind CSS.`,
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        github: "https://github.com/yasminsuellen/lead-flow-landing",
        demo: "https://leadflow-landing-opal.vercel.app",
      },
    ],
  },
  contact: {
    title: "Contato",
    subtitle: "Tem um projeto em mente ou quer marcar um café virtual? Me manda uma mensagem, ou me encontre em:",
    name_label: "Nome",
    name_placeholder: "Seu nome",
    email_label: "Email",
    email_placeholder: "seu@email.com",
    message_label: "Mensagem",
    message_placeholder: "Olá Yasmin, gostaria de...",
    send: "Enviar Mensagem",
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
