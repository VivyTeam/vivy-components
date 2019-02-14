import styled, { css } from "styled-components";
import { SUCCESS, WARNING } from "./alertTypes";

export const AlertStyles = styled.div`
  border-radius: 8px;

  ${({ normal }) =>
    normal &&
    css`
      padding: 16px;
      i {
        font-size: 48px;
      }
    `}

  ${({ small }) =>
    small &&
    css`
      height: 44px;
      font-size: 14px;
      i {
        font-size: 24px;
        display: block;
        text-align: left;
        padding-left: 16px;
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
