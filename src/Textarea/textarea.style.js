import styled from "styled-components";
import { Colors } from "..";

const TextareaStyles = styled.div`
  label {
    color: #575756;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.3px;
    line-height: 2.5;
  }

  textarea {
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    color: #898988;
    width: 100%;
    min-height: 70px;
    max-height: 15em;
    background-color: #ffffff;
    border: solid 1px #cdcdcd;
    resize: vertical;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  textarea:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(4, 212, 191, 0.2);
    border-color: #04d4bf;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  textarea::placeholder {
    color: #bfbfbf;
  }

  .required {
    padding-left: 10px;
    color: ${Colors.destructive};
  }
`;

export default TextareaStyles;
