import { useTheme } from "../context/ThemeContext";

type Props = {
  sender: string;
  message: string;
  onClose: () => void;
};

export default function SubmissionModal({ sender, message, onClose }: Props) {
  const { theme } = useTheme();

  const modalStyle: React.CSSProperties = {
    position: "fixed",
    top: 0, left: 0,
    width: "100vw", height: "100vh",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const boxStyle: React.CSSProperties = {
    background: theme === "dark" ? "#1a1a2e" : theme === "ocean" ? "#0a3d62" : "#ffffff",
    color: theme === "light" ? "#111" : "#fff",
    padding: "2rem",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "90%",
    textAlign: "center",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  };

  return (
    <div style={modalStyle}>
      <div style={boxStyle}>
        <h2>✅ Message Received!</h2>
        <p><strong>From:</strong> {sender}</p>
        <p><strong>Message:</strong> {message}</p>
        <button
          onClick={onClose}
          style={{
            marginTop: "1.5rem",
            padding: "0.5rem 1.5rem",
            background: "#f0c040",
            color: "#111",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}