import React from "react";
import ReactSelect from "react-select";
import PropTypes from "prop-types";
import { SelectStyles } from "./select.style";

export default function Select({ onChange, options, menuPosition, ...rest }) {
  return (
    <SelectStyles>
      <ReactSelect
        classNamePrefix="react-select"
        onChange={onChange}
        options={options}
        menuPosition={menuPosition}
        {...rest}
      />
    </SelectStyles>
  );
}

Select.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  menuPosition: PropTypes.oneOf(["fixed", "absolute"])
};

Select.defaultProps = {
  onChange: () => {},
  options: [],
  menuPosition: "fixed"
};
