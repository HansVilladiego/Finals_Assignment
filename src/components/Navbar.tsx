import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#222" }}>
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
    </nav>
  );
}