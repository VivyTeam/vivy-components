import React from "react";
import PropTypes from "prop-types";
import loading from "../../public/animations/loading.gif";
import { AnimatedImg, Wrapper } from "./SimpleLoader.style";

const Spinner = ({ width, height, centered }) => (
  <Wrapper centered={centered}>
    <AnimatedImg width={width} height={height} src={loading} alt="Loading..." />
  </Wrapper>
);

Spinner.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  centered: PropTypes.bool
};

Spinner.defaultProps = {
  width: 50,
  height: 50,
  centered: false
};

export default Spinner;
