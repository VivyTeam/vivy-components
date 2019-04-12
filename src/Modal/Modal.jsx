import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactFocusTrap from "react-focus-lock";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { ModalStyles, Overlay, Content, CloseButton } from "./modal.style";
import { Row, Col, Icon } from "../index";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.closeButton = React.createRef();
  }

  componentDidMount() {
    if (this.closeButton.current) {
      this.closeButton.current.focus();
    }
    disableBodyScroll(document.querySelector("body"));
  }

  componentWillUnmount() {
    enableBodyScroll(document.querySelector("body"));
  }

  render() {
    const { closeCallback, role, ariaLabel, children } = this.props;
    return (
      <ReactFocusTrap
        tag="aside"
        focusTrapOptions={{ onDeactivate: closeCallback }}
        aria-modal="true"
        role={role}
        aria-label={ariaLabel}
      >
        <ModalStyles>
          <Overlay onClick={closeCallback} />
          <Content>
            <Row textAlign="right">
              <Col offset={11} lg={1}>
                <CloseButton ref={this.closeButton} onClick={closeCallback}>
                  <Icon name="close" />
                </CloseButton>
              </Col>
            </Row>
            {children}
          </Content>
        </ModalStyles>
      </ReactFocusTrap>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  closeCallback: PropTypes.func,
  role: PropTypes.string,
  ariaLabel: PropTypes.string
};
Modal.defaultProps = {
  closeCallback: () => {},
  role: "dialog",
  ariaLabel: "" // A Label for the Modal that describes what it is.
};

export default Modal;
