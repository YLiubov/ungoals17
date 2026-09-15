import styled from "styled-components";

import type { EducationCardStyledProps } from "./EducationCard.types";

export const EducationCardStyled =
  styled.article<EducationCardStyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1.83 / 1;
    padding: 20px;
    box-sizing: border-box;

    background-color: ${({ $color }) => `#${$color}`};

    h3 {
      margin: 0;
      color: #ffffff;
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: clamp(22px, 2vw, 30px);
      font-weight: 600;
      text-align: center;
      text-transform: uppercase;
    }
  `;
