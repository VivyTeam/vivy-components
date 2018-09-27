import styled, { css } from "styled-components";

const baseButton = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.125em;
  border-radius: 24px;
  padding-left: 17px;
  padding-right: 17px;
  cursor: pointer;
`;
const transitionBoxShadow = css`
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
`;
const transitionBackgroundColor = css`
  transition: color 0.2s ease, background-color 0.2s ease;
`;

const ButtonStyles = styled.div`
  a {
    text-decoration: none;
  }

  button {
    outline: none;
  }

  .primary {
    ${transitionBoxShadow};
    ${baseButton};
    min-width: 230px;
    color: #fff;
    height: 48px;
    background-color: #04d4bf;
    border: 0;

    i {
      font-size: 1.5em;
    }

    &:hover:enabled {
      ${transitionBoxShadow};
      background-color: #03d4bf;
      box-shadow: 0 4px 8px 0 rgba(0, 160, 144, 0.4);
    }

    &:active:enabled {
      ${transitionBoxShadow};
      background-color: #00bfac;
      box-shadow: 0 2px 4px 0 rgba(0, 160, 144, 0.2);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #cdcdcd;
    }
  }

  .secondary {
    ${baseButton};
    ${transitionBoxShadow};
    color: #fff;
    min-width: 200px;
    height: 40px;
    background-color: #03d4bf;
    border: 0;
    font-size: 0.938em;
    cursor: pointer;

    i {
      font-size: 1.4em;
    }

    &:hover:enabled {
      ${transitionBoxShadow};
      background-color: #03d4bf;
      box-shadow: 0 4px 8px 0 rgba(0, 160, 144, 0.2);
    }

    &:active:enabled {
      ${transitionBoxShadow};
      background-color: #00bfac;
      box-shadow: 0 2px 4px 0 rgba(0, 160, 144, 0.2);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #cdcdcd;
    }
  }

  .tertiary {
    ${baseButton};
    ${transitionBackgroundColor};
    min-width: 200px;
    height: 40px;
    background-color: #fff;
    border: solid 2px #00bfac;
    color: #00bfac;
    font-size: 0.938em;
    cursor: pointer;
    i {
      font-size: 1.4em;
    }

    &:hover:enabled {
      ${transitionBackgroundColor};
      color: #fff;
      background-color: #03d4bf;
      border-color: #03d4bf;
    }

    &:active:enabled {
      ${transitionBackgroundColor};
      color: #fff;
      background-color: #00bfac;
      border: solid 2px #00bfac;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #cdcdcd;
      box-shadow: none;
    }
  }

  .quarternary {
    ${baseButton};
    ${transitionBackgroundColor};
    min-width: 200px;
    height: 40px;
    background-color: #fff;
    border: solid 2px #898988;
    color: #898988;
    font-size: 15px;
    cursor: pointer;

    i {
      font-size: 1.4em;
    }

    &:hover:enabled {
      ${transitionBackgroundColor};
      color: #fff;
      background-color: #03d4bf;
      border-color: #03d4bf;
    }

    &:active:enabled {
      ${transitionBackgroundColor};
      color: #fff;
      background-color: #00bfac;
      border: solid 2px #00bfac;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #cdcdcd;
      box-shadow: none;
    }
  }
`;

export default ButtonStyles;
