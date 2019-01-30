import React from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-maskedinput";
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
  rel,
  mask,
  placeholderChar
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
          <MaskedInput
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={padding}
            onChange={e => onChange(formData(e.target.form || {}), e.target.id)}
            onBlur={e => onBlur(formData(e.target.form || {}), e.target.id)}
            ref={rel}
            mask={mask}
            placeholderChar={placeholderChar}
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
  iconName: PropTypes.string,
  rel: PropTypes.shape({}),
  mask: PropTypes.string,
  placeholderChar: PropTypes.string
};

Input.defaultProps = {
  type: "",
  name: "default",
  placeholder: "",
  label: "",
  iconName: "",
  rel: React.createRef(),
  mask: "",
  placeholderChar: ""
};
