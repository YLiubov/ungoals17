import styled from "styled-components";

export const ButtonStyled = styled.button`
  align-self: flex-start;
  box-sizing: border-box;
  height: 31px;
  padding: 0 22px;
  border: 0;
  border-radius: 3px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;
