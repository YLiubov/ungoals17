import { NavLink } from "react-router-dom";
import { NavbarStyled } from "./Navbar.styled";

const navigationItems = [
  { to: "/", label: "Verdensmålene", end: true },
  { to: "/undervisning", label: "Undervisning" },
  { to: "/byg-dit-eget-maal", label: "Byg dit eget mål" },
  { to: "/faq", label: "FAQ" },
  { to: "/kontakt", label: "Kontakt os" },
  { to: "/login", label: "Login" },
];

export const Navbar = () => (
  <NavbarStyled aria-label="Hovednavigation">
    <ul>
      {navigationItems.map(({ to, label, end }) => (
        <li key={to}>
          <NavLink to={to} end={end}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </NavbarStyled>
);
