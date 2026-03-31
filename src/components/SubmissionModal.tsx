import { useTheme } from "../context/ThemeContext";

type Props = {
  sender: string;
  message: string;
  onClose: () => void;
};

export default function SubmissionModal({ sender, message, onClose }: Props) {
  const { theme } = useTheme();

  const boxBg = theme === "dark" ? "#1a1a2e" : theme === "ocean" ? "#0d3060" : "#ffffff";
  const textColor = theme === "light" ? "#111" : "#fff";

  return (
    <div style={{
      position: "fixed", top: 0, left: 0,
      width: "100vw", height: "100vh",
      background: "rgba(0,0,0,0.65)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 1000,
      backdropFilter: "blur(4px)",
    }}>
      <div style={{
        background: boxBg,
        color: textColor,
        padding: "2.5rem",
        borderRadius: "16px",
        maxWidth: "420px",
        width: "90%",
        textAlign: "center",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        border: "1px solid rgba(240,192,64,0.3)",
      }}>
        <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>✅</div>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "#f0c040" }}>Message Received!</h2>

        <div style={{
          background: "rgba(240,192,64,0.1)",
          border: "1px solid rgba(240,192,64,0.2)",
          borderRadius: "10px",
          padding: "1rem 1.25rem",
          marginBottom: "1.5rem",
          textAlign: "left",
        }}>
          <p style={{ marginBottom: "0.5rem" }}><strong>From:</strong> {sender}</p>
          <p><strong>Message:</strong> {message}</p>
        </div>

        <button
          onClick={onClose}
          style={{
            padding: "0.65rem 2rem",
            background: "linear-gradient(135deg, #f0c040, #e67e22)",
            color: "#111",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: "1rem",
          }}
        >
          Close ✕
        </button>
      </div>
    </div>
  );
}