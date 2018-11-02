import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Checkbox } from "../src/index";

const PageLayout = styled.div`
  padding: 50px 100px;
  display: flex;
`;

storiesOf("Checkbox", module).add(
  "optional checkbox",
  withInfo()(() => (
    <PageLayout>
      <Checkbox id="newsletter" name="newsletter" value="yes">
        Sign up newsletter
      </Checkbox>
    </PageLayout>
  ))
);
