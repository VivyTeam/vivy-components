import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Checkbox } from "../src/index";

const PageLayout = styled.div`
  padding: 50px 100px;
  display: flex;
`;

storiesOf("Checkbox", module)
  .add("basic", () => (
    <PageLayout>
      <Checkbox id="newsletter" name="newsletter">
        Sign up newsletter
      </Checkbox>
    </PageLayout>
  ))
  .add("optional", () => (
    <PageLayout>
      <Checkbox id="newsletter" name="newsletter" optional>
        Sign up newsletter
      </Checkbox>
    </PageLayout>
  ));
