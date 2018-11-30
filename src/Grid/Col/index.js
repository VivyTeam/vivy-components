import React from "react";
import PropTypes from "prop-types";

export default function Col({
  children,
  lg,
  md,
  sm,
  xs,
  offsetLg,
  offsetMd,
  offsetSm,
  offsetXs,
  style
}) {
  const colXs = xs ? `col-xs-${xs}` : "";
  const colSm = sm ? `col-sm-${sm}` : "";
  const colMd = md ? `col-md-${md}` : "";
  const colOffsetXs = offsetXs ? `col-xs-offset-${offsetXs}` : "";
  const colOffsetSm = offsetSm ? `col-sm-offset-${offsetSm}` : "";
  const colOffsetMd = offsetMd ? `col-md-offset-${offsetMd}` : "";

  return (
    <div
      style={style}
      className={`
        ${colXs}
        ${colSm}
        ${colMd}
        col-lg-${lg}
        ${colOffsetXs}
        ${colOffsetSm}
        ${colOffsetMd}
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
