import React from "react";
import PropTypes from "prop-types";
import RowStyles from "../FlexRow/index.style";
import ColStyles from "./index.style";

export default function Col({ children, col, offset, style }) {
  const classCol = col && `col-xs-${col}`;
  const classOffset = offset && `col-xs-offset-${offset}`;

  return (
    <ColStyles style={style} className={`${classCol} ${classOffset}`}>
      {children}
    </ColStyles>
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
