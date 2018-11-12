import React from "react";
import PropTypes from "prop-types";

export default function Col({ children, col, offset, style }) {
  return (
    <div style={style} className={`col-${col} col-offset-${offset}`}>
      {children}
    </div>
  );
}

Col.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  col: PropTypes.number,
  offset: PropTypes.number
};

Col.defaultProps = {
  style: {},
  col: 12,
  offset: 0
};
