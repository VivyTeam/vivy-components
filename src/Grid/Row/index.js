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
  const classesWidth = fullWidth ? "width" : "width limited-grid-width";

  let classesRow = `row position-${position} text-align-${textAlign} ${verticalAlign} ${space}`;
  if (reverse) {
    classesRow += "reverse";
  }
  if (column) {
    classesRow += " column";
  }
  if (positionXs) {
    classesRow += ` position-xs-${positionXs}`;
  }
  if (positionSm) {
    classesRow += ` position-sm-${positionSm}`;
  }
  if (positionMd) {
    classesRow += ` position-md-${positionMd}`;
  }
  if (textAlignXs) {
    classesRow += ` text-align-xs-${textAlignXs}`;
  }
  if (textAlignSm) {
    classesRow += ` text-align-sm-${textAlignSm}`;
  }
  if (textAlignMd) {
    classesRow += ` text-align-md-${textAlignMd}`;
  }

  return (
    <Styles style={style}>
      <div className="grid center">
        <div className={classesWidth}>
          <div className={classesRow}>{children}</div>
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
