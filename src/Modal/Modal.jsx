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
  BodyContent
} from "./modal.style";
import { Row, Col, Icon, Button } from "../index";

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
    const {
      onClose,
      role,
      ariaLabel,
      children,
      actionCallback,
      passiveModal
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
                  <Row textAlign="right">
                    <Col offset={11} lg={1}>
                      <CloseButton ref={this.closeButton} onClick={onClose}>
                        <Icon name="close" />
                      </CloseButton>
                    </Col>
                  </Row>
                  <BodyContent>
                    {children}
                    {!passiveModal ? (
                      <Row position="end">
                        <Col lg={0}>
                          <Button
                            type="tertiary"
                            onClick={onClose}
                            style={{ marginRight: 16 }}
                          >
                            Cancel
                          </Button>
                        </Col>
                        <Col lg={0}>
                          <Button type="tertiary" onClick={actionCallback}>
                            Submit
                          </Button>
                        </Col>
                      </Row>
                    ) : null}
                  </BodyContent>
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
  actionCallback: PropTypes.func,
  role: PropTypes.string,
  ariaLabel: PropTypes.string,
  passiveModal: PropTypes.bool
};
Modal.defaultProps = {
  onClose: () => {},
  actionCallback: () => {},
  role: "dialog",
  ariaLabel: "", // A Label for the Modal that describes what it is.
  passiveModal: false
};

export default Modal;
