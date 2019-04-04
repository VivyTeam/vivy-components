import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const TYPE_BASIC = "basic";
const TYPE_BOLD = "bold";

const CaptionStyles = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;

  ${({ type }) =>
    type === TYPE_BOLD &&
    css`
      font-weight: 500;
    `}
`;

export default function Caption({ children, style, type }) {
  return (
    <CaptionStyles style={style} type={type}>
      {children}
    </CaptionStyles>
  );
}

Caption.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  type: PropTypes.oneOf([TYPE_BASIC, TYPE_BOLD]),
  style: PropTypes.shape({})
};

Caption.defaultProps = {
  type: TYPE_BASIC,
  style: {}
};
