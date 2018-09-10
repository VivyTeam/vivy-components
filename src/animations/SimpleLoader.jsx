import React from "react";
import PropTypes from "prop-types";
import loading from "../../public/animations/loading.gif";

export default function SimpleLoader(props) {
  return (
    <img
      src={loading}
      alt="Loading..."
      width={props.width}
      height={props.height}
    />
  );
}

SimpleLoader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

SimpleLoader.defaultProps = {
  width: 50,
  height: 50
};
