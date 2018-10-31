import React from "react";
import PropTypes from "prop-types";
import RowStyles from "./index.style";

export default function Row({
  children,
  around,
  between,
  bottom,
  middle,
  top,
  start,
  center,
  end,
  reverse,
  column
}) {
  const classAround = around && "around-default";
  const classBetween = between && "between-default";
  const classBottom = bottom && "bottom-default";
  const classMiddle = middle && "middle-default";
  const classTop = top && "top-default";
  const classStart = start && "start-default";
  const classCenter = center && "center-default";
  const classEnd = end && "end-default";
  const classReverse = reverse && "reverse";
  const classColumn = column && "column";

  return (
    <RowStyles>
      <div
        className={`row ${classAround} ${classBetween} ${classBottom} ${classMiddle} ${classTop} ${classStart} ${classCenter} ${classEnd} ${classReverse} ${classColumn}`}
      >
        {children}
      </div>
    </RowStyles>
  );
}

Row.propTypes = {
  children: PropTypes.any,
  around: PropTypes.bool,
  between: PropTypes.bool,
  bottom: PropTypes.bool,
  middle: PropTypes.bool,
  top: PropTypes.bool,
  start: PropTypes.bool,
  center: PropTypes.bool,
  end: PropTypes.bool,
  reverse: PropTypes.bool,
  column: PropTypes.bool
};

Row.defaultProps = {
  around: false,
  between: false,
  bottom: false,
  middle: false,
  top: false,
  start: false,
  center: false,
  end: false,
  reverse: false,
  column: false
};
