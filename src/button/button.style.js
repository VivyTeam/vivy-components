import styled, { css } from "styled-components";

const baseStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 24px;
  cursor: pointer;
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

const ButtonStyles = styled.div`
  .component-child {
    ${baseStyles};
  }

  button {
    padding: 0;
    border-radius: 24px;
    display: block;
    text-decoration: none;
    outline: none;
  }

  a {
    font-family: system-ui;
    border-radius: 24px;
    display: block;
    text-decoration: none;
  }

  .primary .component-child {
    height: 46px;
  }

  .primary {
    ${transitionBoxShadow};
    min-width: 230px;
    font-size: 1.125em;
    color: #fff;
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

  .secondary .component-child {
    height: 38px;
  }

  .secondary {
    ${transitionBoxShadow};
    min-width: 178px;
    font-size: 0.938em;
    color: #fff;
    background-color: #03d4bf;
    border: 0;

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

  .tertiary .component-child {
    height: 34px;
  }
  button.tertiary.component-child {
    height: 36px;
  }

  .tertiary {
    ${transitionBackgroundColor};
    min-width: 178px;
    font-size: 0.938em;
    background-color: #fff;
    border: solid 2px #00bfac;
    color: #00bfac;

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

  .quarternary .component-child {
    height: 34px;
  }
  button.quarternary.component-child {
    height: 36px;
  }

  .quarternary {
    ${transitionBackgroundColor};
    min-width: 178px;
    font-size: 15px;
    background-color: #fff;
    border: solid 2px #898988;
    color: #898988;

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
