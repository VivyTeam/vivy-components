import React, { Component } from "react";
import PropTypes from "prop-types";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { ModalStyles, Overlay, Content } from "./modal.style";

class Modal extends Component {
  componentDidMount() {
    disableBodyScroll(document.querySelector("body"));
  }

  componentWillUnmount() {
    enableBodyScroll(document.querySelector("body"));
  }

  render() {
    const { closeCallback, children } = this.props;
    return (
      <ModalStyles>
        <Overlay onClick={closeCallback} />
        <Content>{children}</Content>
      </ModalStyles>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  closeCallback: PropTypes.func
};
Modal.defaultProps = {
  closeCallback: () => {}
};

export default Modal;
