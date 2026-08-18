import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";
import {
  SubjectCardStyled,
  SubjectGridStyled,
} from "./EducationPage.styled";

const subjects = [
  { name: "Biologi", color: "#A41942" },
  { name: "Bioteknologi", color: "#DFA63B" },
  { name: "Kemi", color: "#4BA039" },
  { name: "Dansk", color: "#FF81FF" },
  { name: "Design", color: "#3101C9" },
  { name: "Historie", color: "#98C89E" },
  { name: "Fysik", color: "#0C6C9A" },
  { name: "Idræt", color: "#27BDDF" },
  { name: "Matematik", color: "#6591A5" },
];

export const EducationPage = () => {
  return (
    <ContentWrapper
      title="Undervisning"
      description="Her finder du inspiration til din undervisning i form af introducerende øvelser, der kan bruges til at sætte verdensmålene i spil sammen med dine elever. Øvelserne er udarbejdet på baggrund af bogen “Bliver verden bedre” og kernestof i fagene."
      showTitle={true}
    >
      <SubjectGridStyled>
        {subjects.map((subject) => (
          <SubjectCardStyled
            key={subject.name}
            $backgroundColor={subject.color}
          >
            {subject.name}
          </SubjectCardStyled>
        ))}
      </SubjectGridStyled>
    </ContentWrapper>
  );
};