"use client";

import { useTranslation } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-8 text-center text-sm"
      style={{ borderColor: "var(--border)", color: "var(--muted)" }}
    >
      <p>
        {t.footer.made}{" "}
        <span style={{ color: "var(--accent)" }} className="font-semibold">
          Yasmin Suellen
        </span>{" "}
        · {year} · {t.footer.rights}
      </p>
    </footer>
  );
}
