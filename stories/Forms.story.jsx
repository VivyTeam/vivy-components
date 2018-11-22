import React, { Component } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import {
  Input,
  Button,
  Checkbox,
  Form,
  FormItem,
  InputPassword
} from "../src/index";

const PageLayout = styled.div`
  padding: 50px 100px;

  form {
    width: 100%;
  }

  .documentation {
    li {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  .form-item {
    padding: 15px;
  }
`;

class FormWithValidation extends Component {
  constructor(props) {
    super(props);
    this.state = { showPasswordVisibility: false };
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
    const { showPasswordVisibility } = this.state;
    const rules = {
      name: {
        type: "string",
        required: true,
        whitespace: true
      },
      email: { type: "email", required: true },
      terms: {
        type: "enum",
        enum: ["true"],
        required: true,
        message: "*You must agree to terms",
        transform: value => value.toString()
      }
    };

    return (
      <PageLayout>
        <Form submit={this.validateForms} rules={rules}>
          <FormItem>
            <Input
              id="name"
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
            <InputPassword
              showPassword={showPasswordVisibility}
              toggle={() =>
                this.setState({
                  showPasswordVisibility: !showPasswordVisibility
                })
              }
              id="password"
              placeholder="Your password"
              label="Password"
            />
          </FormItem>
          <FormItem>
            <Checkbox id="terms" name="Terms and Conditions">
              <p>Terms and conditions</p>
            </Checkbox>
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

storiesOf("Forms", module)
  .add(
    "documentation",
    withInfo()(() => (
      <PageLayout>
        <div className="documentation">
          <h2>Official Documentation</h2>
          <p>
            The validation used in Vivy forms takes advantage of the library
            async-validator. The full documentation can be found in the &nbsp;
            <a href="https://github.com/yiminghe/async-validator#api">here.</a>
          </p>
          <h2>Quick Start</h2>
          <ul>
            <li>
              All that is required for validation is to pass a{" "}
              <b>rules object</b> to the
              <b> Form </b> component. This allows the validation to verify each
              rule that belongs to a specific input element.
            </li>
            <li>
              The keys in the rules object match the id of the input elements in
              the html form.
            </li>
            <li>
              All rules can be added within the rules object and there is a
              large standard list of rules built in. For example rules for
              whitespace, email, required, and min/max length are already built
              in. A full list of rules and how to build custom validation can be
              found in the official documentation.
            </li>
          </ul>
        </div>
      </PageLayout>
    ))
  )
  .add("form with validation", withInfo()(() => <FormWithValidation />));
