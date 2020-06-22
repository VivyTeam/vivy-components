import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "..";

const GlobalFontSize = `1.6rem`;

const GlobalStyles = createGlobalStyle`
  html{
    font-size: 62.5%;
  }
  
  body {
    font-size: ${GlobalFontSize};
    color: ${Colors.textPrimary}; 
    margin: 0;
    padding: 0;
    min-height: 100%;
    overflow-x: hidden;
    min-width: 320px;
  }
`;

// CSS Attributes which normally being inherited from html/body should
// also be inserted here. ShadowDom encapsulation prevents a natural inheritance.
export const GlobalShadowStylesWrapper = styled.div`
  font-size: ${GlobalFontSize};
  color: ${Colors.textPrimary};
`;

export default GlobalStyles;
