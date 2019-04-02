import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Styles = styled.h1`
  font-weight: 500;
  font-size: 36px;
`;

export default function H1({ children, style }) {
  return <Styles style={style}>{children}</Styles>;
}

H1.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.shape({})
};

H1.defaultProps = {
  style: {}
};
