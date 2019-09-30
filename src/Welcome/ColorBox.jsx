import React from "../../node_modules/react";
import copy from "../../node_modules/copy-to-clipboard";
import PropTypes from "../../node_modules/prop-types";

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
