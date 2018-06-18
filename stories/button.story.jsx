import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { object, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import Button from '../src/button/Button';

const click = action('Button');
const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
setAddon(JSXAddon);

const container = {
  margin: '0 auto',
  paddingTop: '5px',
};

stories.addWithJSX('Primary', () => (
  <div style={container}>
    <div style={{ marginBottom: '10px' }}>
      <Button
        onClick={() => click('Primary click')}
        styles={object('Primary Button', {}, 'primary-button')}
      >
        Primary Button
      </Button>
    </div>
    <Button
      onClick={() => {}}
      disabled
    >
      Primary Disabled
    </Button>
  </div>
)).addWithJSX('Alt', () => (
  <div style={container}>
    <div style={{ marginBottom: '10px' }}>
      <Button
        type="alt"
        onClick={() => click('Alt click')}
        styles={object('Alt Button', {}, 'alt-button')}
      >
        Alt Button
      </Button>
    </div>
    <Button
      type="alt"
      onClick={() => {}}
      disabled
    >
          Alt Disabled
    </Button>
  </div>
))
  .addWithJSX('Danger', () => (
    <div style={container}>
      <div style={{ marginBottom: '10px' }}>
        <Button
          type="danger"
          onClick={() => click('Danger click')}
          styles={object('Danger Button', {}, 'danger-button')}
        >
          Danger Button
        </Button>
      </div>
      <Button
        type="danger"
        onClick={() => {}}
        disabled
      >
          Danger Disabled
      </Button>
    </div>
  ));
