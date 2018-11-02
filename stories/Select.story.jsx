import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Select } from "../src/index";

const PageLayout = styled.div`
  padding: 50px 100px;
  display: flex;
`;

storiesOf("Select", module).add(
  "checkbox",
  withInfo()(() => (
    <PageLayout>
      <Select id="newsletter" name="newsletter" value="yes">
        Select something
      </Select>
    </PageLayout>
  ))
);
