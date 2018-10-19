import styled, { css } from "styled-components";

const baseStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  border-radius: 24px;
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

  button:disabled,
  button:disabled .component-child {
    cursor: not-allowed !important;
  }

  button {
    padding: 0;
    border-radius: 24px;
    display: block;
    text-decoration: none;
    outline: none;
    cursor: pointer;
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
    font-size: 1em;
    font-weight: 500;
    color: #fff;
    background-color: #04d4bf;
    border: 0;

    i {
      font-size: 1.5em;
    }

    &:hover {
      ${transitionBoxShadow};
      background-color: #03d4bf;
      box-shadow: 0 4px 8px 0 rgba(0, 160, 144, 0.4);
    }

    &:active {
      ${transitionBoxShadow};
      background-color: #00bfac;
      box-shadow: 0 2px 4px 0 rgba(0, 160, 144, 0.2);
    }

    &:disabled {
      opacity: 0.4;
      box-shadow: none;
    }
  }

  .secondary .component-child {
    height: 38px;
  }

  .secondary {
    ${transitionBoxShadow};
    min-width: 178px;
    font-size: 1em;
    font-weight: 500;
    color: #fff;
    background-color: #03d4bf;
    border: 0;

    i {
      font-size: 1.4em;
    }

    &:hover {
      ${transitionBoxShadow};
      background-color: #03d4bf;
      box-shadow: 0 4px 8px 0 rgba(0, 160, 144, 0.2);
    }

    &:active {
      ${transitionBoxShadow};
      background-color: #00bfac;
      box-shadow: 0 2px 4px 0 rgba(0, 160, 144, 0.2);
    }

    &:disabled {
      opacity: 0.4;
      box-shadow: none;
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
    font-size: 1em;
    font-weight: 500;
    background-color: #fff;
    border: solid 2px #00bfac;
    color: #00bfac;

    i {
      font-size: 1.4em;
    }

    &:hover {
      ${transitionBackgroundColor};
      color: #fff;
      background-color: #03d4bf;
      border-color: #03d4bf;
    }

    &:active {
      ${transitionBackgroundColor};
      color: #fff;
      background-color: #00bfac;
      border: solid 2px #00bfac;
    }

    &:disabled {
      background-color: #cdcdcd;
      box-shadow: none;
    }
  }

  .quaternary .component-child {
    height: 34px;
  }
  button.quaternary.component-child {
    height: 36px;
  }

  .quaternary {
    ${transitionBackgroundColor};
    min-width: 178px;
    font-size: 1em;
    font-weight: 500;
    background-color: #fff;
    border: solid 2px #898988;
    color: #898988;

    i {
      font-size: 1.4em;
    }

    &:hover {
      ${transitionBackgroundColor};
      color: #fff;
      background-color: #03d4bf;
      border-color: #03d4bf;
    }

    &:active {
      ${transitionBackgroundColor};
      color: #fff;
      background-color: #00bfac;
      border: solid 2px #00bfac;
    }

    &:disabled {
      background-color: #cdcdcd;
      box-shadow: none;
    }
  }
`;

export default ButtonStyles;
