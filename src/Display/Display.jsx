import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// This is a div element that is in font-size bigger than h1 and is supposed to be
// used as 'slogan' around our apps. We dont want this to be crawled from search engines
// since its only for design reasons.
const DisplayStyles = styled.div`
  font-weight: 500;
  line-height: 3.5rem;
  font-size: 48px;
`;

export default function Display({ children, style }) {
  return <DisplayStyles style={style}>{children}</DisplayStyles>;
}

Display.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: PropTypes.shape({})
};

Display.defaultProps = {
  style: {}
};
