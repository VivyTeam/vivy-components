import React from "react";
import PropTypes from "prop-types";
import Styles from "./checkbox.style";
import { ValidationContext } from "../Forms/Validation";
import formData from "../utils/formData";

export default function Checkbox({ id, children, value, name, optional }) {
  return (
    <ValidationContext.Consumer>
      {({ onChange, errors: { [id]: error } }) => (
        <Styles>
          <input
            id={id}
            name={name}
            type="checkbox"
            value={value}
            onChange={e => onChange(formData(e.target.form), e.target.id)}
          />
          {/* eslint-disable-next-line */}
          <label id={id} htmlFor={id} />
          <div className="content">{children}</div>

          {optional ? <span className="optional">*optional</span> : null}
          {error ? <span className="error-feedback">{error}</span> : null}
        </Styles>
      )}
    </ValidationContext.Consumer>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  optional: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string
};

Checkbox.defaultProps = {
  optional: false,
  value: "",
  name: ""
};
