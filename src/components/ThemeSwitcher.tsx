import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <span style={{ color: "white", fontSize: "0.85rem" }}>Theme:</span>
      {["light", "dark", "ocean"].map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t as "light" | "dark" | "ocean")}
          style={{
            padding: "0.25rem 0.75rem",
            cursor: "pointer",
            fontWeight: theme === t ? "bold" : "normal",
            background: theme === t ? "#f0c040" : "#444",
            color: theme === t ? "#111" : "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </button>
      ))}
    </div>
  );
}