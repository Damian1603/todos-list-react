import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background-color: #d8d8d8;
  font-family: "Montserrat", sans-serif;
  max-width: 1000px;
  margin: auto;
}
`;