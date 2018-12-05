import React from "react";
import PropTypes from "prop-types";
import { ValidationContext } from "./Validation";

export default function Form({ children, select, submit }) {
  const formSubmit = (e, validation) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (!validation || !validation(e)) {
      submit();
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
