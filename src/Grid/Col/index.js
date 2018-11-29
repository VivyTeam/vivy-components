import React from "react";
import PropTypes from "prop-types";

export default function Col({
  children,
  lg,
  md = lg,
  sm = md || lg,
  xs = sm || md || lg,
  offsetLg,
  offsetMd = offsetLg,
  offsetSm = offsetLg || offsetMd,
  offsetXs = offsetLg || offsetMd || offsetSm,
  style
}) {
  return (
    <div
      style={style}
      className={`
        col-xs-${xs}
        col-sm-${sm}
        col-md-${md}
        col-lg-${lg}
        col-xs-offset-${offsetXs}
        col-sm-offset-${offsetSm}
        col-md-offset-${offsetMd}
        col-lg-offset-${offsetLg}
      `}
    >
      {children}
    </div>
  );
}

Col.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  offsetXs: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  offsetSm: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  offsetMd: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  offsetLg: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  lg: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"]),
  md: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"]),
  sm: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"]),
  xs: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"])
};

Col.defaultProps = {
  style: {},
  offsetLg: 0,
  offsetMd: null,
  offsetSm: null,
  offsetXs: null,
  lg: 12,
  md: null,
  sm: null,
  xs: null
};
