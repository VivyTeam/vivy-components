import React, { FC } from "react";
import { StyledSelect } from "./select.style";

type Option = { value: string; label: string };

type SelectType = {
  onChange?: (option: Option) => void;
  options?: Array<Option>;
  menuPosition?: "fixed" | "absolute";
};

const Select: FC<SelectType> = ({
  onChange = () => {},
  options = [],
  menuPosition = "fixed",
  ...rest
}) => {
  return (
    <StyledSelect
      classNamePrefix="react-select"
      onChange={onChange}
      options={options}
      menuPosition={menuPosition}
      {...rest}
    />
  );
};

export default Select;
