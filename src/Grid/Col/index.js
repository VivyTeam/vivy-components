import React from "react";
import PropTypes from "prop-types";

export default function Col({ children, xs, sm, md, lg, offset, style }) {
  return (
    <div
      style={style}
      className={`col-xs-${xs} col-sm-${sm} col-md-${md} col-lg-${lg} col-offset-${offset}`}
    >
      {children}
    </div>
  );
}

Col.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  offset: PropTypes.number,
  xs: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"]),
  sm: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"]),
  md: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"]),
  lg: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"])
};

Col.defaultProps = {
  style: {},
  offset: 0,
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0
};
