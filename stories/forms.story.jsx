import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import styled from 'styled-components';
import Form from '../src/forms/Form';
import FormItem from '../src/forms/FormItem';
import Input from '../src/forms/Input';
import Button from '../src/button/Button';
import Row from '../src/grid/Row';

setAddon(JSXAddon);

const container = {
  margin: '40px 30px',
};

const box = {
  margin: '40px 30px',
};

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

storiesOf('Forms', module)
  .addWithJSX('Input', () => (
    <div style={container}>
      <div style={box}>
        <Input id="name" placeholder="Your name" label="Name" />
      </div>
    </div>
  ))
  .addWithJSX('Simple Form', () => (
    <FormContainer>
      <h2>Vertical form (default)</h2>
      <Form>
        <FormItem>
          <Input
            id="email"
            placeholder="Your e-mail"
            label="E-mail"
            type="email"
          />
        </FormItem>
        <FormItem>
          <Input
            id="password"
            placeholder="Your password"
            label="Password"
            type="password"
            isRequired
          />
        </FormItem>
      </Form>
      <h2>Horizontal form</h2>
      <Form horizontal>
        <FormItem>
          <Input
            id="email2"
            placeholder="Your e-mail"
            label="E-mail"
            type="email"
          />
        </FormItem>
        <FormItem>
          <Input
            id="password2"
            placeholder="Your password"
            label="Password"
            type="password"
            isRequired
          />
        </FormItem>
      </Form>
    </FormContainer>
  ))
  .addWithJSX('Form Validation', () => (
    <FormContainer>
      <Form>
        <FormItem>
          <Input id="name" placeholder="Your name" label="Name" />
        </FormItem>
        <FormItem>
          <Input
            id="phone"
            placeholder="Your phone"
            label="Phone"
            type="phone"
          />
        </FormItem>
        <FormItem>
          <Input
            id="email"
            placeholder="Your e-mail"
            label="E-mail"
            type="email"
            isRequired
          />
        </FormItem>
        <FormItem>
          <Input
            id="password"
            placeholder="Your password"
            label="Password"
            type="password"
            isRequired
          />
        </FormItem>
        <FormItem>
          <Row>
            <Button type="secondary">login</Button>
            <Button type="quarternary">clear</Button>
          </Row>
        </FormItem>
      </Form>
    </FormContainer>
  ));
