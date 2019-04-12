import React, { Component } from "react";
import PropTypes from "prop-types";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { ModalStyles, Overlay, Content, CloseButton } from "./modal.style";

class Modal extends Component {
  closeButton = React.createRef();

  componentDidMount() {
    this.focusOnCloseButton();
    disableBodyScroll(document.querySelector("body"));
  }

  componentWillUnmount() {
    enableBodyScroll(document.querySelector("body"));
  }

  focusOnCloseButton = () => {
    this.closeButton.current.focus();
  };

  render() {
    const { onClose, children } = this.props;
    return (
      <ModalStyles>
        <Overlay onClick={closeCallback} />
        <Content>
          <Row>
            <Col offset={11} lg={1}>
              <CloseButton ref={this.closeButton} onClick={closeCallback}>
                <Icon name="close" />
              </CloseButton>
            </Col>
          </Row>
          {children}
        </Content>
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
