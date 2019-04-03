import React from "react";
import copy from "copy-to-clipboard";
import PropTypes from "prop-types";

export default function ColorBox({ description, color }) {
  return (
    <div>
      <button
        type="button"
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={() => copy(color)}
      >
        <span className="copy">copy {color}</span>
      </button>
      <div className="color-description">{description}</div>
      <div className="color-name">{color}</div>
    </div>
  );
}
ColorBox.propTypes = {
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};
