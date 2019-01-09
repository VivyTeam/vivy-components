import React from "react";
import PropTypes from "prop-types";
import Styles from "./index.style";
import classNames from "../../utils/classNames";

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
  const height = classNames([
    "inherited-height",
    verticalAlign === "middle" || "bottom"
  ]);

  const row = classNames(
    [
      `row default-width position-${position} text-align-${textAlign} ${verticalAlign} ${space}`,
      true
    ],
    ["full-width", fullWidth],
    ["reverse", reverse],
    ["column", column],
    [`position-xs-${positionXs}`, positionXs],
    [`position-sm-${positionSm}`, positionSm],
    [`position-md-${positionMd}`, positionMd],
    [`text-align-xs-${textAlignXs}`, textAlignXs],
    [`text-align-sm-${textAlignSm}`, textAlignSm],
    [`text-align-md-${textAlignMd}`, textAlignMd]
  );

  return (
    <Styles style={style} className={height}>
      <div className={row}>{children}</div>
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
