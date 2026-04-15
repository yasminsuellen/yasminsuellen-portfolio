"use client";

import { LanguageProvider } from "@/lib/i18n/context";
import { ThemeProvider } from "@/lib/theme/context";

/*
 * Providers agrupa todos os Contexts da aplicação num único componente.
 * Isso mantém o layout.tsx limpo e evita o "pyramid of doom" de providers.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
