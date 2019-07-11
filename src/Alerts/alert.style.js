import styled, { css } from "styled-components";
import { SharedAlertStyles } from "./shared.style";

export const AlertStyles = styled(SharedAlertStyles)`
  line-height: 1.38;
  padding: 16px;
  i {
    font-size: 48px;
  }
`;

export const TextStyles = styled.div`
  ${({ hasIcon }) =>
    hasIcon &&
    css`
      margin-top: 12px;
    `}
`;
