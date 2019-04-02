import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const TYPE_BOLD = "bold";
const SIZE_SMALL = "tiny";

const CaptionStyles = styled.div`
  font-size: 14px;

  ${({ type }) =>
    type === TYPE_BOLD &&
    css`
      font-weight: 500;
    `}

  ${({ size }) =>
    size === SIZE_SMALL &&
    css`
      font-size: 12px;
    `}
`;

export default function Caption({ children, style, type, size }) {
  return (
    <CaptionStyles style={style} type={type} size={size}>
      {children}
    </CaptionStyles>
  );
}

Caption.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["", TYPE_BOLD]),
  size: PropTypes.oneOf(["", SIZE_SMALL]),
  style: PropTypes.shape({})
};

Caption.defaultProps = {
  type: "",
  size: "",
  style: {}
};
