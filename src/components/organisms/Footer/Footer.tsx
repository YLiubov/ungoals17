import danidaLogo from "../../../assets/images/Danida_Logo.svg";
import globaleGymnasierLogo from "../../../assets/images/Globale_Gymnasier_Logo.svg";
import verdensklasseLogo from "../../../assets/images/MS_Logo.svg";
import undpLogo from "../../../assets/images/UNDP_Logo.svg";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { FooterStyled } from "./Footer.styled";

export const Footer = () => (
  <FooterStyled>
    <div className="footerContent">
      <section className="footerColumn">
        <h3>Om hjemmesiden</h3>
        <p>
          Dette digitale læringssite er udviklet af UNDP&apos;s nordiske kontor
          i Danmark, Globale Gymnasier og Mellemfolkeligt Samvirke/VerdensKlasse
          med støtte fra Danidas Oplysningsbevilling.
        </p>

        <p>
          Vores mål med dette site er at give lærere og elever på landets
          ungdomsuddannelser mulighed for at opnå viden, holdninger og
          handlingskompetence i forhold til FN&apos;s verdensmål for bæredygtig
          udvikling. Sitet opdateres løbende med nyeste statistik, viden og nye
          undervisningsforløb.
        </p>

        <h3>Tilmeld nyhedsbrev</h3>
        <p>
          Tilmeld dig vores nyhedsbrev og få sidste nyt tilsendt direkte til din
          indbakke.
        </p>

        <form className="footerNewsletter">
          <Input
            type="email"
            name="newsletterEmail"
            aria-label="E-mail til nyhedsbrev"
            placeholder="Indtast din email"
          />
          <Button type="submit">Tilmeld</Button>
        </form>

        <p className="footerCountdown">
          ANTAL SEKUNDER TIL 2030: 1891716240887 sekunder
        </p>
      </section>

      <section className="footerColumn">
        <h3>Organisationerne bag</h3>
        <div className="footerPrimaryLogos">
          <img
            className="footerLogoUndp"
            src={undpLogo}
            alt="UNDP"
          />
          <img
            className="footerLogoVerdensklasse"
            src={verdensklasseLogo}
            alt="VerdensKlasse og Mellemfolkeligt Samvirke"
          />
        </div>

        <div className="footerSecondaryLogos">
          <img
            className="footerLogoGymnasier"
            src={globaleGymnasierLogo}
            alt="Globale Gymnasier"
          />
          <h3>Udviklet med støtte fra Danidas Oplysningsbevilling</h3>
          <img
            className="footerLogoDanida"
            src={danidaLogo}
            alt="Danida"
          />
        </div>
      </section>
    </div>
  </FooterStyled>
);
