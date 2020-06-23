import styled from "styled-components";
import Colors from "../Colors";

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
    color: #353f41;
    padding: 0px 16px;
    margin: 16px 0px -6px 0px;
    width: 100%;
    min-height: 70px;
    max-height: 15em;
    background-color: #ffffff;
    border: none;
    resize: vertical;
    box-sizing: border-box;
  }

  textarea:focus {
    outline: none;
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
