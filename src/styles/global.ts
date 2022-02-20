import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --moderate-violet: hsl(263, 55%, 52%);
    --very-dark-grayish-blue: hsl(217, 19%, 35%);
    --very-dark-blackish-blue: hsl(219, 29%, 14%);
    --white: hsl(0, 0%, 100%);

    --light-gray: hsl(0, 0%, 81%);
    --light-grayish-blue: hsl(210, 46%, 95%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
  }

  body {
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    font-size: 13px;
    background: #fff;
  }

  body, input, textarea, button {
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 400;
  }

  input {
    outline: none;
  }

  ol, ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: transparent;
  }
`;