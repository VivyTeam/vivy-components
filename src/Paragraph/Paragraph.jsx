import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const BOLD = "bold";
const BASIC = "basic";

const ParagraphStyles = styled.p`
  font-size: 16px;

  ${({ type }) =>
    type === BOLD &&
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
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf([BASIC, BOLD]),
  style: PropTypes.shape({})
};

Paragraph.defaultProps = {
  type: BASIC,
  style: {}
};
