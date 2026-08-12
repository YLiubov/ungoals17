import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item}>Verdensmålene</li>
        <li className={styles.item}>Undervisning</li>
        <li className={styles.item}>Byg dit eget mål</li>
        <li className={styles.item}>FAQ</li>
        <li className={styles.item}>Kontakt os</li>
        <li className={styles.item}>Login</li>
      </ul>
    </nav>
  );
};