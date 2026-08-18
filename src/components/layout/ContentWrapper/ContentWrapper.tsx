import type { ReactNode } from "react";
import { Container } from "../Container/Container";

type ContentWrapperProps = {
  title: string;
  description: string;
  showTitle: boolean;
  children: ReactNode;
};

export const ContentWrapper = ({
  title,
  description,
  showTitle,
  children,
}: ContentWrapperProps) => {
  return (
    <section>
      {showTitle && (
        <Container
          width="100%"
          backgroundColor="#EDEDED"
          padding="28px 0"
        >
          <Container width="88%">
            <h1 className="reset">{title}</h1>
          </Container>
        </Container>
      )}

      <Container width="88%" padding="30px 0 50px">
        <h2>{description}</h2>

        {children}
      </Container>
    </section>
  );
};