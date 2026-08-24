import styled from "styled-components";

export const ButtonStyled = styled.button`
  align-self: flex-start;
  padding: 10px 22px;
  border: 0;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;
