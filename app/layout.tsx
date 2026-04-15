import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Yasmin Suellen — Frontend & Backend Developer",
  description:
    "Portfolio of Yasmin Suellen, a frontend and backend developer focused on building well-typed, production-quality web applications with Next.js, TypeScript, and Node.js.",
  keywords: ["developer", "frontend", "backend", "Next.js", "TypeScript", "portfolio"],
  authors: [{ name: "Yasmin Suellen" }],
  openGraph: {
    title: "Yasmin Suellen — Frontend & Backend Developer",
    description:
      "Frontend and backend developer building production-quality web applications.",
    url: "https://yasminsuellen.dev",
    siteName: "Yasmin Suellen",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*
     * suppressHydrationWarning evita o aviso do React quando o script
     * inline muda a classe do <html> antes da hidratação.
     */
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
         * Script inline que roda ANTES do React hidratar a página.
         * Lê a preferência salva no localStorage e aplica a classe
         * correta no <html> — isso evita o "flash" de tema errado.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  }
                  // dark é o padrão — sem classe = dark mode
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${raleway.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
