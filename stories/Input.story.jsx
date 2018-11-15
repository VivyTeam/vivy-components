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
        <Input placeholder="Your last name" label="Last name" optional />
      </PageLayout>
    ))
  )
  .add(
    "password",
    withInfo()(() => (
      <PageLayout>
        <Input
          id="password"
          placeholder="Your password"
          label="Password"
          type="password"
        />
      </PageLayout>
    ))
  )
  .add(
    "icon left",
    withInfo()(() => (
      <PageLayout>
        <Input
          iconName="password"
          id="password"
          placeholder="Your password"
          label="Password"
          type="password"
        />
      </PageLayout>
    ))
  )
  .add(
    "with error",
    withInfo()(() => (
      <PageLayout>
        <Input
          id="password"
          placeholder="Your password"
          label="Password"
          type="password"
          errors={{
            password: [
              { message: "look there is an error", field: "password" },
            ]
          }}
        />
      </PageLayout>
    ))
  )
  .add(
    "with multiple errors",
    withInfo()(() => (
      <PageLayout>
        <Input
          id="password"
          placeholder="Your password"
          label="Password"
          type="password"
          errors={{
            password: [
              { message: "look there is an error", field: "password" },
              { message: "look there is another error", field: "password" }
            ]
          }}
        />
      </PageLayout>
    ))
  )
  .add(
    "icon left and error",
    withInfo()(() => (
      <PageLayout>
        <Input
          iconName="password"
          id="password"
          placeholder="Your password"
          label="Password"
          type="password"
          errors={{
            password: [{ message: "look there is an error", field: "password" }]
          }}
        />
      </PageLayout>
    ))
  )
