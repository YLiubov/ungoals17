import styled from "styled-components";

export const GoalListSectionStyled = styled.section`
  padding: 36px 0 60px;

  background-color: ${({ theme }) =>
    theme.colors.secondary};
`;

export const GoalListContentStyled = styled.div`
  width: 88%;
  margin: 0 auto;
`;

export const GoalListTitleStyled = styled.h2`
  margin: 0;

  font-family: ${({ theme }) =>
    theme.fonts.heading};
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;
`;

export const GoalListDividerStyled = styled.img`
  display: block;

  width: 160px;
  margin: 12px auto 24px;
`;

export const GoalsGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GoalLogoCardStyled = styled.div`
  aspect-ratio: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoalLogoStyled = styled.img`
  width: 75%;
  height: auto;
`;

export const EmptyMessageStyled = styled.p`
  text-align: center;
`;