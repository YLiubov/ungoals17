import styled from "styled-components";

export const GoalListStyled = styled.section`
  padding: 36px 0 60px;
  background-color: ${({ theme }) => theme.colors.secondary};

  .goalListContent { width: 88%; margin: 0 auto; }

  h2 {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 28px;
    text-align: center;
    text-transform: uppercase;
  }

  .goalListDivider {
    display: block;
    width: 160px;
    margin: 12px auto 24px;
  }

  .goalListGrid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
  }

  .goalListLogoCard {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .goalListLogo { width: 75%; height: auto; }
  .goalListEmpty { text-align: center; }

  @media (max-width: 1000px) {
    .goalListGrid { grid-template-columns: repeat(3, 1fr); }
  }

  @media (max-width: 600px) {
    .goalListGrid { grid-template-columns: repeat(2, 1fr); }
  }
`;
