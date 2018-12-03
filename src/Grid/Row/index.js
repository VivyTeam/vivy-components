import React from "react";
import PropTypes from "prop-types";
import Styles from "./index.style";

export default function Row({
  children,
  style,
  space,
  position,
  positionMd,
  positionSm,
  positionXs,
  textAlign,
  textAlignMd,
  textAlignSm,
  textAlignXs,
  verticalAlign,
  reverse,
  column,
  fullWidth
}) {
  const classReverse = reverse ? "reverse" : "";
  const classColumn = column ? "column" : "";
  const classFullWidth = fullWidth ? "" : "limited-grid-width";

  const classPositionXs = positionXs ? `position-xs-${positionXs}` : "";
  const classPositionSm = positionSm ? `position-sm-${positionSm}` : "";
  const classPositionMd = positionMd ? `position-md-${positionMd}` : "";
  const classTextAlignXs = textAlignXs ? `text-align-xs-${textAlignXs}` : "";
  const classTextAlignSm = textAlignSm ? `text-align-sm-${textAlignSm}` : "";
  const classTextAlignMd = textAlignMd ? `text-align-md-${textAlignMd}` : "";

  return (
    <Styles style={style}>
      <div className="grid center">
        <div className={`width ${classFullWidth}`}>
          <div
            className={`
              row
              ${space}
              ${classPositionXs}
              ${classPositionSm}
              ${classPositionMd}
              position-${position}
              ${classTextAlignXs}
              ${classTextAlignSm}
              ${classTextAlignMd}
              text-align-${textAlign}
              ${verticalAlign}
              ${classReverse}
              ${classColumn}
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
