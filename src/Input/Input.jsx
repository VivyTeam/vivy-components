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
  ...rest
}) {
  const padding = classNames(["icon-padding", iconName]);

  return (
    <ValidationContext.Consumer>
      {({
        onBlur = () => {},
        onChange = () => {},
        errors: { [id]: error }
      }) => (
        <InputWrapper error={error} id={id} iconName={iconName} label={label}>
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={padding}
            onChange={e => onChange(formData(e.target.form || {}), e.target.id)}
            onBlur={e => onBlur(formData(e.target.form || {}), e.target.id)}
            ref={rel}
            {...defaultValue && { defaultValue }}
            {...rest}
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
  rel: PropTypes.shape({})
};

Input.defaultProps = {
  type: "",
  name: "default",
  placeholder: "",
  label: "",
  defaultValue: "",
  iconName: "",
  rel: React.createRef()
};
