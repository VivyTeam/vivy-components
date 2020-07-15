import styled from "styled-components";
import ReactSelect from "react-select";
import Colors from "../Colors";

const OverrideSelectStyles = styled(ReactSelect)`
  .react-select__indicators {
    display: unset;
  }

  .react-select__value-container {
    padding-top: 0;
    padding-bottom: 0;
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
    height: 3.2rem;
    min-height: 3.2rem;
  }

  .react-select__value-container {
    margin-top: 0.2rem;
  }

  .react-select__input {
    padding-bottom: 0.2px;
  }

  .react-select__indicators > div,
  .react-select__single-value > div {
    margin-top: 0.1rem;
  }

  .react-select__indicators > div {
    padding: 0.4rem;
  }

  .react-select__control {
    border-color: ${Colors.divider};
  }

  .react-select__placeholder {
    color: ${Colors.textInactive};
  }
`;

export { StyledSelect };
