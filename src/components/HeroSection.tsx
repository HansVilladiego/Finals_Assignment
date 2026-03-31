export default function HeroSection() {
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>👋 Hey, I'm Hans Villadiego</h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", opacity: 0.85 }}>
        I build this using <strong>React</strong>, <strong>TypeScript</strong>, and <strong>.NET Core</strong>.
        Currently sharpening my skills through hands-on projects and real-world architecture.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
        {["React", "TypeScript", "Vite", ".NET Core", "REST APIs"].map(tag => (
          <span key={tag} style={{
            padding: "0.4rem 1rem",
            borderRadius: "999px",
            background: "#f0c040",
            color: "#111",
            fontWeight: 600,
            fontSize: "0.85rem"
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}