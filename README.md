# Dev Portfolio
Personal portfolio built with Next.js 15 and TypeScript. **[Click here to live demo.](https://yasminsuellen-portfolio.vercel.app)**

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://yasminsuellen-portfolio.vercel.app/)

## Features

- Bilingual content (English / Portuguese) with instant toggle, no page reload
- Dark mode (default) and light mode with localStorage persistence
- Scroll-triggered fade-in animations with Framer Motion
- Contact form connected to Resend API via Next.js API route
- Responsive layout with consistent design tokens across both themes

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Email:** Resend API

## Project Structure

```
app/
├── api/contact/ # Resend email route
├── globals.css # Design tokens and Tailwind v4 theme
└── layout.tsx # Fonts, metadata, theme flash prevention
components/
├── layout/ # Header and Footer
├── sections/ # Hero, About, TechStack, Projects, Contact
├── FadeIn.tsx # Reusable Framer Motion wrapper
└── Providers.tsx # ThemeProvider + LanguageProvider
lib/
├── i18n/ # Language context, pt.ts, en.ts
└── theme/ # Theme context and localStorage toggle
```

## Key Learnings

- Theme switching via CSS custom properties and a single class on `<html>` without Tailwind's `dark:` variant
- Preventing theme flash with an inline script in `<head>` before React hydration
- Type-safe i18n with plain React Context - `Translations` type inferred from `pt.ts` and enforced on `en.ts`
- Hover animations via `useState` and inline styles instead of CSS classes to avoid specificity conflicts with CSS variables

## Technical Challenges

- **Theme flash prevention:** `suppressHydrationWarning` on `<html>` combined with an inline script that reads localStorage and applies the `light` class before the first paint
- **Tailwind v4 + CSS variables:** Mapping custom properties to utility classes via `@theme inline` to keep design tokens as the single source of truth
- **i18n without a library:** Enforcing translation completeness at build time through TypeScript structural typing rather than runtime checks

---

**Yasmin Suellen** [GitHub](https://github.com/yasminsuellen) · [LinkedIn](https://www.linkedin.com/in/yasminsuellen/)
