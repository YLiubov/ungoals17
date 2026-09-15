import styled from "styled-components";

export const EducationListStyled = styled.section`
  margin-top: 30px;

  .educationListGrid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px 30px;
  }

  .educationListStatus {
    padding: 30px 0;
    text-align: center;
  }

  .educationListError {
    color: #c5192d;
  }

  @media (max-width: 800px) {
    .educationListGrid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 500px) {
    .educationListGrid {
      grid-template-columns: 1fr;
    }
  }
`;
