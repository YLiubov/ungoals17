import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.h1};
    line-height: 1;
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.h2};
    line-height: 1;
    color: ${({ theme }) => theme.colors.text};
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text} ;
    text-decoration: none;
  }

  .reset {
    margin: 0;
    padding: 0;
  }
`;