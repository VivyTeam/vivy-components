import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { InputPassword } from "../src/index";

const PageLayout = styled.div`
  padding: 50px 100px;
  display: flex;
`;
storiesOf("InputPassword", module)
  .add(
    "icon left",
    withInfo("default")(() => (
      <PageLayout>
        <InputPassword
          iconName="body"
          showPassword
          id="password"
          placeholder="Password"
          label="Password"
        />
      </PageLayout>
    ))
  )
  .add(
    "with Visibility",
    withInfo("initial state would not show what is typed in the input")(() => (
      <PageLayout>
        <InputPassword
          visibility
          id="name"
          placeholder="Password"
          label="Password"
        />
      </PageLayout>
    ))
  )
  .add(
    "with Visibility and showPassword by default",
    withInfo("initial state would show what is typed in the input")(() => (
      <PageLayout>
        <InputPassword
          visibility
          showPassword
          id="name"
          placeholder="Password"
          label="Password"
        />
      </PageLayout>
    ))
  );
