import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Button, Row, Col, NotifyContainer, notify } from "../src/index";

const PageLayout = styled.div`
  padding: 50px 100px;
`;

const Container = styled.div`
  height: 300px;
`;

storiesOf("Notify", module)
  .add("documentation", () => (
    <PageLayout>
      <h2>Notification Docs</h2>
      <h3>Overview</h3>
      <p>
        To begin, notifications are used when you need to notify a user about
        some action they need to take. They can also be used to notify users
        about updated state (CRUD functions) and also can be incredibly
        convenient for displaying error notifys.
      </p>
      <p>
        In the Vivy component library we abstract a lot of the logic away to the{" "}
        <a href="https://github.com/fkhadra/react-toastify#readme">
          react-toastify
        </a>{" "}
        library. This allows us to apply custom styles to our own notify
        components while avoiding having to maintain a lot of code around the
        components logic. While in the library we abstract away the API with the
        Message component you can find most of what you can do with the notify
        component in the toastify readme.
      </p>
      <h3>Quick Start</h3>
      <p>
        To get started with notifys you first need to import the NotifyContainer
        component into your app. Typically this is inside your app.jsx file or
        typically where you initialize your app code. After initializing this
        component, all you need to do is import the notify() function and call
        it whenever you want to display a notify. The below stories have
        examples of how to do this and how to pass optional configurations.
      </p>
    </PageLayout>
  ))
  .add(
    "basic notification",
    () => {
      const info = () => {
        notify.info("Info Notification", {
          hideProgressBar: true,
          position: notify.POSITION.TOP_LEFT
        });
      };
      const error = () => {
        notify.error("Error Notification", {
          position: notify.POSITION.TOP_CENTER
        });
      };
      const success = () => {
        notify.success("Success Notification", {});
      };

      return (
        <Container>
          <NotifyContainer />
          <Row position="center" verticalAlign="bottom">
            <Col lg={4}>
              <Button onClick={info}>Info</Button>
            </Col>
            <Col lg={4}>
              <Button onClick={error}>Error</Button>
            </Col>
            <Col lg={4}>
              <Button onClick={success}>Success</Button>
            </Col>
          </Row>
        </Container>
      );
    },
    { info: "Basic notify" }
  );
