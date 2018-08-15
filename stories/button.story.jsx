import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import Button from '../src/button/Button';

const click = action('Button');

setAddon(JSXAddon);

const container = {
  margin: '0 auto',
  paddingTop: '5px',
};

storiesOf('Button', module)
  .addWithJSX('Primary', () => (
    <div style={container}>
      <div style={{ marginBottom: '10px' }}>
        <Button onClick={() => click('Button clicked!')}>Primary Button</Button>
      </div>
    </div>
  ))
  .addWithJSX('Outline', () => (
    <div style={container}>
      <div style={{ marginBottom: '10px' }}>
        <Button type="outline" onClick={() => click('Button clicked!')}>
          Outline Button
        </Button>
      </div>
    </div>
  ));
