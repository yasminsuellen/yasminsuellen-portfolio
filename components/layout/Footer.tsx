export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-8 text-center text-sm"
      style={{ borderColor: "var(--border)", color: "var(--muted)" }}
    >
      <p>
        © Website By {""} 
        <a
          href="https://wa.me/5521975874672"
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: "var(--accent)" }}
          className="font-semibold hover:opacity-80 transition-opacity duration-200"
        >
          Yasmin Suellen
        </a>
        {" · "}Software Developer
        {" · "}Brazil Remote | {" "}
        <a
          href="https://wa.me/5521975874672"
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: "var(--accent)" }}
          className="font-semibold hover:opacity-80 transition-opacity duration-200"
        >
          Let's build something?
        </a>
      </p>
    </footer>
  );
}
