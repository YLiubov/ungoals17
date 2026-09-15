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
    position: relative;

    color: #ffffff;
    text-decoration: none;

    background-color: ${({ $color }) =>
      `#${$color}`};

    transition: transform 0.2s;

    &:hover {
      transform: scale(1.03);
    }

    .goalCardHeading {
      display: flex;
      gap: 10px;
      align-items: flex-start;
    }

    .goalCardNumber {
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: ${({ theme }) => theme.fontSizes.h1};
    }

    h3 {
      margin: 0;
      color: inherit;
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: 16px;
      font-weight: 600;
      line-height: 1.1;
      text-transform: uppercase;
    }

    .goalCardIcon {
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
    }

    .goalCardLikedIcon {
      position: absolute;
      right: 12px;
      bottom: 12px;
      width: 28px;
      height: 28px;
      color: #ffffff;
      pointer-events: none;

      svg {
        display: block;
        width: 100%;
        height: 100%;
        fill: none;
        stroke: currentColor;
      }
    }
  `;
