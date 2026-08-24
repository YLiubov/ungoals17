import styled from "styled-components";

export const GoalVideoStyled = styled.iframe`
  width: 70%;
  aspect-ratio: 16 / 9;

  margin-bottom: 24px;
  border: 0;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const GoalDescriptionStyled = styled.div`
  p {
    line-height: 1.5;
  }
`;