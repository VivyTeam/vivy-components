import React, { Component } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Input, Button, Checkbox, Form, FormItem } from "../src/index";

const PageLayout = styled.div`
  padding: 50px 100px;
  display: flex;

  form {
    width: 100%;
  }

  .form-item {
    padding: 15px;
  }
`;

class FormWithValidation extends Component {
  constructor(props) {
    super(props);

    this.validateForms = this.validateForms.bind(this);
  }

  validateForms(fields, errors) {
    Object.keys(fields).forEach(id => {
      const input = document.getElementById(id);
      const error = errors ? errors[id] : null;
      const label = input.parentNode.querySelector(".error-feedback");

      if (error) {
        const { message } = error[0];
        input.classList.add("invalid");

        label.textContent = message;
        return;
      }

      input.classList.remove("invalid");
      label.textContent = "";
    });
  }

  render() {
    const rules = {
      firstName: {
        type: "string",
        required: true,
        whitespace: true,
        message: "first name is required"
      },
      email: { type: "email", required: true }
    };

    return (
      <PageLayout>
        <Form submit={this.validateForms} rules={rules}>
          <FormItem>
            <Input
              id="firstName"
              placeholder="Please add your first name"
              label="First name"
            />
          </FormItem>
          <FormItem>
            <Input
              id="lastName"
              placeholder="Please add your last name"
              label="Last name"
              optional
            />
          </FormItem>
          <FormItem>
            <Input
              id="email"
              placeholder="Your preferred e-mail"
              label="E-mail"
            />
          </FormItem>
          <FormItem>
            <Checkbox id="newsletter" name="Newsletter" optional>
              <p>Newsletter sign up</p>
            </Checkbox>
          </FormItem>
          <FormItem>
            <Button htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </PageLayout>
    );
  }
}

storiesOf("Forms", module).add(
  "Form with validation",
  withInfo()(() => <FormWithValidation />)
);
