import styled from "styled-components";

type SubjectCardStyledProps = {
  $backgroundColor: string;
};

export const SubjectGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px 30px;
  margin-top: 30px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const SubjectCardStyled =
  styled.div<SubjectCardStyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1.83 / 1;

    background-color: ${({ $backgroundColor }) =>
      $backgroundColor};

    color: #ffffff;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(22px, 2vw, 30px);
    font-weight: 600;
    text-transform: uppercase;
  `;