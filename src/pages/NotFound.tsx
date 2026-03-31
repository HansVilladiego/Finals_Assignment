import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "6rem 2rem", flex: 1 }}>
      <h1 style={{ fontSize: "6rem", fontWeight: 800, color: "#f0c040", lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Page Not Found</h2>
      <p style={{ opacity: 0.7, marginBottom: "2rem", fontSize: "1.1rem" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          padding: "0.75rem 2rem",
          background: "linear-gradient(135deg, #f0c040, #e67e22)",
          color: "#111",
          fontWeight: 700,
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1rem",
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}