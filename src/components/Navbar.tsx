import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
    }}>
      <div style={{ fontWeight: 800, fontSize: "1.2rem", color: "#f0c040", letterSpacing: "0.05em" }}>
        &lt;MyPortfolio /&gt;
      </div>
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        {["/", "/about", "/contact"].map((path, i) => {
          const labels = ["Home", "About", "Contact"];
          return (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              style={({ isActive }) => ({
                color: isActive ? "#f0c040" : "#ccc",
                textDecoration: "none",
                fontWeight: isActive ? 700 : 400,
                fontSize: "0.95rem",
                transition: "color 0.2s",
              })}
            >
              {labels[i]}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}