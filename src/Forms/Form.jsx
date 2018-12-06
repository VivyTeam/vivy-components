import React from "react";
import PropTypes from "prop-types";
import { ValidationContext } from "./Validation";

export default function Form({ children, select, submit }) {
  const fieldValue = target => {
    const { type, checked, value, id } = target;
    switch (type) {
      case "checkbox":
        return { [id]: checked };
      case "button":
      case "submit":
      case "reset":
        return {};
      default:
        return { [id]: value };
    }
  };

  const formSubmit = (e, validation) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    let formData = {};

    Array.from(e.target.elements).forEach(element => {
      formData = { ...formData, ...fieldValue(element) };
    });

    if (!validation || !validation(formData)) {
      submit(formData, e);
    }
  };

  return (
    <ValidationContext.Consumer>
      {({ validation }) => (
        <form
          onChange={e => select(e.target.value)}
          onSubmit={e => formSubmit(e, validation)}
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
