"use client";

import { createContext, useContext, useState } from "react";
import { pt, type Translations } from "./pt";
import { en } from "./en";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations: Record<Language, Translations> = { pt, en };

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  /*
   * Estado inicial: inglês (padrão para portfólio — maior alcance).
   * O usuário pode alternar a qualquer momento pelo botão no Header.
   */
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));

  return (
    <LanguageContext.Provider
      value={{ language, t: translations[language], toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

/*
 * Hook `useTranslation` — retorna `t` (o objeto de traduções)
 * e `language` (o idioma atual). Use assim em qualquer componente:
 *
 *   const { t, language } = useTranslation();
 *   <h1>{t.hero.name}</h1>
 */
export function useTranslation(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
}
