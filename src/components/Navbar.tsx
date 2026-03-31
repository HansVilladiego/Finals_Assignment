import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      gap: "1rem",
      padding: "1rem",
      background: "#222",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({ color: isActive ? "#f0c040" : "white", textDecoration: "none" })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({ color: isActive ? "#f0c040" : "white", textDecoration: "none" })}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({ color: isActive ? "#f0c040" : "white", textDecoration: "none" })}
        >
          Contact
        </NavLink>
      </div>
      <ThemeSwitcher />
    </nav>
  );
}