import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";
import goal1 from "../../assets/images/1_Afskaf_fattigdom.svg";
import goal2 from "../../assets/images/2_Stop_sult.svg";
import goal3 from "../../assets/images/3_Sundhed_og_trivsel.svg";
import goal4 from "../../assets/images/4_Kvalitetsuddannelse.svg";
import goal5 from "../../assets/images/5_Ligestilling.svg";
import goal6 from "../../assets/images/6_Rent_vand.svg";
import goal7 from "../../assets/images/7_Bæredygtig_energi.svg";
import goal8 from "../../assets/images/8_Anstændige_jobs.svg";
import goal9 from "../../assets/images/9_Industri_og_innovation.svg";
import goal10 from "../../assets/images/10_Mindre_ulighed.svg";
import goal11 from "../../assets/images/11_Bæredygtige_byer.svg";
import goal12 from "../../assets/images/12_Ansvarligt_forbrug.svg";
import goal13 from "../../assets/images/13_Klima_Indsats.svg";
import goal14 from "../../assets/images/14_Livet_i_havet.svg";
import goal15 from "../../assets/images/15_Livet_på_land.svg";
import goal16 from "../../assets/images/16_Retfærdighed.svg";
import goal17 from "../../assets/images/17_Partnerskaber.svg";
import goalsLogo from "../../assets/images/Verdensmål.svg";
import divider from "../../assets/images/Divider.svg";
import {
  DividerStyled,
  GoalImageStyled,
  GoalsContentStyled,
  GoalsGridStyled,
  GoalsSectionStyled,
  GoalsTitleStyled,
} from "./HomePage.styled";

const goals = [
  { image: goal1, alt: "Mål 1: Afskaf fattigdom" },
  { image: goal2, alt: "Mål 2: Stop sult" },
  { image: goal3, alt: "Mål 3: Sundhed og trivsel" },
  { image: goal4, alt: "Mål 4: Kvalitetsuddannelse" },
  { image: goal5, alt: "Mål 5: Ligestilling" },
  { image: goal6, alt: "Mål 6: Rent vand og sanitet" },
  { image: goal7, alt: "Mål 7: Bæredygtig energi" },
  { image: goal8, alt: "Mål 8: Anstændige jobs" },
  { image: goal9, alt: "Mål 9: Industri og innovation" },
  { image: goal10, alt: "Mål 10: Mindre ulighed" },
  { image: goal11, alt: "Mål 11: Bæredygtige byer" },
  { image: goal12, alt: "Mål 12: Ansvarligt forbrug" },
  { image: goal13, alt: "Mål 13: Klimaindsats" },
  { image: goal14, alt: "Mål 14: Livet i havet" },
  { image: goal15, alt: "Mål 15: Livet på land" },
  { image: goal16, alt: "Mål 16: Fred og retfærdighed" },
  { image: goal17, alt: "Mål 17: Partnerskaber" },
  { image: goalsLogo, alt: "FN's Verdensmål" },
];

export const HomePage = () => {
  return (
    <>
      <ContentWrapper
        title="Verdensmålene"
        description="Hvad er FN’s Verdensmål for bæredygtig udvikling?"
        showTitle={true}
      >
        <h3>
            FN&apos;s Verdensmål består af 17 mål og 169
            delmål og er den til dato mest ambitiøse globale
            udviklingsdagsorden.
        </h3>

        <p>
          FN&apos;s Verdensmål for bæredygtig udvikling blev vedtaget af verdens stats- og regeringsledere på FN topmødet i New York den 25. september 2015. Det markerede en hidtil uset ambitiøs og transformativ udviklingsdagsorden. Målene trådte i kraft den 1. Januar 2016 og skal frem til 2030 sætte os kurs mod en mere bæredygtig udvikling for både mennesker og planeten, vi bor på.
        </p>

        <h2>De 17 verdensmål</h2>

        <p>
          Verdensmålene udgør 17 konkrete mål og 169 delmål, som forpligter alle FN&apos;s 193 medlemslande til helt at afskaffe fattigdom og sult i verden, reducere uligheder, sikre god uddannelse og bedre sundhed til alle, anstændige jobs og mere bæredygtig økonomisk vækst.
        </p>

        <p>
          De fokuserer ligeledes på at fremme fred og sikkerhed og stærke institutioner, og på at styrke internationale partnerskaber.
        </p>

        <p>
          Den nye dagsorden anerkender således, at social, økonomisk og miljømæssig udvikling, fred, sikkerhed og internationalt samarbejde er tæt forbundne, og at det kræver en integreret indsats at opnå holdbare udviklingsresultater.
        </p>
      </ContentWrapper>

      <GoalsSectionStyled>
        <GoalsContentStyled>
          <GoalsTitleStyled>
            FN&apos;s 17 verdensmål for bæredygtig udvikling
          </GoalsTitleStyled>

          <DividerStyled src={divider} alt="" />

          <GoalsGridStyled>
            {goals.map((goal) => (
              <GoalImageStyled
                key={goal.alt}
                src={goal.image}
                alt={goal.alt}
              />
            ))}
          </GoalsGridStyled>
        </GoalsContentStyled>
      </GoalsSectionStyled>
    </>
  );
};