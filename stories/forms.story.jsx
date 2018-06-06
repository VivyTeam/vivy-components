import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import Input from '../src/forms/Input';

setAddon(JSXAddon);

const container = {
  width: '60%',
  margin: '0 auto',
  paddingTop: '100px',
};

const box = {
  margin: '50px 10px',
};

storiesOf('Forms', module)
  .addWithJSX('Input', () => (
    <div style={container}>
      <div style={box}>
        <Input
          id="name"
          placeholder="Your name"
          label="Name"
        />
      </div>
      <div style={box}>
        <Input
          id="Email"
          placeholder="Your e-mail"
          label="E-mail"
          type="email"
          isRequired
        />
      </div>
      <div style={box}>
        <Input
          id="password"
          placeholder="Your password"
          label="Password"
          type="password"
          isRequired
        />
      </div>
    </div>
  ));
