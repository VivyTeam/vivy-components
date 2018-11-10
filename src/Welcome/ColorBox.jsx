import React, { Component } from "react";
import PropTypes from "prop-types";
import copy from "copy-to-clipboard";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    const { gradient, color } = this.props;
    const text = gradient || color;

    copy(text, {
      debug: true,
      message: "Copied"
    });
  }

  render() {
    const { description, color, gradient } = this.props;
    return (
      <div className="color-box-container">
        <div
          tabIndex="0"
          role="button"
          onClick={this.handleCopy}
          onKeyPress={() => {}}
          className="color-box"
          style={
            gradient
              ? { backgroundImage: gradient }
              : { backgroundColor: color }
          }
        >
          <p style={{ margin: ".5rem", fontWeight: "500" }}>{description}</p>
          <small>{gradient ? "" : color}</small>
          <h3 className="copy">Copy</h3>
        </div>
      </div>
    );
  }
}

ColorBox.propTypes = {
  description: PropTypes.string.isRequired,
  color: PropTypes.string,
  gradient: PropTypes.string
};

ColorBox.defaultProps = {
  color: "#fff",
  gradient: null
};
