import styled from "styled-components";

export const FaqListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FaqItemStyled = styled.article``;

export const FaqQuestionStyled = styled.h2`
  margin: 0 0 4px;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
`;

export const FaqAnswerStyled = styled.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.4;
`;