/* eslint-disable no-alert */

import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Button, Colors, Row, Col, Modal } from "../src/index";

const LayoutStyles = styled.div`
  height: 150vh;
  .green {
    height: 25%;
    background: ${Colors.primary};
  }
  .white {
    height: 25%;
    background: #f5f5f5;
  }
`;

storiesOf("Modal", module)
  .add("basic", () => <Modal>A very basic modal.</Modal>)
  .add(
    "only Submit button",
    () => {
      const ModalUseCase = () => {
        const [open, toggleModal] = useState(true);

        return (
          <>
            <Button onClick={() => toggleModal(true)}>
              Launch composed modal
            </Button>
            {open && (
              <Modal
                onClose={() => toggleModal(false)}
                onSubmit={() => alert("I can submit something")}
                submitText="Submit"
              >
                A very basic modal that wont scroll the background when opened.
              </Modal>
            )}
          </>
        );
      };
      return <ModalUseCase />;
    },
    {
      info:
        "Submit button is shown since property 'onSubmit' is being passed to the component."
    }
  )
  .add(
    "only Cancel button",
    () => {
      const ModalUseCase = () => {
        const [open, toggleModal] = useState(true);

        return (
          <>
            <Button onClick={() => toggleModal(true)}>
              Launch composed modal
            </Button>
            {open && (
              <Modal
                onClose={() => toggleModal(false)}
                onCancel={() => alert("I can cancel something")}
                cancelText="Cancel"
              >
                A very basic modal that wont scroll the background when opened.
              </Modal>
            )}
          </>
        );
      };
      return <ModalUseCase />;
    },
    {
      info:
        "Cancel button is shown since property 'onCancel' is being passed to the component."
    }
  )
  .add("both Cancel and Submit buttons", () => {
    const ModalUseCase = () => {
      const [open, toggleModal] = useState(true);

      return (
        <>
          <Button onClick={() => toggleModal(true)}>
            Launch composed modal
          </Button>
          {open && (
            <Modal
              onClose={() => toggleModal(false)}
              onCancel={() => alert("I can cancel something")}
              onSubmit={() => alert("I can submit something")}
              submitText="Submit"
              cancelText="Cancel"
            >
              A very basic modal that wont scroll the background when opened.
            </Modal>
          )}
        </>
      );
    };
    return <ModalUseCase />;
  })
  .add("with long content", () => {
    const ModalUseCase = () => {
      const [open, toggleModal] = useState(true);

      return (
        <>
          <Button onClick={() => toggleModal(true)}>
            Launch composed modal
          </Button>
          {open && (
            <Modal
              onClose={() => toggleModal(false)}
              onCancel={() => alert("I can cancel something")}
              onSubmit={() => alert("I can submit something")}
              submitText="Submit"
              cancelText="Cancel"
            >
              <div
                style={{
                  backgroundColor: Colors.affirmativeDim,
                  height: 3000
                }}
              >
                Very long Content
              </div>
            </Modal>
          )}
        </>
      );
    };
    return <ModalUseCase />;
  })
  .add("modal size small", () => {
    const ModalUseCase = () => {
      const [open, toggleModal] = useState(true);

      return (
        <>
          <Button onClick={() => toggleModal(true)}>
            Launch composed modal
          </Button>
          {open && (
            <Modal
              onClose={() => toggleModal(false)}
              onCancel={() => alert("I can cancel something")}
              onSubmit={() => alert("I can submit something")}
              submitText="Submit"
              cancelText="Cancel"
              size="sm"
            >
              A very basic modal small sized
            </Modal>
          )}
        </>
      );
    };
    return <ModalUseCase />;
  })
  .add(
    "with page that has more height than one screen",
    () => {
      const ModalUseCase = () => {
        const [open, toggleModal] = useState(false);

        return (
          <>
            <Button onClick={() => toggleModal(true)}>
              Launch composed modal
            </Button>
            {open && (
              <Modal
                onClose={() => toggleModal(false)}
                onCancel={() => alert("I can cancel something")}
                onSubmit={() => alert("I can submit something")}
                submitText="Submit"
                cancelText="Cancel"
              >
                A very basic modal that wont scroll the background when opened.
              </Modal>
            )}
          </>
        );
      };
      return (
        <LayoutStyles>
          <div className="white">
            <Row position="center">
              <Col lg={3}>
                <ModalUseCase />
              </Col>
            </Row>
          </div>
          <div className="green" />
          <div className="white" />
          <div className="green" />
        </LayoutStyles>
      );
    },
    {
      info: "Scrolling should be disabled when modal is open"
    }
  )
  .add("toggle availability of submit button", () => {
    const ModalUseCase = () => {
      const [open, toggleModal] = useState(true);
      const [allowSubmit, toggleSubmissionState] = useState(false);

      return (
        <>
          <Button onClick={() => toggleModal(true)}>
            Launch composed modal
          </Button>
          {open && (
            <Modal
              onClose={() => toggleModal(false)}
              onCancel={() => alert("I can cancel something")}
              onSubmit={() => alert("I can submit something")}
              submitText="Submit"
              cancelText="Cancel"
              submissionEnabled={allowSubmit}
            >
              <Row position="center" textAlign="center">
                <Col lg={9}>
                  Clicking this button will toggle the availability of
                  submission in this modal.
                  <Button
                    type="secondary"
                    height="sm"
                    onClick={() => toggleSubmissionState(!allowSubmit)}
                    style={{ display: "unset", margin: 10 }}
                  >
                    {allowSubmit ? "Disable" : "Enable"} submission
                  </Button>
                </Col>
              </Row>
            </Modal>
          )}
        </>
      );
    };
    return <ModalUseCase />;
  });
