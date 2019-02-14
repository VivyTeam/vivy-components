import styled, { css } from "styled-components";
import { SUCCESS, WARNING } from "./alertTypes";

export const AlertStyles = styled.div`
  ${({ normal }) =>
    normal &&
    css`
      padding: 16px;
      border-radius: 8px;
      i {
        font-size: 48px;
      }
    `}

  ${({ small }) =>
    small &&
    css`
      height: 44px;
      border-radius: 8px;
      font-size: 14px;
      i {
        font-size: 24px;
      }
    `}

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

export const ContentStyles = styled.div`
  margin-top: 12px;
`;
