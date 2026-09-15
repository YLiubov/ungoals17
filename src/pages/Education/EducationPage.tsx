import { EducationList } from "../../components/organisms/EducationList/EducationList";
import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper";

export const EducationPage = () => {
  return (
    <ContentWrapper
      title="Undervisning"
      description="Her finder du inspiration til din undervisning i form af introducerende øvelser, der kan bruges til at sætte verdensmålene i spil sammen med dine elever. Øvelserne er udarbejdet på baggrund af bogen “Bliver verden bedre” og kernestof i fagene."
    >
      <EducationList />
    </ContentWrapper>
  );
};
