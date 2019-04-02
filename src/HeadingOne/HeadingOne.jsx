import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeadingOneStyles = styled.h1`
  font-weight: 500;
  font-size: 36px;
`;

export default function HeadingOne({ children, style }) {
  return <HeadingOneStyles style={style}>{children}</HeadingOneStyles>;
}

HeadingOne.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.shape({})
};

HeadingOne.defaultProps = {
  style: {}
};
