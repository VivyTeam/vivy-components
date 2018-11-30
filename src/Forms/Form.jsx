import React from "react";
import PropTypes from "prop-types";
import { ValidationContext } from "./Validation";

export default function Form({ children, select }) {
  return (
    <ValidationContext.Consumer>
      {({ onSubmit }) => (
        <form
          onChange={e => select(e.target.value)}
          onSubmit={e => onSubmit(e)}
        >
          {children}
        </form>
      )}
    </ValidationContext.Consumer>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  select: PropTypes.func
};

Form.defaultProps = {
  select: () => {}
};
