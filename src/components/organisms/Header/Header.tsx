import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/Logo.png";
import { Navbar } from "../Navbar/Navbar";
import { HeaderStyled, LogoStyled, TopBarStyled } from "./Header.styled";

export const Header = () => (
  <>
  <TopBarStyled />
  <HeaderStyled>
    <NavLink to="/" end aria-label="Gå til forsiden">
      <LogoStyled src={logo} alt="FN's Verdensmål" />
    </NavLink>
    <Navbar />
  </HeaderStyled>
  </>
);
