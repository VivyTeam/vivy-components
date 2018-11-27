import React from "react";
import PropTypes from "prop-types";

export default function Form({ children, select, submit }) {
  return (
    <form onChange={e => select(e.target.value)} onSubmit={e => submit(e)}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.func.isRequired,
  select: PropTypes.func
};

Form.defaultProps = {
  select: () => {}
};
