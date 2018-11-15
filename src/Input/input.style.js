import styled from "styled-components";
import { error, errorBackground } from "../Colors";

const InputStyles = styled.div`
  width: 100%;

  label {
    position: relative;
    display: flex;
    flex-direction: column;
    color: #353f41;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.38;
  }

  input {
    height: 48px;
    border-radius: 2px;
    background-color: #ffffff;
    border: solid 1px #cdcdcd;
    font-size: 18px;
    font-weight: normal;
    color: #353f41;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &.default-padding {
      padding: 2px 16px;
    }

    &.icon-padding {
      padding: 2px 16px 2px 54px;
    }

    &:hover {
      border-color: #04d4bf;
      transition: border-color 0.2s ease;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(4, 212, 191, 0.2);
      border-color: #04d4bf;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    &::placeholder {
      color: #bfbfbf;
    }
  }

  .invalid {
    border-color: ${error};
    background-color: ${errorBackground};
  }

  .error-feedback {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.29;
    letter-spacing: normal;
    color: ${error};
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
    display: flex;
  }

  .icon-left {
    font-size: 30px;
    width: 54px;
    height: 54px;
    display: flex;
    justify-content: center;
    position: absolute;
    display: flex;
    align-items: center;
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
