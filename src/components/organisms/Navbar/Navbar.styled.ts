import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.navText};
`;

export const NavListStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 10px 18px;
  }
`;

export const NavItemStyled = styled.li`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 600;
  text-transform: uppercase;
`;

export const NavLinkStyled = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible,
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
