import styled from "styled-components";

export const ContentWrapperStyled = styled.section`
  .contentWrapperTitleBand {
    padding: 28px 0;
    background-color: ${({ theme }) => theme.colors.secondary};

    h1 { margin: 0; }
  }

  .contentWrapperContent { padding: 30px 0 50px; }
`;
