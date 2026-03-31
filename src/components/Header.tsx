export default function Header({ title }: { title: string }) {
  return (
    <header style={{ background: "#333", color: "white", padding: "2rem", textAlign: "center" }}>
      <h1>{title}</h1>
    </header>
  );
}