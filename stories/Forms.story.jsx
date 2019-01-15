import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputPassword,
  Row,
  Validation
} from "../src";

const rules = {
  name: [
    { type: "string", required: true, message: "Username is required" },
    {
      type: "string",
      min: 8,
      message: "Minimum characters is 8"
    }
  ],
  password: {
    type: "string",
    required: true,
    message: "Password is required"
  },
  email: { type: "email", required: true },
  terms: {
    type: "enum",
    enum: ["true"],
    required: true,
    message: "*You must agree to terms",
    transform: (value = false) => value.toString()
  }
};

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

const record = console;

storiesOf("Forms", module)
  .add("documentation", () => (
    <PageLayout>
      <div className="documentation">
        <h2>Official Documentation</h2>
        <h3>High level overview of this story</h3>
        <p>
          We use <a href="https://reactjs.org/docs/context.html">Context</a> as
          way to share functionality into nested. Context provides a way to pass
          data through the component tree without having to pass props down
          manually at every level.
        </p>
        <p>
          The validation used in Vivy forms takes advantage of the library
          async-validator. The full documentation can be found in the &nbsp;
          <a href="https://github.com/yiminghe/async-validator#api">here.</a>
        </p>
        <p>
          Having a Context Provide named <b>Validation</b> as a parent component
          of the <b>Form</b> and parsing into it certain rules will validate the
          form on the fly and return the errors for each input.
        </p>
        <h2>Quick Start</h2>
        <ul>
          <li>
            All that is required for validation is to pass a <b>rules object</b>{" "}
            to the
            <b> Validation </b> component. This allows the validation to verify
            each rule that belongs to a specific input element.
          </li>
          <li>
            The keys in the rules object match the id of the input elements in
            the html form.
          </li>
          <li>
            All rules can be added within the rules object and there is a large
            standard list of rules built in. For example rules for whitespace,
            email, required, and min/max length are already built in. A full
            list of rules and how to build custom validation can be found in the
            official documentation.
          </li>
        </ul>
      </div>
    </PageLayout>
  ))
  .add(
    "without Validation",
    withInfo("Using the Form without any validation")(() => (
      <Row position="center">
        <Col lg={9}>
          <Form
            submit={(fields, event) => {
              record.log(`Fields: ${JSON.stringify(fields)}`);
              record.log(event);
            }}
          >
            <Input
              id="name"
              placeholder="Please add your first name"
              label="First name"
            />
            <Input
              id="lastName"
              placeholder="Please add your last name"
              label="Last name"
              optional
            />
            <Button style={{ marginTop: "4vh" }} htmlType="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    ))
  )
  .add(
    "with Validation",
    withInfo("Using the Context API to share functionality")(() => (
      <Row position="center">
        <Col lg={9}>
          <Validation rules={rules}>
            <Form
              submit={(fields, event) => {
                record.log(`Fields: ${JSON.stringify(fields)}`);
                record.log(event);
              }}
            >
              <Input
                id="name"
                placeholder="Please add your first name"
                label="First name"
              />
              <Input
                id="lastName"
                placeholder="Please add your last name"
                label="Last name"
                optional
              />
              <InputPassword
                showPassword={false}
                toggle={() => {}}
                id="password"
                placeholder="Please add your password"
                label="Password"
              />
              <Input
                id="email"
                placeholder="Please add your e-mail"
                label="E-mail"
              />

              <Checkbox id="terms" name="Terms and Conditions">
                <p>Terms and conditions</p>
              </Checkbox>

              <Checkbox id="newsletter" name="Newsletter" optional>
                <p>Newsletter sign up</p>
              </Checkbox>
              <Button htmlType="submit">Submit</Button>
            </Form>
          </Validation>
        </Col>
      </Row>
    ))
  );
