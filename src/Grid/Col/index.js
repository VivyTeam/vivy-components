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
  xs: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "none"]),
  sm: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "none"]),
  md: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "none"]),
  lg: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "none"])
};

Col.defaultProps = {
  style: {},
  offset: 0,
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12
};
