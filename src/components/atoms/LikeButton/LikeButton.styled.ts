import styled from "styled-components";

export const LikeButtonStyled = styled.button`
  width: 64px;
  height: 64px;
  padding: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  cursor: pointer;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
