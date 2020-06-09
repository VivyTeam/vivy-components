import React from "react";
import { storiesOf } from "@storybook/react";
import { ValidationRules } from "../src/Forms/Validation";

import {
  Button,
  Checkbox,
  Form,
  Input,
  InputPassword,
  Row,
  Col,
  Validation,
  InputMasked,
} from "../src";

const rules: ValidationRules = {
  name: [
    { type: "string", required: true, message: "Username is required" },
    {
      type: "string",
      min: 8,
      message: "Minimum characters is 8",
    },
  ],
  code: [
    {
      type: "string",
      required: true,
      message: "Emergency sticker code is required",
    },
    {
      type: "string",
      min: 19, // plus 3 dashed from mask
      message: "Minimum characters is 16",
    },
  ],
  password: [
    {
      type: "string",
      required: true,
      message: "Password is required",
    },
    {
      type: "string",
      min: 5,
      message: "Minimum characters is 5",
    },
  ],
  email: { type: "email", required: true },
  terms: {
    type: "enum",
    enum: ["true"],
    required: true,
    message: "*You must agree to terms",
    transform: (value = false) => value.toString(),
  },
};

const record = console;

storiesOf("Form", module)
  .add("documentation", () => (
    <Row position="center">
      <Col lg={8}>
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
      </Col>
    </Row>
  ))
  .add(
    "without validation",
    () => (
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
            />
            <Button style={{ marginTop: "4vh" }} htmlType="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    ),
    { info: "Using the Form without any validation" }
  )
  .add(
    "with validation",
    () => (
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
              />
              <InputMasked
                mask="****–****–****–****"
                maskChar={null}
                id="code"
                placeholder="Please add your Emergency sticker code here."
                label="Emergency sticker unique code"
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
    ),
    { info: "Using the Context API to share functionality" }
  )
  .add(
    "inactive validation on value change",
    () => (
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
                validateOnChange={false}
                id="name"
                placeholder="Please add your first name"
                label="First name"
              />
              <InputMasked
                validateOnChange={false}
                mask="****–****–****–****"
                maskChar={null}
                id="code"
                placeholder="Please add your Emergency sticker code here."
                label="Emergency sticker unique code"
              />
              <InputPassword
                validateOnChange={false}
                showPassword={false}
                toggle={() => {}}
                id="password"
                placeholder="Please add your password"
                label="Password"
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
    ),
    {
      info:
        "validateOnChange=false means the validation wont happen each time the input value is changing",
    }
  )
  .add(
    "inactive validation on value change and on blur",
    () => (
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
                validateOnBlur={false}
                validateOnChange={false}
                id="name"
                placeholder="Please add your first name"
                label="First name"
              />
              <InputMasked
                validateOnBlur={false}
                validateOnChange={false}
                mask="****–****–****–****"
                maskChar={null}
                id="code"
                placeholder="Please add your Emergency sticker code here."
                label="Emergency sticker unique code"
              />
              <InputPassword
                validateOnBlur={false}
                showPassword={false}
                id="password"
                placeholder="Please add your password"
                label="Password"
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
    ),
    {
      info:
        "validateOnBlur=false means the validation wont happen each time the input changes focus. eg clicking outside of a input field will normally trigger the onBlur validation",
    }
  );
