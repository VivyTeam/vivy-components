import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Button, Row, Col, MessageContainer, message } from "../src/index";

const Container = styled.div`
  height: 300px;
`;

storiesOf("Message", module).add(
  "message notification",
  withInfo("The raw Footer component")(() => {
    const info = () => {
      message.info("Info Message", {
        hideProgressBar: true,
        position: message.POSITION.TOP_LEFT
      });
    };
    const error = () => {
      message.error("Error Message", { position: message.POSITION.TOP_CENTER });
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
