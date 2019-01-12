import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Button, Modal } from "../src/index";

const LayoutStyles = styled.div`
  width: 80%;
  margin: 0 auto;

  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .full-screen-modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px;

    h2 {
      font-size: 2.25m;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.17;
      letter-spacing: normal;
      color: #353f41;
      margin: 6px 0 40px 0;
    }
  }
`;

storiesOf("Modal", module).add(
  "Fullscreen",
  () => (
    <LayoutStyles>
      <Modal open>
        <div className="full-screen-modal">
          <h2>Fullscreen modal</h2>
          <Button>OK</Button>
        </div>
      </Modal>
    </LayoutStyles>
  ),
  { info: "Use to grab the users attention" }
);
