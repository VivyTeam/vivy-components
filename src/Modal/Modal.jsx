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
    disableBodyScroll(document.querySelector("#modal-body-area"));
    document.addEventListener("keydown", this.handleEscKeyPress, false);
  }

  componentWillUnmount() {
    enableBodyScroll(document.querySelector("#modal-body-area"));
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
      cancelText,
      submissionEnabled,
      size
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
              <Col lg={size === "sm" ? 7 : 12} sm={12}>
                <Content>
                  <Row textAlign="right" position="end">
                    <Col lg={1}>
                      <CloseButton
                        id="modal-close-button"
                        ref={this.closeButton}
                        onClick={onClose}
                      >
                        <Icon name="close" />
                      </CloseButton>
                    </Col>
                  </Row>

                  <BodyArea id="modal-body-area">{children}</BodyArea>

                  <ButtonsArea>
                    <Row position={size === "sm" ? "center" : "end"}>
                      {onCancel && (
                        <Col xs="hide" lg={0}>
                          <Button
                            id="modal-cancel-button"
                            type="secondary"
                            onClick={onCancel}
                          >
                            {cancelText}
                          </Button>
                        </Col>
                      )}
                      {onSubmit && (
                        <Col xs={12} lg={0}>
                          <SubmitButton
                            id="modal-submit-button"
                            onClick={onSubmit}
                            disabled={!submissionEnabled}
                          >
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
  submissionEnabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"])
};
Modal.defaultProps = {
  onClose: null,
  onCancel: null,
  onSubmit: null,
  cancelText: "",
  submitText: "",
  role: "dialog",
  submissionEnabled: true,
  ariaLabel: "", // A Label for the Modal that describes what it is.
  size: "lg"
};

export default Modal;
