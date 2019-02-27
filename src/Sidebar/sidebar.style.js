import styled, { css } from "styled-components";
import colors, { hexToRGBA } from "../Colors";

export const SidebarStyles = styled.div`
  background-color: ${colors.textPrimary};
  line-height: 1.38;
  color: ${colors.white};
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
  border-bottom: 1px solid ${hexToRGBA(colors.divider, 0.15)};

  img {
    width: 24px;
  }
`;

export const ItemStyles = styled.div`
  height: 48px;

  i {
    font-size: 24px;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${colors.textSecondary};
    `}
`;

export const ActiveIndicator = styled.div`
  width: 6px;
  margin-right: -6px;
  height: 100%;

  ${({ active }) =>
    active &&
    css`
      background-color: ${colors.brandAlternative};
    `}
`;
