import { css } from "styled-components";
import DefaultFont from "./DefaultFont";

// CSS Attributes which normally being inherited from html/body should
// aren't used in ShadowDom. It's encapsulation prevents a natural inheritance.
// All attributes which are also global in Web Components should be
// added to the Shadow Styles
const ShadowStylesFonts = css`
  input,
  textarea {
    ${DefaultFont}
  }
`;

export default ShadowStylesFonts;
