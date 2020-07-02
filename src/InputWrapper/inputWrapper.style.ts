import styled from "styled-components";
import Colors from "../Colors";

const InputStyles = styled.div`
  position: relative;
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    color: #353f41;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.38;

    &.invalid input,
    &.invalid textarea {
      border-color: ${Colors.destructive};
      background-color: ${Colors.destructiveDim};
    }
  }

  .input-border {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: solid 1px #cdcdcd;
    background-color: #ffffff;

    &:hover:not(.disabled) {
      border-color: #04d4bf;
      transition: border-color 0.2s ease;
    }

    &:focus-within {
      box-shadow: 0 0 0 2px rgba(4, 212, 191, 0.2);
      border-color: #04d4bf;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
  }

  input,
  textarea {
    background-color: transparent;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    font-weight: normal;
    color: #353f41;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    padding: 2px 16px;

    &.masked-input {
      font-family: monospace;
    }

    &.masked-input::placeholder {
      font-family: "Norms", sans-serif;
    }

    &.icon-padding {
      padding: 2px 16px 2px 54px;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #bfbfbf;
    }

    &:disabled {
      background-color: #ececec;
      cursor: not-allowed;
    }
  }

  input {
    height: 48px;
  }

  textarea {
    box-sizing: border-box;
    min-height: 70px;
    resize: vertical;
    width: 100%;
    padding: 16px;
  }

  .error-feedback {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.29;
    letter-spacing: normal;
    color: ${Colors.destructive};
    margin-top: 4px;
  }

  .optional {
    padding-left: 3px;
    font-size: 14px;
    line-height: 0.5;
    letter-spacing: normal;
    color: #7b7b7b;
  }

  .label {
    padding-top: 8px;
    padding-bottom: 10px;
    font-weight: 500;
    display: flex;
  }

  .icon-left {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #bfbfbf;
    line-height: normal;
    font-size: 24px;
    width: 54px;
    height: 54px;
    position: absolute;
    display: flex;
    left: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export default InputStyles;
