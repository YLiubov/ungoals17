import { NavLink } from "react-router-dom";
import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";

export const NotFoundPage = () => {
  return (
    <ContentWrapper
      title="404"
      description="Siden kunne ikke findes."
      showTitle={true}
    >
      <NavLink to="/" end>
        Gå tilbage til forsiden
      </NavLink>
    </ContentWrapper>
  );
};
