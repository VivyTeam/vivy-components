import React from "react";
import PropTypes from "prop-types";
import RowStyles from "./index.style";

export default function Row({
  children,
  space,
  position,
  verticalAlign,
  reverse,
  textAlign,
  style
}) {
  const classReverse = reverse ? "reverse" : "";

  return (
    <RowStyles style={style}>
      <div className="grid center">
        <div className="max-grid-width">
          <div
            className={`row ${space} ${position} ${verticalAlign} ${classReverse} text-align-${textAlign}`}
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
  children: PropTypes.node.isRequired,
  space: PropTypes.oneOf(["normal", "around", "between", "evenly"]),
  verticalAlign: PropTypes.oneOf(["top", "middle", "bottom"]),
  position: PropTypes.oneOf(["start", "center", "end"]),
  reverse: PropTypes.bool,
  textAlign: PropTypes.oneOf(["left", "center", "right"])
};

Row.defaultProps = {
  style: {},
  space: "normal",
  verticalAlign: "top",
  position: "start",
  reverse: false,
  textAlign: "left"
};
