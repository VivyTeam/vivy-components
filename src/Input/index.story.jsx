import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import styled from "styled-components";
import { Row, Button, Form, Input } from "../index";

setAddon(JSXAddon);

const FormContainer = styled.div`
  margin: 50px 150px;

  h2 {
    color: #575756;
    font-size: 1.25em;
  }

  button {
    margin-right: 10px;
  }
`;

storiesOf("Forms", module)
  .addWithJSX("Input", () => (
    <FormContainer>
      <Input id="name" placeholder="Your name" label="Name" />
    </FormContainer>
  ))
  .addWithJSX("Simple Form", () => (
    <FormContainer>
      <h2>Vertical form (default)</h2>
      <Form>
        <Input
          id="email"
          placeholder="Your e-mail"
          label="E-mail"
          type="email"
        />
        <Input
          id="password"
          placeholder="Your password"
          label="Password"
          type="password"
          isRequired
        />
      </Form>
      <h2>Horizontal form</h2>
      <Form horizontal>
        <Input
          id="email2"
          placeholder="Your e-mail"
          label="E-mail"
          type="email"
        />
        <Input
          id="password2"
          placeholder="Your password"
          label="Password"
          type="password"
          isRequired
        />
      </Form>
    </FormContainer>
  ))
  .addWithJSX("Form Validation", () => (
    <FormContainer>
      <Form>
        <Input id="name" placeholder="Your name" label="Name" />
        <Input id="phone" placeholder="Your phone" label="Phone" type="phone" />

        <Input
          id="email"
          placeholder="Your e-mail"
          label="E-mail"
          type="email"
          isRequired
        />

        <Input
          id="password"
          placeholder="Your password"
          label="Password"
          type="password"
          isRequired
        />

        <Row>
          <Button type="secondary">login</Button>
          <Button type="quaternary">clear</Button>
        </Row>
      </Form>
    </FormContainer>
  ));
