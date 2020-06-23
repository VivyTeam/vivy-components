import styled, { css } from "styled-components";
import { ShadowStylesGlobal } from "../GlobalStyles";
import ShadowStylesFonts from "../Fonts/ShadowStyleFonts";

const ShadowStylesWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${ShadowStylesGlobal}
  ${ShadowStylesFonts}
`;

export default ShadowStylesWrapper;
