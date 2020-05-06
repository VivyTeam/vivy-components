import React from "react";
import PropTypes from "prop-types";
import loading from "../../public/animations/loading.gif";
import { AnimatedImg, Wrapper } from "./SimpleLoader.style";

const SimpleLoader = ({ width, height, centered }) => (
  <Wrapper centered={centered}>
    <AnimatedImg width={width} height={height} src={loading} alt="Loading..." />
  </Wrapper>
);

SimpleLoader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  centered: PropTypes.bool,
};

SimpleLoader.defaultProps = {
  width: 50,
  height: 50,
  centered: false,
};

export default SimpleLoader;
