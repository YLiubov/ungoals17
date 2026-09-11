import { Container } from "../Container/Container";
import { ContentWrapperStyled } from "./ContentWrapper.styled";
import type { ContentWrapperProps } from "./ContentWrapper.types";

export const ContentWrapper = ({
  title,
  description,
  children,
}: ContentWrapperProps) => (
  <ContentWrapperStyled>
    <div className="contentWrapperTitleBand">
      <Container>
        <h1>{title}</h1>
      </Container>
    </div>

    <Container>
      <div className="contentWrapperContent">
        {description && <h2>{description}</h2>}
        {children}
      </div>
    </Container>
  </ContentWrapperStyled>
);
