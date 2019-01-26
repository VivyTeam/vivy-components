import { createGlobalStyle } from "styled-components";
import { primary } from "../Colors";

const GlobalStyles = createGlobalStyle`
  body {
    color: ${primary}; 
    margin: 0;
    padding: 0;
    background-color: #fff;    
    min-height: 100%;
    overflow-x: hidden;
    min-width: 320px;
  }
`;

export default GlobalStyles;
