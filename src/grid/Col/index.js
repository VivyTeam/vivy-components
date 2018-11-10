import React from "react";
import PropTypes from "prop-types";

export default function Col({ children, col, offset, style }) {
  const classCol = col && `col-${col}`;
  const classOffset = offset && `col-offset-${offset}`;

  return (
    <div style={style} className={`${classCol} ${classOffset}`}>
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
