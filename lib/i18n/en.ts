import type { Translations } from "./pt";

export const en: Translations = {
  nav: {
    about: "About",
    stack: "Stack",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Yasmin Suellen",
    role: "Frontend & Backend Developer",
    description:
      "Information Systems student focused on web development. I build applications that combine functionality, organization, and great user experience.",
    cta_github: "GitHub",
    cta_linkedin: "LinkedIn",
    cta_contact: "Get in touch",
  },
  about: {
    title: "About me",
    bio: "I'm a frontend and backend developer early in my career, focused on web development. My goal is to be above the curve, building real things, learning with depth, and documenting every step of the journey.",
    background_title: "Before the code",
    background:
      "Before transitioning into development, I spent 2+ years at Stone investigating security incidents and analyzing transactional fraud using Splunk (SIEM). I then moved to AnotaAI (iFood), where I managed technical onboarding for automation platforms, completing 900+ client onboardings.",
    background_closing:
      "This background shapes how I approach software, with practical awareness of system behavior, data integrity, and technical documentation.",
    currently_title: "Currently",
    currently: [
      "Studying Information Systems at Universidade Veiga de Almeida, expected 2028.",
      "Deepening knowledge in Node.js, PostgreSQL, and backend fundamentals.",
      "Building projects that reflect real-world patterns rather than tutorial exercises.",
    ],
  },
  stack: {
    title: "Tech Stack",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools",
    learning: "Learning",
  },
  projects: {
    title: "Projects",
    view_code: "View Code",
    view_demo: "Live demo",
    items: [
      {
        title: "Appointment Rebooking",
        description:
          "Patient appointment rebooking feature built with Next.js 15, RTK Query, and TypeScript. Includes server-side validation, automatic cache invalidation, and specialty-locked rebooking logic.",
        tags: ["Next.js 15", "RTK Query", "TypeScript"],
        github: "https://github.com/yasminsuellen/appointment-rebooking",
      },
      {
        title: "Task Management Dashboard",
        description:
          "Task management application with filtering, sorting, and localStorage persistence, built with Next.js 14 App Router and TypeScript.",
        tags: ["Next.js 14", "TypeScript", "localStorage"],
        github: "https://github.com/yasminsuellen/task-management-dashboard",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Have a project in mind or want to chat? Send me a message, or find me on:",
    name_label: "Name",
    name_placeholder: "Your Name",
    email_label: "Email",
    email_placeholder: "your@email.com",
    message_label: "Message",
    message_placeholder: "Hi Yasmin, I'd like to...",
    send: "Send Message",
    sending: "Sending...",
    success: "Message sent! I'll get back to you soon.",
    error: "Something went wrong. Please try again.",
    or: "or find me on",
  },
  footer: {
    made: "Made by",
    rights: "All rights reserved.",
  },
};
