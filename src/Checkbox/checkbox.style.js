import styled from "styled-components";
import { error} from "../Colors";
import { Colors } from '../index.js'
import mapping from "../../public/fonts/vivy-icons/iconMapping.json";

console.log(Colors)
const checkboxEmpty = mapping["icon-checkbox-empty"];
const checkboxFilled = mapping["icon-checkbox-filled"];

const CheckboxStyle = styled.div`
  display: flex;
  align-items: center;

  label {
    padding: 0;
    font-size: 24px;
    font-weight: normal;
    line-height: 1.38;
    letter-spacing: normal;
    color: #c9c9c9;
    margin-right: 16px;
    cursor: pointer;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label:after {
    font-family: "vivy-icons";
    content: "\\${checkboxEmpty}";
  }

  input[type="checkbox"]:checked + label:after {
    font-family: "vivy-icons";
    content: "\\${checkboxFilled}";
    color: ${Colors.brandAlternative};
  }

  .content {
    font-size: 16px;
    line-height: 1.38;
    letter-spacing: normal;
  }

  .optional {
    font-size: 12px;
    font-weight: normal;
    letter-spacing: normal;
    color: #7b7b7b;
    padding-left: 4px;
    padding-bottom: 16px;
  }

  .error-feedback {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.29;
    letter-spacing: normal;
    color: ${error};
    padding-left: 3px;
    padding-bottom: 14px;
  }
`;

export default CheckboxStyle;
