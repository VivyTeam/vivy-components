import styled from "styled-components";
import { Colors } from "../index";

const OverrideSelectStyles = styled.div`
  .react-select-container,
  .react-select__control,
  .react-select__indicators {
    height: 32px;
    min-height: 32px;
  }

  .react-select__indicators {
    display: unset;
  }

  .react-select__value-container {
    padding-top: 0px;
    padding-bottom: 0;
    padding-top: 0px;
    margin-top: 2px;
  }

  .react-select__input {
    padding-bottom: 2px;
  }

  .react-select__value-container,
  .react-select__indicators {
    display: unset;
  }

  .react-select__indicators > div,
  .react-select__single-value > div {
    margin-top: 1px;
  }

  .react-select__indicators > div {
    padding: 4px;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__control {
    border-color: ${Colors.divider};
  }
  .react-select__placeholder {
    color: ${Colors.textInactive};
  }
`;

const SelectStyles = styled(OverrideSelectStyles)`
  margin-left: 12px;
`;

export { SelectStyles };
