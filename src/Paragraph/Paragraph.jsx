import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const TYPE_BASIC = "basic";
const TYPE_BOLD = "bold";

const ParagraphStyles = styled.p`
  font-size: 1.6rem;
  line-height: 2.2rem;

  ${({ type }) =>
    type === TYPE_BOLD &&
    css`
      font-weight: 500;
    `}
`;

export default function Paragraph({ children, style, type }) {
  return (
    <ParagraphStyles type={type} style={style}>
      {children}
    </ParagraphStyles>
  );
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  type: PropTypes.oneOf([TYPE_BASIC, TYPE_BOLD]),
  style: PropTypes.shape({})
};

Paragraph.defaultProps = {
  type: TYPE_BASIC,
  style: {}
};
