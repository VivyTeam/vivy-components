import React from "react";
import PropTypes from "prop-types";
import InputSheath from "../InputSheath";

export default function Input({
  id,
  label,
  type,
  placeholder,
  name,
  iconName,
  onBlur,
  onChange,
  error
}) {
  const padding = iconName ? "icon-padding" : "";

  return (
    <InputSheath id={id} iconName={iconName} error={error} label={label}>
      <input
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={padding}
      />
    </InputSheath>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  iconName: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.shape({})
};

Input.defaultProps = {
  type: "",
  name: "default",
  placeholder: "",
  label: "",
  iconName: "",
  onChange: () => {},
  onBlur: () => {},
  error: {}
};
