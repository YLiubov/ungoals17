import styled from "styled-components";

export const HeaderStyled = styled.div`
  .headerTopBar {
    width: 100%;
    height: 18px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  header {
    width: 88%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: 30px 0;
  }

  .headerLogo {
    display: block;
    width: 330px;
    max-width: 100%;
  }
`;
