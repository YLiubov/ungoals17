import {
  NavbarStyled,
  NavListStyled,
  NavItemStyled,
} from "./Navbar.styled";

export const Navbar = () => {
  return (
    <NavbarStyled $color="#222222">
      <NavListStyled>
        <NavItemStyled>Verdensmålene</NavItemStyled>
        <NavItemStyled>Undervisning</NavItemStyled>
        <NavItemStyled>Byg dit eget mål</NavItemStyled>
        <NavItemStyled>FAQ</NavItemStyled>
        <NavItemStyled>Kontakt os</NavItemStyled>
        <NavItemStyled>Login</NavItemStyled>
      </NavListStyled>
    </NavbarStyled>
  );
};