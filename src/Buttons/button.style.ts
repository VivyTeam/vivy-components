import styled, { css } from "styled-components";
import Colors from "../Colors";

export enum ButtonHeights {
  HEIGHT_TYPE_LG = "lg",
  HEIGHT_TYPE_SM = "sm",
  HEIGHT_TYPE_BASIC = "basic",
}

const baseStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  border-radius: 4px;
  font-family: "Norms", sans-serif;
  padding-top: 2px;
  line-height: 1em;
`;
const transitionBoxShadow = css`
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
`;
const transitionBackgroundColor = css`
  transition: color 0.2s ease, background-color 0.2s ease;
`;
const transitionBorderColor = css`
  transition: color 0.2s ease, border-color 0.2s ease;
`;

const ButtonStyles = styled.div<{ height: ButtonHeights }>`
  .component-child {
    ${baseStyles};
  }

  button:disabled,
  button:disabled .component-child {
    cursor: not-allowed !important;
  }

  button {
    padding: 0;
    border-radius: 4px;
    display: block;
    text-decoration: none;
    cursor: pointer;
  }

  a {
    font-family: system-ui;
    border-radius: 4px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
  }

  a:focus:active,
  button:focus:active {
    outline: 0;
  }

  .component-child {
    ${({ height }) => {
      if (height === ButtonHeights.HEIGHT_TYPE_LG) {
        return css`
          height: 56px;
        `;
      }
      if (height === ButtonHeights.HEIGHT_TYPE_SM) {
        return css`
          height: 32px;
        `;
      }
      return css`
        height: 40px;
      `;
    }}
  }

  .primary {
    ${transitionBoxShadow};
    width: 230px;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${Colors.white};
    background-color: #04d4bf;
    border: 0;

    i {
      font-size: 1.5em;
    }

    &:hover {
      ${transitionBoxShadow};
      background-color: ${Colors.textActive};
      box-shadow: 0 4px 8px 0 rgba(0, 160, 144, 0.4);
    }

    &:active {
      ${transitionBoxShadow};
      background-color: #28dbc9;
      box-shadow: 0 2px 4px 0 rgba(0, 160, 144, 0.2);
    }

    &:disabled {
      background-color: ${Colors.divider};
      box-shadow: none;
    }
  }

  .secondary {
    ${transitionBackgroundColor};
    width: 230px;
    font-size: 1.6rem;
    font-weight: 500;
    background-color: ${Colors.white};
    border: solid 1px ${Colors.divider};
    color: ${Colors.textPrimary};

    i {
      font-size: 1.4em;
    }

    &:hover {
      ${transitionBorderColor};
      color: ${Colors.primary};
      border-color: ${Colors.primary};
    }

    &:active {
      ${transitionBorderColor};
      color: ${Colors.primary};
      border-color: ${Colors.primary};
    }

    &:disabled {
      border-color: ${Colors.textInactive};
      color: ${Colors.textInactive};
      box-shadow: none;
    }
  }
`;

export default ButtonStyles;
