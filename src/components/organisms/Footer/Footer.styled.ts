import styled from "styled-components";
import footerBackground from "../../../assets/images/Footer_Background.svg";

export const FooterStyled = styled.footer`
  min-height: 598px;
  box-sizing: border-box;
  padding: 64px 0 42px;
  color: #ffffff;
  background-color: #076f9f;
  background-image: url(${footerBackground});
  background-position: center;
  background-size: cover;

  .footerContent {
    width: min(87.6%, 1262px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 600px) minmax(0, 1fr);
    gap: 60px;
  }

  .footerColumn {
    p,
    h3 {
      color: inherit;
    }

    h3 {
      margin: 0 0 22px;
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: 16px;
      line-height: 1.2;
      text-transform: uppercase;
    }

    p {
      margin: 0 0 22px;
      font-size: 16px;
      line-height: 1.35;
    }
  }

  .footerNewsletter {
    display: grid;
    grid-template-columns: minmax(0, 400px) 88px;
    gap: 10px;
    margin: 17px 0 24px;

    input,
    button {
      border: 0;
      font: inherit;
    }

    input {
      min-width: 0;
      padding: 0 15px;
      color: ${({ theme }) => theme.colors.text};
      background-color: #ffffff;
    }

    button {
      color: #222222;
      background-color: #f0e9ed;
      font-weight: 400;
      text-transform: none;
      cursor: pointer;
    }
  }

  .footerCountdown { font-weight: 700; }

  .footerPrimaryLogos {
    display: flex;
    align-items: flex-start;
    gap: 46px;
    margin: 0 0 34px 4px;
  }

  .footerSecondaryLogos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 23px;
    margin-left: 4px;
  }

  .footerLogoUndp { width: 83px; }
  .footerLogoVerdensklasse { width: min(259px, 60vw); }
  .footerLogoGymnasier { width: min(366px, 100%); }
  .footerLogoDanida { width: 104px; }

  .footerLogoUndp,
  .footerLogoVerdensklasse,
  .footerLogoGymnasier,
  .footerLogoDanida {
    height: auto;
  }

  @media (max-width: 900px) {
    .footerContent { grid-template-columns: 1fr; }
  }

  @media (max-width: 560px) {
    .footerNewsletter {
      grid-template-columns: 1fr;

      button { width: 100px; }
    }
  }

  @media (max-width: 500px) {
    .footerPrimaryLogos { flex-wrap: wrap; }
  }
`;
