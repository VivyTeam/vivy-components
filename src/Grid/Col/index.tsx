import React, { FC, CSSProperties } from "react";
import classNames from "../../utils/classNames";

type ColProps = {
  lg?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "hide";
  md?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "hide";
  sm?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "hide";
  xs?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "hide";
  offset?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  offsetMd?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  offsetSm?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  offsetXs?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  style?: CSSProperties;
  center?: boolean;
};

const Col: FC<ColProps> = ({
  children,
  lg = 12,
  md = null,
  sm = null,
  xs = null,
  offset = 0,
  offsetMd = null,
  offsetSm = null,
  offsetXs = null,
  style = {},
}) => {
  const column = classNames(
    [`col-lg-${lg} col-lg-offset-${offset}`, true],
    [`col-xs-${xs}`, xs],
    [`col-sm-${sm}`, sm],
    [`col-md-${md}`, md],
    [`col-xs-offset-${offsetXs}`, offsetXs],
    [`col-sm-offset-${offsetSm}`, offsetSm],
    [`col-md-offset-${offsetMd}`, offsetMd]
  );

  return (
    <div style={style} className={column}>
      {children}
    </div>
  );
};

export default Col;
