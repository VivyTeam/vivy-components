import React, { FC, CSSProperties, ReactNode } from "react";
import Styles from "./index.style";
import classNames from "../../utils/classNames";

type RowProps = {
  children: ReactNode;
  style?: CSSProperties;
  space?: "normal" | "around" | "between" | "evenly";
  position?: "start" | "center" | "end";
  positionMd?: "start" | "center" | "end";
  positionSm?: "start" | "center" | "end";
  positionXs?: "start" | "center" | "end";
  textAlign?: "left" | "center" | "right";
  textAlignMd?: "left" | "center" | "right";
  textAlignSm?: "left" | "center" | "right";
  textAlignXs?: "left" | "center" | "right";
  verticalAlign?: "top" | "middle" | "bottom";
  reverse?: boolean;
  column?: boolean;
  fullWidth?: boolean;
};

const Row: FC<RowProps> = ({
  children,
  style = {},
  space = "normal",
  position = "start",
  positionMd = null,
  positionSm = null,
  positionXs = null,
  textAlign = "left",
  textAlignMd = null,
  textAlignSm = null,
  textAlignXs = null,
  verticalAlign = "top",
  reverse = false,
  column = false,
  fullWidth = false,
}) => {
  const height = classNames([
    "inherited-height",
    verticalAlign === "middle" || "bottom",
  ]);

  const row = classNames(
    [
      `row default-width position-${position} text-align-${textAlign} ${verticalAlign} ${space}`,
      true,
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
};
export default Row;
