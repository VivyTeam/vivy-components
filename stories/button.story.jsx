import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/button/Button';

storiesOf('Button', module)
  .add('Primary button', () =>
    (
      <div>
        <div style={{ marginBottom: '10px' }}>
          <Button onClick={action('button-clicked')}>Primary Button</Button>
        </div>
        <Button
          onClick={action('disabled')}
          disabled
        >
          Primary Disabled
        </Button>
      </div>
    ))
  .add('Alt button', () =>
    (
      <div>
        <div style={{ marginBottom: '10px' }}>
          <Button
            type="alt"
            onClick={() => { action('alt button'); }}
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
  .add('Danger button', () => (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <Button
          type="danger"
          onClick={() => { action('danger button'); }}
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
