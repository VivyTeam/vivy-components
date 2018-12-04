import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Input, InputPassword } from "../src/index";

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
    "optional",
    withInfo()(() => (
      <PageLayout>
        <Input
          placeholder="Your last name"
          label="Last name"
          optional
          id="email"
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
