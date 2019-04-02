import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeadingOneStyles = styled.h2`
  font-weight: 500;
  font-size: 24px;
`;

export default function HeadingTwo({ children, style }) {
  return <HeadingOneStyles style={style}>{children}</HeadingOneStyles>;
}

HeadingTwo.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.shape({})
};

HeadingTwo.defaultProps = {
  style: {}
};
