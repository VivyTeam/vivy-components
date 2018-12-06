import React from "react";
import PropTypes from "prop-types";
import InputWrapper from "../InputWrapper";
import { ValidationContext } from "../Forms/Validation";
import classNames from "../utils/classNames";
import formData from "../utils/formData";

export default function Input({
  id,
  label,
  type,
  placeholder,
  name,
  iconName
}) {
  const padding = classNames(["icon-padding", iconName]);

  return (
    <ValidationContext.Consumer>
      {({ onBlur, onChange, errors: { [id]: error } }) => (
        <InputWrapper error={error} id={id} iconName={iconName} label={label}>
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={padding}
            onChange={e => {
              const { target } = e;
              onChange(formData(target.form), target.id);
            }}
            onBlur={e => {
              const { target } = e;
              onBlur(formData(target.form), target.id);
            }}
          />
        </InputWrapper>
      )}
    </ValidationContext.Consumer>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  iconName: PropTypes.string
};

Input.defaultProps = {
  type: "",
  name: "default",
  placeholder: "",
  label: "",
  iconName: ""
};
