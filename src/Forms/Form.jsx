import React from "react";
import PropTypes from "prop-types";
import { ValidationContext } from "./Validation";

export default function Form({ children, select, action }) {
  const submit = (e, validation, submitAction) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    if (validation(e)) {
      submitAction();
    }
  };
  return (
    <ValidationContext.Consumer>
      {({ validation = () => true }) => (
        <form
          onChange={e => select(e.target.value)}
          onSubmit={e => submit(e, validation, action)}
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
  action: PropTypes.func
};

Form.defaultProps = {
  select: () => {},
  action: () => {}
};
