import logo from "../../../assets/images/Logo.svg";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={logo}
        alt="FN's Verdensmål"
      />

      <Navbar />
    </header>
  );
};