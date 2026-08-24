import { Link } from "react-router-dom";
import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper";

export const NotFoundPage = () => {
  return (
    <ContentWrapper
      title="404"
      description="Siden kunne ikke findes."
    >
      <p>Den adresse, du har åbnet, findes ikke.</p>
      <Link to="/">Gå tilbage til forsiden</Link>
    </ContentWrapper>
  );
};
