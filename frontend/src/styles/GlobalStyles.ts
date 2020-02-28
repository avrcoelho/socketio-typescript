import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#2ec8f7),
    to(#0a88f7)
  );
  background: linear-gradient(90deg, #2ec8f7, #0a88f7);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    width: 100%;
  }`;

export default GlobalStyles;
