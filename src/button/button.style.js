import styled, { css } from 'styled-components';

const baseButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border-radius: 24px;
  font-size: 15px;
`;

const ButtonStyles = styled.div`
  .primary {
    ${baseButton} color: #fff;
    width: 244px;
    height: 48px;
    background-color: #04d4bf;
    border: 0;
    font-weight: 400;
    cursor: pointer;
    transition: box-shadow 0.2s ease, background-color 0.2s ease;

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
    width: 178px;
    height: 40px;
    background-color: #03d4bf;
    border: 0;
    font-weight: 400;
    cursor: pointer;
    transition: box-shadow 0.2s, background-color 0.2s ease;

    &:hover:enabled {
      background-color: #03d4bf;
      box-shadow: 0 4px 8px 0 rgba(0, 160, 144, 0.2);
      transition: box-shadow 0.2s ease, background-color 0.2s ease;
    }

    &:active:enabled {
      background-color: #00bfac;
      box-shadow: 0 2px 4px 0 rgba(0, 160, 144, 0.2);
      border: solid 2px #00bfac;
      transition: box-shadow 0.2s ease, background-color 0.2s ease;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #cdcdcd;
    }
  }

  .tertiary {
    ${baseButton} width: 178px;
    height: 40px;
    background-color: #fff;
    border: solid 2px #00bfac;
    color: #00bfac;
    font-weight: 400;
    cursor: pointer;
    transition: color 0.2s ease, background-color 0.2s ease;

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
