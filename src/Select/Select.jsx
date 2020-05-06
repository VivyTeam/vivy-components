import React from "react";
import PropTypes from "prop-types";
import { StyledSelect } from "./select.style";

export default function Select({ onChange, options, menuPosition, ...rest }) {
  return (
    <StyledSelect
      classNamePrefix="react-select"
      onChange={onChange}
      options={options}
      menuPosition={menuPosition}
      {...rest}
    />
  );
}

Select.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  menuPosition: PropTypes.oneOf(["fixed", "absolute"]),
};

Select.defaultProps = {
  onChange: () => {},
  options: [],
  menuPosition: "fixed",
};
