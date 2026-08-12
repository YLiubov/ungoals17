import undpLogo from "../../../assets/images/UNDP_Logo.svg";
import verdensklasseLogo from "../../../assets/images/MS_Logo.svg";
import globaleGymnasierLogo from "../../../assets/images/Globale_Gymnasier_Logo.svg";
import danidaLogo from "../../../assets/images/Danida_Logo.svg";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.about}>
          <h3>Om hjemmesiden</h3>

          <p>
            Dette digitale læringssite er udviklet af UNDP&apos;s nordiske kontor
            i Danmark, Globale Gymnasier og Mellemfolkeligt Samvirke.
          </p>
        </div>

        <div className={styles.organisations}>
          <h3>Organisationerne bag</h3>

          <div className={styles.logos}>
            <img src={undpLogo} alt="UNDP" />
            <img src={verdensklasseLogo} alt="Verdensklasse" />
            <img
              src={globaleGymnasierLogo}
              alt="Globale Gymnasier"
            />
            <img src={danidaLogo} alt="Danida" />
          </div>
        </div>
      </div>
    </footer>
  );
};