import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/Logo.png";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" end aria-label="Gå til forsiden">
        <img
          className={styles.logo}
          src={logo}
          alt="FN's Verdensmål"
        />
      </NavLink>

      <Navbar />
    </header>
  );
};
