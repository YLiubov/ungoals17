import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.navText};

  ul {
    display: flex;
    align-items: center;
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    text-transform: uppercase;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover,
    &:focus-visible,
    &.active {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 900px) {
    ul {
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 10px 18px;
    }
  }
`;
