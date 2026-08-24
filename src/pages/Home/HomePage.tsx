import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper";
import { GoalList } from "../../components/organisms/GoalList/GoalList";

export const HomePage = () => {
  return (
    <>
      <ContentWrapper
        title="Verdensmålene"
        description="Hvad er FN’s Verdensmål for bæredygtig udvikling?"
      >
        <h3>
          FN&apos;s Verdensmål består af 17 mål og 169 delmål og er den til dato
          mest ambitiøse globale udviklingsdagsorden.
        </h3>

        <p>
          FN&apos;s Verdensmål for bæredygtig udvikling blev vedtaget af verdens
          stats- og regeringsledere på FN topmødet i New York den 25. september
          2015. Det markerede en hidtil uset ambitiøs og transformativ
          udviklingsdagsorden. Målene trådte i kraft den 1. Januar 2016 og skal
          frem til 2030 sætte os kurs mod en mere bæredygtig udvikling for både
          mennesker og planeten, vi bor på.
        </p>

        <h2>De 17 verdensmål</h2>

        <p>
          Verdensmålene udgør 17 konkrete mål og 169 delmål, som forpligter alle
          FN&apos;s 193 medlemslande til helt at afskaffe fattigdom og sult i
          verden, reducere uligheder, sikre god uddannelse og bedre sundhed til
          alle, anstændige jobs og mere bæredygtig økonomisk vækst.
        </p>

        <p>
          De fokuserer ligeledes på at fremme fred og sikkerhed og stærke
          institutioner, og på at styrke internationale partnerskaber.
        </p>

        <p>
          Den nye dagsorden anerkender således, at social, økonomisk og
          miljømæssig udvikling, fred, sikkerhed og internationalt samarbejde er
          tæt forbundne, og at det kræver en integreret indsats at opnå holdbare
          udviklingsresultater.
        </p>
      </ContentWrapper>

      <GoalList />
    </>
  );
};
