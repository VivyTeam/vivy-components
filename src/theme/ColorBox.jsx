import React, { Component } from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';

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
      message: 'Copied'
    });
  }

  render() {
    const { description, color, gradient, dark } = this.props;
    return (
      <div
        className="color-box-container"
        style={{ color: dark ? '#575756' : '#fff' }}
      >
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
          <small>{description}</small>
          <br />
          <small>{gradient ? '' : color}</small>
          <h2 id="copy">copy</h2>
        </div>
      </div>
    );
  }
}

ColorBox.propTypes = {
  description: PropTypes.string.isRequired,
  color: PropTypes.string,
  gradient: PropTypes.string,
  dark: PropTypes.bool
};

ColorBox.defaultProps = {
  color: '#fff',
  gradient: null,
  dark: false
};
