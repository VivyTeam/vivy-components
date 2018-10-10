import styled from "styled-components";

const InputStyles = styled.div`
  label {
    color: #575756;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.3px;
    line-height: 2.5;
  }

  input {
    width: 100%;
    height: 48px;
    border-radius: 2px;
    background-color: #ffffff;
    border: solid 1px #cdcdcd;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    color: #898988;
    padding-left: 16px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

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

  #required {
    font-size: 0.9em;
    padding-left: 10px;
    color: #e94119;
  }
`;

export default InputStyles;
