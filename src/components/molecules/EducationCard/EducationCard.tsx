import { EducationCardStyled } from "./EducationCard.styled";
import type { EducationCardProps } from "./EducationCard.types";

export const EducationCard = ({ name, color }: EducationCardProps) => (
  <EducationCardStyled $color={color}>
    <h3>{name}</h3>
  </EducationCardStyled>
);
