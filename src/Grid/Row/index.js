import React from "react";
import PropTypes from "prop-types";
import Styles from "./index.style";

export default function Row({
  children,
  style,
  space,
  position,
  verticalAlign,
  reverse,
  textAlign,
  column,
  fullWidth
}) {
  const classReverse = reverse ? "reverse" : "";
  const classColumn = column ? "column" : "";
  const classFullWidth = fullWidth ? "" : "limited-grid-width";

  return (
    <Styles style={style}>
      <div className="grid center">
        <div className={`width ${classFullWidth}`}>
          <div
            className={`
              row
              ${space}
              ${position}
              ${verticalAlign}
              ${classReverse}
              ${classColumn}
              text-align-${textAlign}
            `}
          >
            {children}
          </div>
        </div>
      </div>
    </Styles>
  );
}

Row.propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  space: PropTypes.oneOf(["normal", "around", "between", "evenly"]),
  verticalAlign: PropTypes.oneOf(["top", "middle", "bottom"]),
  position: PropTypes.oneOf(["start", "center", "end"]),
  reverse: PropTypes.bool,
  column: PropTypes.bool,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  fullWidth: PropTypes.bool
};

Row.defaultProps = {
  style: {},
  space: "normal",
  verticalAlign: "top",
  position: "start",
  reverse: false,
  column: false,
  textAlign: "left",
  fullWidth: false
};
