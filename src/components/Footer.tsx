import undpLogo from "../assets/images/UNDP_Logo.svg";
import verdensklasseLogo from "../assets/images/MS_Logo.svg";
import globaleGymnasierLogo from "../assets/images/Globale_Gymnasier_Logo.svg";
import danidaLogo from "../assets/images/Danida_Logo.svg";
import footerBackground from "../assets/images/Footer_Background.svg";

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footerBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src={undpLogo} alt="UNDP" />
      <img src={verdensklasseLogo} alt="Verdensklasse" />
      <img src={globaleGymnasierLogo} alt="Globale Gymnasier" />
      <img src={danidaLogo} alt="Danida" />
    </footer>
  );
};