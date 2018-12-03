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
  positionMd: PropTypes.oneOf(["start", "center", "end"]),
  positionSm: PropTypes.oneOf(["start", "center", "end"]),
  positionXs: PropTypes.oneOf(["start", "center", "end"]),
  reverse: PropTypes.bool,
  column: PropTypes.bool,
  fullWidth: PropTypes.bool,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  textAlignMd: PropTypes.oneOf(["left", "center", "right"]),
  textAlignSm: PropTypes.oneOf(["left", "center", "right"]),
  textAlignXs: PropTypes.oneOf(["left", "center", "right"])
};

Row.defaultProps = {
  style: {},
  space: "normal",
  verticalAlign: "top",
  position: "start",
  positionMd: null,
  positionSm: null,
  positionXs: null,
  textAlign: "left",
  textAlignMd: null,
  textAlignSm: null,
  textAlignXs: null,
  reverse: false,
  column: false,
  fullWidth: false
};
