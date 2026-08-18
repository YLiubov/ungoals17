import { Link } from "react-router-dom";

import {
  NavbarStyled,
  NavListStyled,
  NavItemStyled,
} from "./Navbar.styled";

export const Navbar = () => {
  return (
    <NavbarStyled $color="#222222">
      <NavListStyled>
        <NavItemStyled>
          <Link to="/verdensmaalene">Verdensmålene</Link>
        </NavItemStyled>

        <NavItemStyled>
          <Link to="/undervisning">Undervisning</Link>
        </NavItemStyled>

        <NavItemStyled>
          <Link to="/byg-dit-eget-maal">
            Byg dit eget mål
          </Link>
        </NavItemStyled>

        <NavItemStyled>
          <Link to="/faq">FAQ</Link>
        </NavItemStyled>

        <NavItemStyled>
          <Link to="/kontakt">Kontakt os</Link>
        </NavItemStyled>
      </NavListStyled>
    </NavbarStyled>
  );
};