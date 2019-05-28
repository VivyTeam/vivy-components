import React from "react";
import PropTypes from "prop-types";
import { ValidationContext } from "./Validation";
import formData from "../utils/formData";

export default function Form({ children, select, submit }) {
  const formSubmit = (e, validation) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const fields = formData(e.target.elements);

    if (!validation || !validation(fields)) {
      submit(fields, e);
    }
  };

  return (
    <ValidationContext.Consumer>
      {({ validate }) => (
        <form
          onChange={e => select(e.target.value)}
          onSubmit={e => formSubmit(e, validate)}
        >
          {children}
        </form>
      )}
    </ValidationContext.Consumer>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  select: PropTypes.func,
  submit: PropTypes.func
};

Form.defaultProps = {
  select: () => {},
  submit: () => {}
};
