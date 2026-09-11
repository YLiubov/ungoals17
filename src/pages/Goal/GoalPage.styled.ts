import styled from "styled-components";

export const GoalPageStyled = styled.div`
  .goalPageMedia {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  iframe {
    width: 70%;
    aspect-ratio: 16 / 9;
    margin-bottom: 24px;
    border: 0;
  }

  .goalPageDescription p {
    line-height: 1.5;
  }

  @media (max-width: 800px) {
    iframe {
      width: 100%;
    }
  }
`;
