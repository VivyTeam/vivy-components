import React, { FC } from "react";
import Styles from "./inputWrapper.style";
import Icon from "../Icon/index";
import classNames from "../utils/classNames";

type InputWrapperProps = {
  id: string;
  label?: string;
  optional?: boolean;
  iconName?: string;
  error?: string;
  disabled?: boolean;
};

const InputWrapper: FC<InputWrapperProps> = ({
  children,
  id,
  label = "",
  optional = false,
  iconName = "",
  error = "",
  disabled,
}) => {
  const invalid = classNames(["invalid", error]);

  return (
    <Styles>
      <span className="label">
        {label}
        {optional ? <span className="optional">*optional</span> : null}
      </span>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label htmlFor={id} id={id} className={invalid}>
        {iconName ? (
          <div className="icon-left">
            <Icon name={iconName} />
          </div>
        ) : null}
        <div
          className={classNames(["input-border", true], ["disabled", disabled])}
        >
          {children}
        </div>
        {error ? <span className="error-feedback">{error}</span> : null}
      </label>
    </Styles>
  );
};

export default InputWrapper;
