import React from "react";
import PropTypes from "prop-types";
import InputSheath from "../InputSheath";

export default function Input({
  id,
  type,
  placeholder,
  name,
  iconName,
  errors
}) {
  const padding = iconName ? "icon-padding" : "";
  const invalid = id in errors ? "invalid" : "";

  return (
    <InputSheath id={id} iconName={iconName} errors={errors}>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`${padding} ${invalid}`}
      />
    </InputSheath>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  iconName: PropTypes.string,
  errors: PropTypes.shape({
    inputId: PropTypes.arrayOf({
      message: PropTypes.string,
      field: PropTypes.string
    })
  })
};

Input.defaultProps = {
  type: "",
  name: "default",
  placeholder: "",
  iconName: "",
  errors: {}
};
