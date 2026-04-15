export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-8 text-center text-sm"
      style={{ borderColor: "var(--border)", color: "var(--muted)" }}
    >
      <p>
        © {year}{" "}
        <span style={{ color: "var(--accent)" }} className="font-semibold">
          Yasmin Suellen
        </span>
        {" · "}Fullstack Developer{" | "}
        <span style={{ color: "var(--accent)" }} className="font-semibold">
          eusuellen.yasmin@gmail.com
        </span>
        {" · "}Brasil Remoto
      </p>
    </footer>
  );
}
