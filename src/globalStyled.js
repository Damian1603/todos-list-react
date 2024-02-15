import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

  html {
  box-sizing: border-box;
  }

  *, ::after, ::before {
  box-sizing: inherit;
  }

  body {
  background-color: ${({ theme }) => theme.colors.background};
  font-family: "Montserrat", sans-serif;
  max-width: 1000px;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
  margin:auto;
  }
  }
  `;
