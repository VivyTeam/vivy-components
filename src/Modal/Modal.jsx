import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactFocusTrap from "react-focus-lock";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import {
  ModalStyles,
  Overlay,
  Content,
  CloseButton,
  Height,
  BodyArea,
  ButtonsArea,
  SubmitButton
} from "./modal.style";
import { Row, Col, Icon, Button } from "../index";

const ESC_KEY = 27;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.closeButton = React.createRef();
    this.handleEscKeyPress = this.handleEscKeyPress.bind(this);
  }

  componentDidMount() {
    if (this.closeButton.current) {
      this.closeButton.current.focus();
    }
    disableBodyScroll(document.querySelector("body"));
    document.addEventListener("keydown", this.handleEscKeyPress, false);
  }

  componentWillUnmount() {
    enableBodyScroll(document.querySelector("body"));
    document.removeEventListener("keydown", this.handleEscKeyPress, false);
  }

  handleEscKeyPress({ which: keyPressed }) {
    if (keyPressed === ESC_KEY) {
      const { onClose } = this.props;
      onClose();
    }
  }

  render() {
    const {
      onClose,
      onCancel,
      onSubmit,
      role,
      ariaLabel,
      children,
      submitText,
      cancelText
    } = this.props;

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
          <Height>
            <Row position="center" verticalAlign="middle">
              <Col>
                <Content>
                  <Row textAlign="right" position="end">
                    <Col lg={1}>
                      <CloseButton ref={this.closeButton} onClick={onClose}>
                        <Icon name="close" />
                      </CloseButton>
                    </Col>
                  </Row>

                  <BodyArea>{children}</BodyArea>

                  <ButtonsArea>
                    <Row position="end">
                      {onCancel && (
                        <Col lg={0}>
                          <Button type="secondary" onClick={onCancel}>
                            {cancelText}
                          </Button>
                        </Col>
                      )}
                      {onSubmit && (
                        <Col lg={0}>
                          <SubmitButton onClick={onSubmit}>
                            {submitText}
                          </SubmitButton>
                        </Col>
                      )}
                    </Row>
                  </ButtonsArea>
                </Content>
              </Col>
            </Row>
          </Height>
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
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  cancelText: ({ onCancel, cancelText }) => {
    if (onCancel && !cancelText) {
      return new Error(
        "You might need to add property 'cancelText' if you need the button to have text"
      );
    }
    if (typeof cancelText !== "string") {
      return new Error(`cancelText needs to be a string`);
    }

    return null;
  },
  submitText: ({ onSubmit, submitText }) => {
    if (onSubmit && !submitText) {
      return new Error(
        "You might need to add property 'submitText' if you need the button to have text"
      );
    }
    if (typeof submitText !== "string") {
      return new Error(`submitText needs to be a string`);
    }

    return null;
  },
  role: PropTypes.string,
  ariaLabel: PropTypes.string
};
Modal.defaultProps = {
  onClose: null,
  onCancel: null,
  onSubmit: null,
  cancelText: "",
  submitText: "",
  role: "dialog",
  ariaLabel: "" // A Label for the Modal that describes what it is.
};

export default Modal;
