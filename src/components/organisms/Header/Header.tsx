import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/Logo.png";
import { Navbar } from "../Navbar/Navbar";
import { HeaderStyled } from "./Header.styled";

export const Header = () => (
  <HeaderStyled>
    <div className="headerTopBar" />
    <header>
      <NavLink to="/" end aria-label="Gå til forsiden">
        <img className="headerLogo" src={logo} alt="FN's Verdensmål" />
      </NavLink>
      <Navbar />
    </header>
  </HeaderStyled>
);
