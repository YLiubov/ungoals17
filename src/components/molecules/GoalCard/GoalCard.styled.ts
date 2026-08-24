import { Link } from "react-router-dom";
import styled from "styled-components";

import type {
  GoalCardStyledProps,
} from "./GoalCard.types";

export const GoalCardStyled =
  styled(Link)<GoalCardStyledProps>`
    aspect-ratio: 1;
    padding: 14px;

    display: flex;
    flex-direction: column;

    color: #ffffff;
    text-decoration: none;

    background-color: ${({ $color }) =>
      `#${$color}`};

    transition: transform 0.2s;

    &:hover {
      transform: scale(1.03);
    }
  `;

export const GoalHeadingStyled = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;

export const GoalNumberStyled = styled.span`
  font-family: ${({ theme }) =>
    theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h1};
`;

export const GoalTitleStyled = styled.h3`
  margin: 0;

  font-family: ${({ theme }) =>
    theme.fonts.heading};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.1;
  text-transform: uppercase;

  color: inherit;
`;

export const GoalIconStyled = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 0;

  svg {
    width: 65%;
    max-height: 70%;
  }

  svg path,
  svg polygon {
    fill: currentColor;
  }

  svg line {
    stroke: currentColor;
  }
`;