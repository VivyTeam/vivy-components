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
    const { onClose, children } = this.props;
    return (
      <ModalStyles>
        <Overlay onClick={onClose} />
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
  onClose: PropTypes.func
};
Modal.defaultProps = {
  onClose: () => {}
};

export default Modal;
