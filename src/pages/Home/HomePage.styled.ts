import styled from "styled-components";

export const GoalsSectionStyled = styled.section`
  padding: 35px 0 60px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const GoalsContentStyled = styled.div`
  width: 88%;
  margin: 0 auto;
`;

export const GoalsTitleStyled = styled.h2`
  margin: 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 30px;
  text-transform: uppercase;
`;

export const DividerStyled = styled.img`
  display: block;
  width: 300px;
  margin: 15px auto 25px;
`;

export const GoalsGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const GoalImageStyled = styled.img`
  display: block;
  width: 100%;
`;