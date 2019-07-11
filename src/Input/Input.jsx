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
  onChange,
  validateOnChange,
  onBlur,
  validateOnBlur
}) {
  const padding = classNames(["icon-padding", iconName]);

  return (
    <ValidationContext.Consumer>
      {({ validate, cleanField, errors: { [id]: error } }) => (
        <InputWrapper error={error} id={id} iconName={iconName} label={label}>
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={padding}
            ref={rel}
            onChange={e => {
              if (validateOnChange) {
                validate(formData(e.target.form || {}), e.target.id);
              } else {
                cleanField(e.target.id);
              }
              onChange(e);
            }}
            onBlur={e => {
              if (validateOnBlur) {
                validate(formData(e.target.form || {}), e.target.id);
              }
              onBlur(e);
            }}
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
  onChange: PropTypes.func,
  validateOnChange: PropTypes.bool,
  onBlur: PropTypes.func,
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
  onChange: () => {},
  validateOnChange: true,
  onBlur: () => {},
  validateOnBlur: true,
  rel: React.createRef()
};
