import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Styles = styled.h1`
  font-weight: 500;
  font-size: 2.25rem;
  line-height: 2.625rem;
`;

export default function H1({ children, style }) {
  return <Styles style={style}>{children}</Styles>;
}

H1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: PropTypes.shape({})
};

H1.defaultProps = {
  style: {}
};
