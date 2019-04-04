import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const TYPE_BASIC = "basic";
const TYPE_BOLD = "bold";

const TinyStyles = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;

  ${({ type }) =>
    type === TYPE_BOLD &&
    css`
      font-weight: 500;
    `}
`;

export default function Tiny({ children, style, type }) {
  return (
    <TinyStyles style={style} type={type}>
      {children}
    </TinyStyles>
  );
}

Tiny.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  type: PropTypes.oneOf([TYPE_BASIC, TYPE_BOLD]),
  style: PropTypes.shape({})
};

Tiny.defaultProps = {
  type: TYPE_BASIC,
  style: {}
};
