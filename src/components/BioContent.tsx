export default function BioContent() {
  return (
    <div className="card">
      <h2 style={{ fontSize: "1.6rem", marginBottom: "1.2rem" }}>About Me</h2>
      <p style={{ lineHeight: "1.8", marginBottom: "1.5rem", opacity: 0.9 }}>
        Hi! I'm a student in Lyceum of Alabang learning full-stack web development. I enjoy solving problems
        and turning ideas into clean, functional applications.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
        {[
          { icon: "📍", label: "Location", value: "Philippines" },
          { icon: "💻", label: "Currently Studying", value: "ReactJS CRUD Operations" },
          { icon: "🎯", label: "Goal", value: "Build production-grade web applications" },
          { icon: "🛠️", label: "Stack", value: "React, TypeScript, .NET Core" },
        ].map(item => (
          <div key={item.label} style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(240,192,64,0.1)",
            border: "1px solid rgba(240,192,64,0.2)"
          }}>
            <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.85rem", opacity: 0.7 }}>{item.label}</div>
              <div style={{ fontSize: "1rem" }}>{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}