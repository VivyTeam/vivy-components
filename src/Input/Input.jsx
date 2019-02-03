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
  iconName,
  defaultValue,
  rel,
  validateOnChange,
  validateOnBlur
}) {
  const padding = classNames(["icon-padding", iconName]);

  return (
    <ValidationContext.Consumer>
      {({ onBlur, onChange, cleanField, errors: { [id]: error } }) => (
        <InputWrapper error={error} id={id} iconName={iconName} label={label}>
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={padding}
            ref={rel}
            onChange={
              validateOnChange
                ? e => onChange(formData(e.target.form || {}), e.target.id)
                : e => cleanField(e.target.id)
            }
            onBlur={
              validateOnBlur
                ? e => onBlur(formData(e.target.form || {}), e.target.id)
                : null
            }
            {...defaultValue && { defaultValue }}
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
  defaultValue: PropTypes.string,
  iconName: PropTypes.string,
  validateOnChange: PropTypes.bool,
  validateOnBlur: PropTypes.bool,
  rel: PropTypes.shape({})
};

Input.defaultProps = {
  type: "",
  name: "default",
  placeholder: "",
  label: "",
  defaultValue: "",
  iconName: "",
  validateOnChange: true,
  validateOnBlur: true,
  rel: React.createRef()
};
