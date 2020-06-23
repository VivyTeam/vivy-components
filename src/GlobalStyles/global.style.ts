import { createGlobalStyle, css } from "styled-components";
import { Colors } from "..";

// CSS Attributes which normally being inherited from html/body should
// aren't used in ShadowDom. It's encapsulation prevents a natural inheritance.
// All attributes which are also global in Web Components should be
// added to the Shadow Styles
export const ShadowStylesGlobal = css`
  font-size: 1.6rem;
  color: ${Colors.textPrimary};
`;

const GlobalStyles = createGlobalStyle`
  html{
    font-size: 62.5%;
  }
  
  body {
    ${ShadowStylesGlobal}
    margin: 0;
    padding: 0;
    min-height: 100%;
    overflow-x: hidden;
    min-width: 320px;
  }
`;

export default GlobalStyles;
