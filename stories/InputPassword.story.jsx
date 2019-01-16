import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { InputPassword } from "../src/index";

const PageLayout = styled.div`
  padding: 50px 100px;
  display: flex;
`;
storiesOf("InputPassword", module)
  .add(
    "icon left",
    () => (
      <PageLayout>
        <InputPassword
          iconName="body"
          showPassword
          id="password"
          placeholder="Password"
          label="Password"
        />
      </PageLayout>
    ),
    { info: "Has an Icon on the left side." }
  )
  .add(
    "with visibility property, true",
    () => (
      <PageLayout>
        <InputPassword
          visibility
          id="name"
          placeholder="Password"
          label="Password"
        />
      </PageLayout>
    ),
    {
      info:
        "the initial state of the input indicates that there will be an Icon on the right side. By clicking the button the input changes its type between 'text' and 'password'"
    }
  )
  .add(
    "with visibility and showPassword properties, true",
    () => (
      <PageLayout>
        <InputPassword
          visibility
          showPassword
          id="name"
          placeholder="Password"
          label="Password"
        />
      </PageLayout>
    ),
    {
      info:
        "the initial state of the input indicates that there will be an Icon on the right side. Also the type of the Input will be 'text'. That means that when the user start typing will be able to see what he is typing in th password input."
    }
  );
