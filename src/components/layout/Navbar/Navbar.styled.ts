import styled from "styled-components";

// служебный prop для styling
type NavbarStyledProps = {
  $color?: string;
};

// Создай мне React-компонент NavbarStyled, который в HTML будет <nav>.
export const NavbarStyled = styled.nav<NavbarStyledProps>`
  display: flex;
  align-items: center;

  color: ${({ $color }) => $color || "#222222"};
`;

export const NavListStyled = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;
    
    margin: 0;
    padding: 0;

    list-style: none;
`;

export const NavItemStyled = styled.li`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    color: #2bbbde;
  }
`;
