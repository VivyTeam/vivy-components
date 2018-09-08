import React from "react";
import PropTypes from "prop-types";
import loading from "../../public/animations/loading.gif";
import { AnimatedImg, Wrapper } from "./SimpleLoader.style";

const Spinner = ({ width, height, isCentered }) => {
  return (
    <Wrapper isCentered={isCentered}>
      <AnimatedImg
        width={width}
        height={height}
        src={loading}
        alt="Loading..."
      />
    </Wrapper>
  );
};

Spinner.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isCentered: PropTypes.bool
};

Spinner.defaultProps = {
  width: 50,
  height: 50,
  isCentered: false
};

export default Spinner;
