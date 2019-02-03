import React from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import InputWrapper from "../InputWrapper";
import { ValidationContext } from "../Forms/Validation";
import classNames from "../utils/classNames";
import formData from "../utils/formData";

export default function InputMasked({
  id,
  label,
  type,
  placeholder,
  name,
  iconName,
  defaultValue,
  rel,
  mask,
  maskChar,
  validateOnChange,
  validateOnBlur
}) {
  const basic = classNames(["masked-input", true], ["icon-padding", iconName]);

  return (
    <ValidationContext.Consumer>
      {({ onBlur, onChange, cleanField, errors: { [id]: error } }) => (
        <InputWrapper error={error} id={id} iconName={iconName} label={label}>
          <InputMask
            mask={mask}
            maskChar={maskChar}
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
          >
            {inherited => (
              <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                className={basic}
                ref={rel}
                {...inherited}
              />
            )}
          </InputMask>
        </InputWrapper>
      )}
    </ValidationContext.Consumer>
  );
}

InputMasked.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  iconName: PropTypes.string,
  mask: PropTypes.string,
  maskChar: PropTypes.string,
  validateOnChange: PropTypes.bool,
  validateOnBlur: PropTypes.bool,
  rel: PropTypes.shape({})
};

InputMasked.defaultProps = {
  type: "",
  name: "default",
  placeholder: "",
  label: "",
  defaultValue: "",
  iconName: "",
  mask: "",
  maskChar: "",
  validateOnChange: true,
  validateOnBlur: true,
  rel: React.createRef()
};
