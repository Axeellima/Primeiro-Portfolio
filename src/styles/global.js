import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-primary: #2E617B;
    --grey-0: #2D2D2D;
    --grey-1: #5b5b5b;
    --grey-2: #D9D9D9;
    --white: #FFF6F9;
    --color-hover: #204A5F;
    --sucess: #3FE864;
    --fail: #E83F5B;

    --font: 'Sofia Sans', sans-serif;
  }

  * {
     margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  
  body,html {
    width: 100vw;
    height: 100vh;
    font-family: var(--font);
  }

  button {
    cursor: pointer;
  }

`;
