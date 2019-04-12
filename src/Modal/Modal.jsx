import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactFocusTrap from "react-focus-lock";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import {
  ModalStyles,
  Overlay,
  Content,
  CloseButton,
  BodyContent
} from "./modal.style";
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

  focusOnCloseButton = () => {
    this.closeButton.current.focus();
  };

  render() {
    const { onClose, role, ariaLabel, children } = this.props;
    return (
      <ReactFocusTrap
        tag="aside"
        focusTrapOptions={{ onDeactivate: onClose }}
        aria-modal="true"
        role={role}
        aria-label={ariaLabel}
      >
        <ModalStyles>
          <Overlay onClick={onClose} />
          <Content>
            <Row textAlign="right">
              <Col offset={11} lg={1}>
                <CloseButton ref={this.onClose} onClick={onClose}>
                  <Icon name="close" />
                </CloseButton>
              </Col>
            </Row>
            <BodyContent>{children}</BodyContent>
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
  onClose: PropTypes.func,
  role: PropTypes.string,
  ariaLabel: PropTypes.string
};
Modal.defaultProps = {
  onClose: () => {},
  role: "dialog",
  ariaLabel: "" // A Label for the Modal that describes what it is.
};

export default Modal;
