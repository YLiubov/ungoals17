import danidaLogo from "../../../assets/images/Danida_Logo.svg";
import globaleGymnasierLogo from "../../../assets/images/Globale_Gymnasier_Logo.svg";
import verdensklasseLogo from "../../../assets/images/MS_Logo.svg";
import undpLogo from "../../../assets/images/UNDP_Logo.svg";
import {
  CountdownStyled,
  DanidaLogoStyled,
  FooterColumnStyled,
  FooterContentStyled,
  FooterStyled,
  GymnasierLogoStyled,
  NewsletterFormStyled,
  PrimaryLogosStyled,
  SecondaryLogosStyled,
  UndpLogoStyled,
  VerdensklasseLogoStyled,
} from "./Footer.styled";

export const Footer = () => (
  <FooterStyled>
    <FooterContentStyled>
      <FooterColumnStyled>
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

        <NewsletterFormStyled>
          <input
            type="email"
            name="newsletterEmail"
            aria-label="E-mail til nyhedsbrev"
            placeholder="Indtast din email"
          />
          <button type="submit">Tilmeld</button>
        </NewsletterFormStyled>

        <CountdownStyled>
          ANTAL SEKUNDER TIL 2030: 1891716240887 sekunder
        </CountdownStyled>
      </FooterColumnStyled>

      <FooterColumnStyled>
        <h3>Organisationerne bag</h3>
        <PrimaryLogosStyled>
          <UndpLogoStyled 
            src={undpLogo} 
            alt="UNDP" />
          <VerdensklasseLogoStyled
            src={verdensklasseLogo}
            alt="VerdensKlasse og Mellemfolkeligt Samvirke"
          />
        </PrimaryLogosStyled>

        <SecondaryLogosStyled>
          <GymnasierLogoStyled
            src={globaleGymnasierLogo}
            alt="Globale Gymnasier"
          />
          <h3>
            Udviklet med støtte fra Danidas Oplysningsbevilling
          </h3>
          <DanidaLogoStyled 
            src={danidaLogo} 
            alt="Danida" 
          />
        </SecondaryLogosStyled>
      </FooterColumnStyled>
    </FooterContentStyled>
  </FooterStyled>
);
