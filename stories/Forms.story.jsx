import React, { Component } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Input, Button, Form } from "../src/index";

const PageLayout = styled.div`
  padding: 50px 100px;
  display: flex;
`;

class FormWithValidation extends Component {
  constructor(props) {
    super(props);

    this.validateForms = this.validateForms.bind(this);
  }

  validateForms(validated) {
    validated.forEach(field => {
      const { id, error } = field;
      const input = document.getElementById(id);
      const label = input.parentNode.querySelector(".error-feedback");

      if (error) {
        input.classList.add("invalid");
        label.textContent = error.message;
        return;
      }
      input.classList.remove("invalid");
      label.textContent = "";
    });
  }

  render() {
    const rules = {
      name: { type: "string", required: true },
      email: { type: "email", required: true }
    };

    return (
      <PageLayout>
        <Form submit={this.validateForms} rules={rules}>
          <Input
            id="name"
            placeholder="Please add your name"
            label="First name"
          />
          <Input
            id="email"
            placeholder="Your preferred e-mail"
            label="E-mail"
          />
          <Button htmlType="submit">Submit</Button>
        </Form>
      </PageLayout>
    );
  }
}

storiesOf("Forms", module).add(
  "Form with validation",
  withInfo()(() => <FormWithValidation />)
);
