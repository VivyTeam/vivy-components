import styled, { css } from 'styled-components';

const baseButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  margin: 5px 5px;
  font-size: 18px;
  height: 40px;
  width: 176px;
  border-radius: 20px;
  font-size: 15px;
`;

const ButtonStyles = styled.div`
  .primary {
    ${baseButton} color: #fff;
    background-color: #04d4bf;
    border: 0;
    font-weight: 400;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #05e6c8;
      transition: background-color 0.2s ease;
    }

    &:focus {
      outline: none;
    }

    &:active {
      box-shadow: 0 0 4px 0 rgba(87, 87, 86, 0.5);
      background-color: #09cbb8;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #bfbfbf;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .outline {
    ${baseButton} background-color: #fff;
    border: solid 2px #00bfac;
    color: #00bfac;
    font-weight: 400;
    cursor: pointer;
    transition: color 0.2s ease, border-color 0.2s ease;

    &:hover {
      color: #05e6c8;
      border-color: #05e6c8;
      transition: color 0.2s ease, border-color 0.2s ease;
    }

    &:focus {
      outline: none;
    }

    &:active {
      color: #09cbb9;
      border-color: #09cbb8;
    }

    &:disabled {
      cursor: not-allowed;
      border-color: #bfbfbf;
      color: #898988;
    }
  }

  .danger {
    ${baseButton} color: #fff;
    background-color: #e94119;
    border: 0;
    font-weight: 400;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #ff4b20;
      transition: background-color 0.2s ease;
    }

    &:focus {
      outline: none;
    }

    &:active {
      box-shadow: 0 0 4px 0 rgba(87, 87, 86, 0.5);
      background-color: #d43c18;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #bfbfbf;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  @media (max-width: 600px) {
    .primary {
      margin: 5px 0;
    }

    .danger {
      margin: 5px 0;
    }
  }
`;

export default ButtonStyles;
