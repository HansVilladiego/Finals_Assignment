export default function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="hero">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}