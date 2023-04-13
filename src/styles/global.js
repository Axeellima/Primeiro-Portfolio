import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --blue1: #205275;
    --blue2: #1a2a44;
    --blue3: #0c1f3d;
    --grey0: #2D2D2D;
    --grey1: #5b5b5b;
    --grey2: #D9D9D9;
    --grey3: #e5e4e2;
    --white: #FFF6F9;

    --font: 'Sofia Sans', sans-serif;
  }

  * {
     margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-weight: 300;
    scroll-behavior: smooth;
  }
  
  body,html,div {
    font-family: var(--font);
  }

  button {
    cursor: pointer;
  }

`
