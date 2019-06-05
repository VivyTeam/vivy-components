import styled from "styled-components";
import ReactSelect from "react-select";
import { Colors } from "../index";

const OverrideSelectStyles = styled(ReactSelect)`
  .react-select__indicators {
    display: unset;
  }

  .react-select__value-container {
    padding-top: 0px;
    padding-bottom: 0;
    padding-top: 0px;
  }

  .react-select__value-container,
  .react-select__indicators {
    display: unset;
  }

  .react-select__indicator-separator {
    display: none;
  }
`;

const StyledSelect = styled(OverrideSelectStyles)`
  .react-select-container,
  .react-select__control,
  .react-select__indicators {
    height: 32px;
    min-height: 32px;
  }

  .react-select__value-container {
    margin-top: 2px;
  }

  .react-select__input {
    padding-bottom: 2px;
  }

  .react-select__indicators > div,
  .react-select__single-value > div {
    margin-top: 1px;
  }

  .react-select__indicators > div {
    padding: 4px;
  }

  .react-select__control {
    border-color: ${Colors.divider};
  }

  .react-select__placeholder {
    color: ${Colors.textInactive};
  }
`;

export { StyledSelect };
