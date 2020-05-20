import React, { FC } from "react";
import ButtonStyles, { ButtonHeights } from "./button.style";

export type ButtonProps = {
  id?: string | null;
  onClick?: () => void;
  type?: "primary" | "secondary";
  htmlType?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
  height?: ButtonHeights;
};

const Button: FC<ButtonProps> = ({
  type = "primary",
  id = null,
  htmlType = "button",
  onClick = () => {},
  children,
  disabled = false,
  style = {},
  className = "",
  height = ButtonHeights.HEIGHT_TYPE_BASIC,
}) => {
  return (
    <ButtonStyles height={height}>
      <button
        id={id}
        disabled={disabled}
        onClick={onClick}
        className={`${className} ${type}`}
        // requires a static string!
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
