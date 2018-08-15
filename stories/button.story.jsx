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

stories
  .addWithJSX('Primary', () => (
    <div style={container}>
      <div style={{ marginBottom: '10px' }}>
        <Button
          onClick={() => click('Button clicked!')}
          styles={object('Primary Button', {}, 'primary-button')}
        >
          Primary Button
        </Button>
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
