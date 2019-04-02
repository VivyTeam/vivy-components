import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DisplayStyles = styled.div`
  font-weight: 500;
  font-size: 48px;
`;

export default function Display({ children, style }) {
  return <DisplayStyles style={style}>{children}</DisplayStyles>;
}

Display.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.shape({})
};

Display.defaultProps = {
  style: {}
};
