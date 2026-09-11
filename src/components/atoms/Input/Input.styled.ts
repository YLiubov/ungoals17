import styled from "styled-components";

export const InputStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 31px;
  padding: 0 15px;
  border: 1px solid #b8b8b8;
  border-radius: 3px;
  font: inherit;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;
