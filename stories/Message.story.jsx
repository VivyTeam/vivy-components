import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Button, Row, Col, MessageContainer, message } from "../src/index";

const PageLayout = styled.div`
  padding: 50px 100px;
`;

const Container = styled.div`
  height: 300px;
`;

storiesOf("Message", module)
  .add("documentation", () => (
    <PageLayout>
      <h2>Message Notification Docs</h2>
      <h3>Overview</h3>
      <p>
        To begin, message notifications are used when you need to notify a user
        about some action they need to take. They can also be used to notify
        users about updated state (CRUD functions) and also can be incredibly
        convenient for displaying error messages.
      </p>
      <p>
        In the Vivy component library we abstract a lot of the logic away to the{" "}
        <a href="https://github.com/fkhadra/react-toastify#readme">
          react-toastify
        </a>{" "}
        library. This allows us to apply custom styles to our own message
        components while avoiding having to maintain a lot of code around the
        components logic. While in the library we abstract away the API with the
        Message component you can find most of what you can do with the message
        component in the toastify readme.
      </p>
      <h3>Quick Start</h3>
      <p>
        To get started with messages you first need to import the
        MessageContainer component into your app. Typically this is inside your
        app.jsx file or typically where you initialize your app code. After
        initializing this component, all you need to do is import the message()
        function and call it whenever you want to display a message. The below
        stories have examples of how to do this and how to pass optional
        configurations.
      </p>
    </PageLayout>
  ))
  .add(
    "message notification",
    withInfo("Basic message notifications")(() => {
      const info = () => {
        message.info("Info Message", {
          hideProgressBar: true,
          position: message.POSITION.TOP_LEFT
        });
      };
      const error = () => {
        message.error("Error Message", {
          position: message.POSITION.TOP_CENTER
        });
      };
      const success = () => {
        message.success("Success Message", {});
      };

      return (
        <Container>
          <MessageContainer />
          <Row position="center" verticalAlign="bottom">
            <Col lg={4}>
              <Button onClick={info}>Info Message</Button>
            </Col>
            <Col lg={4}>
              <Button onClick={error}>Error Message</Button>
            </Col>
            <Col lg={4}>
              <Button onClick={success}>Success Message</Button>
            </Col>
          </Row>
        </Container>
      );
    })
  );
