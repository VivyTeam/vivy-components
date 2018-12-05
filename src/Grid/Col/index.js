import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

export default function Col({
  children,
  lg,
  md,
  sm,
  xs,
  offset,
  offsetMd,
  offsetSm,
  offsetXs,
  style
}) {
  const column = classNames(
    [`col-lg-${lg} col-lg-offset-${offset}`, true],
    [`col-xs-${xs}`, xs],
    [`col-sm-${sm}`, sm],
    [`col-md-${md}`, md],
    [`col-xs-offset-${offsetXs}`, offsetXs],
    [`col-sm-offset-${offsetSm}`, offsetSm],
    [`col-md-offset-${offsetMd}`, offsetMd]
  );

  return (
    <div style={style} className={column}>
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
  offset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  lg: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"]),
  md: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"]),
  sm: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"]),
  xs: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "hide"])
};

Col.defaultProps = {
  style: {},
  offset: 0,
  offsetMd: null,
  offsetSm: null,
  offsetXs: null,
  lg: 12,
  md: null,
  sm: null,
  xs: null
};
