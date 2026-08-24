import { ContainerStyled } from "./Container.styled";
import type { ContainerProps } from "./Container.types";

export const Container = ({ children }: ContainerProps) => (
  <ContainerStyled>{children}</ContainerStyled>
);
