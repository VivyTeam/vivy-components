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
  const classAround = around && "around";
  const classBetween = between && "between";
  const classBottom = bottom && "bottom";
  const classMiddle = middle && "middle";
  const classTop = top && "top";
  const classStart = start && "start";
  const classCenter = center && "center";
  const classEnd = end && "end";
  const classReverse = reverse && "reverse";
  const classColumn = column && "column";

  return (
    <RowStyles>
      <div className="grid center">
        <div className="max-grid-width">
          <div
            className={`row ${classAround} ${classBetween} ${classBottom} ${classMiddle} ${classTop} ${classStart} ${classCenter} ${classEnd} ${classReverse} ${classColumn}`}
          >
            {children}
          </div>
        </div>
      </div>
    </RowStyles>
  );
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
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
  children: null,
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
