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
  reverse
}) {

  const classAround = around && "around-xs";
  const classBetween = between && "between-xs";
  const classBottom = bottom && "bottom-xs";
  const classMiddle = middle && "middle-xs";
  const classTop = top && "top-xs";
  const classStart = start && "start-xs";
  const classCenter = center && "center-xs";
  const classEnd = end && "end-xs";
  const classReverse = reverse && "reverse";

  return (
    <RowStyles>
      <div
        className={`row ${classAround} ${classBetween} ${classBottom} ${classMiddle} ${classTop} ${classStart} ${classCenter} ${classEnd} ${classReverse}`}
      >
        {children}
      </div>
    </RowStyles>
  );
}

Row.propTypes = {
  around: PropTypes.bool,
  between: PropTypes.bool,
  bottom: PropTypes.bool,
  middle: PropTypes.bool,
  top: PropTypes.bool,
  start: PropTypes.bool,
  center: PropTypes.bool,
  end: PropTypes.bool,
  reverse: PropTypes.bool,
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
  reverse: false
};
