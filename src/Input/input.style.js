import styled from "styled-components";

const InputStyles = styled.div`
  label {
    color: #353f41;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.5;
  }
  input {
    width: 100%;
    height: 48px;
    border-radius: 2px;
    background-color: #ffffff;
    border: solid 1px #cdcdcd;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    color: #353f41;
    padding: 2px 16px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  input:focus {
    outline: none;
    border-color: #00bfac;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  input::placeholder {
    color: #cdcdcd;
  }
  #required {
    font-size: 0.9em;
    padding-left: 10px;
    color: #e94119;
  }
`;

export default InputStyles;
