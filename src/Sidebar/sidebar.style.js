import styled, { css } from "styled-components";
import { hexToRGBA } from "../Colors";
import { Colors } from "..";

export const SidebarStyles = styled.div`
  background-color: ${Colors.textPrimary};
  line-height: 1.38;
  color: ${Colors.white};
  width: 224px;
  height: 100%;

  img,
  i {
    padding-left: 24px;
    padding-right: 24px;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

export const SidebarHeaderStyles = styled.div`
  height: 63px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${hexToRGBA(Colors.divider, 0.15)};

  img {
    width: 24px;
  }
`;

export const LinkStyles = styled.div`
  height: 48px;

  i {
    font-size: 24px;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${Colors.textSecondary};
    `}
`;

export const ActiveIndicator = styled.div`
  width: 6px;
  margin-right: -6px;
  height: 100%;

  ${({ active }) =>
    active &&
    css`
      background-color: ${Colors.affirmative};
    `}
`;
