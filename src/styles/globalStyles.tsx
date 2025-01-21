import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.textPrimary};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  button {
    font-family: ${({ theme }) => theme.fontFamily.primary};
  }
`;

export default GlobalStyles;
