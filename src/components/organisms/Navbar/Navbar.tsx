import {
  NavbarStyled,
  NavItemStyled,
  NavLinkStyled,
  NavListStyled,
} from "./Navbar.styled";

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
    <NavListStyled>
      {navigationItems.map(({ to, label, end }) => (
        <NavItemStyled key={to}>
          <NavLinkStyled to={to} end={end}>
            {label}
          </NavLinkStyled>
        </NavItemStyled>
      ))}
    </NavListStyled>
  </NavbarStyled>
);
