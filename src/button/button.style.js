import styled, { css } from 'styled-components';

const baseButton = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.125em;
  border-radius: 24px;
`;

const ButtonStyles = styled.div`
  .primary {
    ${baseButton} color: #fff;
    width: 212px;
    height: 48px;
    background-color: #04d4bf;
    border: 0;
    font-weight: 400;
    cursor: pointer;
    transition: box-shadow 0.2s ease, background-color 0.2s ease;

    i {
      font-size: 1.5em;
    }

    &:hover:enabled {
      background-color: #03d4bf;
      box-shadow: 0 4px 8px 0 rgba(0, 160, 144, 0.4);
      transition: box-shadow 0.2s ease, background-color 0.2s ease;
    }

    &:active:enabled {
      background-color: #00bfac;
      box-shadow: 0 2px 4px 0 rgba(0, 160, 144, 0.2);
      transition: box-shadow 0.2s ease, background-color 0.2s ease;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #cdcdcd;
    }
  }

  .secondary {
    ${baseButton} color: #fff;
    width: 166px;
    height: 40px;
    background-color: #03d4bf;
    border: 0;
    font-weight: 400;
    font-size: 0.938em;
    cursor: pointer;
    transition: box-shadow 0.2s, background-color 0.2s ease;

    i {
      font-size: 1.4em;
    }

    &:hover:enabled {
      background-color: #03d4bf;
      box-shadow: 0 4px 8px 0 rgba(0, 160, 144, 0.2);
      transition: box-shadow 0.2s ease, background-color 0.2s ease;
    }

    &:active:enabled {
      background-color: #00bfac;
      box-shadow: 0 2px 4px 0 rgba(0, 160, 144, 0.2);
      transition: box-shadow 0.2s ease, background-color 0.2s ease;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #cdcdcd;
    }
  }

  .tertiary {
    ${baseButton} width: 166px;
    height: 40px;
    background-color: #fff;
    border: solid 2px #00bfac;
    color: #00bfac;
    font-weight: 400;
    font-size: 0.938em;
    cursor: pointer;
    transition: color 0.2s ease, background-color 0.2s ease;

    i {
      font-size: 1.4em;
    }

    &:hover:enabled {
      color: #fff;
      background-color: #03d4bf;
      border-color: #03d4bf;
      transition: color 0.2s ease, background-color 0.2s ease;
    }

    &:active:enabled {
      color: #fff;
      background-color: #00bfac;
      border: solid 2px #00bfac;
      transition: color 0.2s ease, background-color 0.2s ease;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #cdcdcd;
      box-shadow: none;
    }
  }

  .quarternary {
    ${baseButton} width: 178px;
    height: 40px;
    background-color: #fff;
    border: solid 2px #898988;
    color: #898988;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s ease, background-color 0.2s ease;

    i {
      font-size: 1.4em;
    }

    &:hover:enabled {
      color: #fff;
      background-color: #03d4bf;
      border-color: #03d4bf;
      transition: color 0.2s ease, background-color 0.2s ease;
    }

    &:active:enabled {
      color: #fff;
      background-color: #00bfac;
      border: solid 2px #00bfac;
      transition: color 0.2s ease, background-color 0.2s ease;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #cdcdcd;
      box-shadow: none;
    }
  }
`;

export default ButtonStyles;
