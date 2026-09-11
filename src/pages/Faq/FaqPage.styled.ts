import styled from "styled-components";

export const FaqPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  article h2 {
    margin: 0 0 4px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
  }

  article p {
    margin: 0;
    font-size: 14px;
    line-height: 1.4;
  }
`;
