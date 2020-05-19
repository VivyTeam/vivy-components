/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { FC, ReactElement } from "react";
import ButtonStyles, {
  HEIGHT_TYPE_LG,
  HEIGHT_TYPE_SM,
  HEIGHT_TYPE_BASIC,
} from "./button.style";

export type TButtonProps = {
  children: ReactElement;
  id: string | null;
  onClick: () => void;
  type: "primary" | "secondary";
  htmlType: "button" | "submit" | "reset";
  style: React.CSSProperties;
  disabled: boolean;
  className: string;
  height:
    | typeof HEIGHT_TYPE_LG
    | typeof HEIGHT_TYPE_SM
    | typeof HEIGHT_TYPE_BASIC;
};

const Button: FC<TButtonProps> = ({
  type = "primary",
  id = null,
  htmlType = "button",
  onClick = () => {},
  children,
  disabled = false,
  style = {},
  className = "",
  height = HEIGHT_TYPE_BASIC,
}) => {
  return (
    <ButtonStyles height={height}>
      <button
        id={id}
        disabled={disabled}
        onClick={onClick}
        className={`${className} ${type}`}
        // eslint-disable-next-line react/button-has-type
        type={htmlType}
        style={style}
      >
        <div className="component-child">{children}</div>
      </button>
    </ButtonStyles>
  );
};

export default Button;
