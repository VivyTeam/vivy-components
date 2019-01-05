import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Input } from "../src/index";

const PageLayout = styled.div`
  padding: 50px 100px;
  display: flex;
`;

storiesOf("Input", module)
  .add(
    "basic",
    withInfo()(() => (
      <PageLayout>
        <Input
          id="name"
          placeholder="Please add your name"
          label="First name"
        />
      </PageLayout>
    ))
  )
  .add(
    "default value",
    withInfo()(() => (
      <PageLayout>
        <Input
          placeholder="Enter your name"
          label="Your name"
          id="name"
          defaultValue="John Doe"
        />
      </PageLayout>
    ))
  )
  .add(
    "icon left",
    withInfo()(() => (
      <PageLayout>
        <Input
          iconName="email"
          id="email"
          placeholder="Email"
          label="Email"
          type="text"
        />
      </PageLayout>
    ))
  );
