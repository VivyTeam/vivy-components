import React from "react";
import PropTypes from "prop-types";
import RowStyles from "./index.style";

export default function Row({
  children,
  space,
  position,
  verticalAlign,
  reverse,
  style
}) {
  const classReverse = reverse ? "reverse" : "";

  return (
    <RowStyles style={style}>
      <div className="grid center">
        <div className="max-grid-width">
          <div
            className={`row ${space} ${position} ${verticalAlign} ${classReverse}`}
          >
            {children}
          </div>
        </div>
      </div>
    </RowStyles>
  );
}

Row.propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  space: PropTypes.oneOf(["normal", "around", "between", "evenly"]),
  verticalAlign: PropTypes.oneOf(["top", "middle", "bottom"]),
  position: PropTypes.oneOf(["start", "center", "end"]),
  reverse: PropTypes.bool
};

Row.defaultProps = {
  style: {},
  children: null,
  space: "normal",
  verticalAlign: "top",
  position: "start",
  reverse: false
};
