import React from "react";
import PropTypes from "prop-types";

export default function Col({ children, col, offset, style }) {
  const classCol = col && `col-default-${col}`;
  const classOffset = offset && `col-default-offset-${offset}`;

  return (
    <div style={style} className={`${classCol} ${classOffset}`}>
      {children}
    </div>
  );
}

Col.propTypes = {
  children: PropTypes.node.isRequired,
  col: PropTypes.number,
  offset: PropTypes.number
};

Col.defaultProps = {
  col: 12,
  offset: 0
};
