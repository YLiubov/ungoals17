import {
  NavbarStyled,
  NavListStyled,
  NavItemStyled,
  NavLinkStyled,
} from "./Navbar.styled";

export const Navbar = () => {
  return (
    <NavbarStyled $color="#222222">
      <NavListStyled>
        <NavItemStyled>
          <NavLinkStyled to="/" end>
            Verdensmålene
          </NavLinkStyled>
        </NavItemStyled>

        <NavItemStyled>
          <NavLinkStyled to="/undervisning">Undervisning</NavLinkStyled>
        </NavItemStyled>

        <NavItemStyled>
          <NavLinkStyled to="/byg-dit-eget-maal">
            Byg dit eget mål
          </NavLinkStyled>
        </NavItemStyled>

        <NavItemStyled>
          <NavLinkStyled to="/faq">FAQ</NavLinkStyled>
        </NavItemStyled>

        <NavItemStyled>
          <NavLinkStyled to="/kontakt">Kontakt os</NavLinkStyled>
        </NavItemStyled>

        <NavItemStyled>
          <NavLinkStyled to="/login">Login</NavLinkStyled>
        </NavItemStyled>
      </NavListStyled>
    </NavbarStyled>
  );
};
