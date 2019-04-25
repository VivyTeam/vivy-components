/* eslint-disable no-alert */

import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Button, Colors, Row, Col, Modal } from "../src/index";

const LayoutStyles = styled.div`
  height: 150vh;
  .green {
    height: 25%;
    background: ${Colors.brandPrimary};
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
                submissionEnabled
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
              submissionEnabled
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
                submissionEnabled
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
  .add("enables submit button", () => {
    const ModalUseCase = () => {
      const [open, toggleModal] = useState(true);
      const [actionComplete, toggleAction] = useState(false);

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
              submissionEnabled={actionComplete}
            >
              <Row position="center" textAlign="center">
                <Col lg={9}>
                  Clicking this button will enable the submission of this modal.
                  <Button
                    type="secondary"
                    height="sm"
                    onClick={() => toggleAction(true)}
                    style={{ display: "unset", margin: 10 }}
                  >
                    Enable submission
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
