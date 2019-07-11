import styled, { css } from "styled-components";
import { SUCCESS, WARNING } from "./alertTypes";

export const SharedAlertStyles = styled.div`
  border-radius: 8px;

  ${({ type }) =>
    type === SUCCESS &&
    css`
      background-color: #e8f5e5;
      i {
        color: #189f59;
      }
    `}

  ${({ type }) =>
    type === WARNING &&
    css`
      background-color: #fff1cb;
      i {
        color: #d97508;
      }
    `}
`;
