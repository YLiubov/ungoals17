import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";

import {
  FaqListStyled,
  FaqItemStyled,
  FaqQuestionStyled,
  FaqAnswerStyled,
} from "./FaqPage.styled";

export const FaqPage = () => {
  return (
    <ContentWrapper title="FAQ" description="" showTitle={true}>
      <FaqListStyled>
        <FaqItemStyled>
          <FaqQuestionStyled>Hvad er verdensmålene?</FaqQuestionStyled>

          <FaqAnswerStyled>
            Den 25. september 2015 vedtog FN&apos;s medlemslande verdensmålene
            for bæredygtig udvikling, som gælder frem til 2030. De 17 verdensmål
            har 169 delmål og 230 globale indikatorer. Verdensmålene er den mest
            ambitiøse aftale for bæredygtig udvikling, som verdens ledere har
            vedtaget. I begrebet bæredygtig udvikling integreres de tre
            dimensioner af bæredygtighed: Social, økonomisk og miljømæssig. Med
            verdensmålene har verdens ledere forpligtet sig til at opnå
            resultater på fire hovedområder frem mod 2030: At afskaffe ekstrem
            fattigdom, at mindske ulighed og uretfærdighed, at fremme fred og
            retfærdighed, og at løse klimakrisen. <br />
            Med verdensmålene sigter vi efter at være den første generation, som
            kan udrydde fattigdom og tackle klimaudfordringerne.
          </FaqAnswerStyled>
        </FaqItemStyled>

        <FaqItemStyled>
          <FaqQuestionStyled>
            Hvordan blev verdensmålene udviklet?
          </FaqQuestionStyled>

          <FaqAnswerStyled>
            Hvordan blev verdensmålene udviklet? Det er FN&apos;s 193
            medlemsstater, som i fællesskab har udviklet verdensmålene.
            Processen for udviklingen af verdensmålene er unik i FN&apos;s
            historie. Den er præget af gennemsigtighed, hvor repræsentanter fra
            regeringer, den private sektor, forskere, civilsamfund og 10
            millioner borgere gav deres stemme gennem MyWorld2015.
            <br />
            For at opretholde en gennemsigtig og vedvarende proces kan du indtil
            2030 komme med dine inputs til den globale, bæredygtige udvikling
            gennem MyWorld2030's spørgeskema.
          </FaqAnswerStyled>
        </FaqItemStyled>

        <FaqItemStyled>
          <FaqQuestionStyled>
            Hvem har ansvaret for, at verdensmålene realiseres?
          </FaqQuestionStyled>

          <FaqAnswerStyled>
            Hvis verdensmålene skal indfries, skal alle dele af samfundet
            inkluderes. Det gælder organisationer, virksomheder, den offentlige
            sektor, forskere og enkeltpersoner.
          </FaqAnswerStyled>
        </FaqItemStyled>

        <FaqItemStyled>
          <FaqQuestionStyled>
            Hvordan skal arbejdet med verdensmålene følges op?
          </FaqQuestionStyled>

          <FaqAnswerStyled>
            FN har udviklet indikatorer til måling af verdensmålenes resultater
            på globalt plan. Hvert land skal også udvikle nationale indikatorer
            og metoder til måling af arbejdet.
          </FaqAnswerStyled>
        </FaqItemStyled>

        <FaqItemStyled>
          <FaqQuestionStyled>
            Hvordan hænger verdensmålene sammen?
          </FaqQuestionStyled>

          <FaqAnswerStyled>
            Selvom verdensmålene har 17 mål, betyder det ikke, at ét mål er
            vigtigere end et andet. Når man arbejder med ét mål, kan det
            samtidig hjælpe med at opfylde flere af de andre mål.
          </FaqAnswerStyled>
        </FaqItemStyled>

        <FaqItemStyled>
          <FaqQuestionStyled>
            Hvorfor er det vigtigt, at alle kender verdensmålene?
          </FaqQuestionStyled>

          <FaqAnswerStyled>
            Når alle kender målene, kan vi samle kræfterne og skabe bedre
            forudsætninger for at realisere dem. Personer og organisationer kan
            også stille krav til regeringer og virksomheder.
          </FaqAnswerStyled>
        </FaqItemStyled>

        <FaqItemStyled>
          <FaqQuestionStyled>
            Hvordan kan du selv bidrage til en bæredygtig udvikling?
          </FaqQuestionStyled>

          <FaqAnswerStyled>
            Alle kan bidrage til en bedre fremtid. Men måske kan det være svært at se, hvordan du som enkeltperson kan bidrage til realiseringen af verdensmålene. <br />
            Der er flere muligheder for at gøre en forskel i din hverdag på netop det område, som optager dig. <br />
            Det kan helt lavpraktisk være at huske at slukke lyset, når du forlader et lokale, eller at spare på vandet. Det kan også være ting, som at sortere affald eller engagere dig i det lokale foreningsliv <br />
            Du kan også bakke op om en bæredygtig udvikling med din stemme. Enten i debatter eller ved valg til byråd, regionsråd, Folketing og Europaparlamentet. <br />
            Du kan hente yderligere inspiration til, hvordan du selv kan handle i relation til verdensmålene her.
          </FaqAnswerStyled>
        </FaqItemStyled>
      </FaqListStyled>
    </ContentWrapper>
  );
};
