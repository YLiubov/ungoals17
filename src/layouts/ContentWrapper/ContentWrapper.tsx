import { Container } from "../Container/Container";
import {
  PageContentStyled,
  PageTitleStyled,
  TitleBandStyled,
} from "./ContentWrapper.styled";
import type { ContentWrapperProps } from "./ContentWrapper.types";

export const ContentWrapper = ({
  title,
  description,
  children,
}: ContentWrapperProps) => (
  <section>
    <TitleBandStyled>
      <Container>
        <PageTitleStyled>{title}</PageTitleStyled>
      </Container>
    </TitleBandStyled>

    <Container>
      <PageContentStyled>
        {description && <h2>{description}</h2>}
        {children}
      </PageContentStyled>
    </Container>
  </section>
);
