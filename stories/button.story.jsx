import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Button from '../src/button/Button';

const click = action('Button');

const ButtonStyles = styled.div`
  margin: 0 auto;
  padding: 40px 50px;

  h1 {
    margin-bottom: 66.6px;
    font-size: 22px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.91;
    letter-spacing: normal;
    color: #898988;
    text-transform: uppercase;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: #575756;
  }

  .list {
    display: flex;
    flex-direction: row;
    margin-top: 27px;
    margin-bottom: 50px;
  }

  button {
    margin-right: 25px;
  }
`;

storiesOf('Buttons', module).add(
  'Button List',
  withInfo('Buttons used throughout web apps')(() => (
    <ButtonStyles>
      <h1>Buttons</h1>

      <h2>Primary Call to Action</h2>
      <div className="list">
        <Button onClick={() => click('button clicked!')}>Call to Action</Button>
        <Button onClick={() => click('button clicked!')} icon="call-contact">
          Call to Action
        </Button>
      </div>
      <h2>Secondary Call to Action</h2>
      <div className="list">
        <Button type="secondary" onClick={() => click('button clicked!')}>
          Call to Action
        </Button>
        <Button
          type="secondary"
          onClick={() => click('button clicked!')}
          icon="call-contact"
        >
          Call to Action
        </Button>
      </div>
      <h2>Tertiary Call to Action</h2>
      <div className="list">
        <Button type="tertiary" onClick={() => click('button clicked!')}>
          Call to Action
        </Button>
        <Button
          type="tertiary"
          onClick={() => click('button clicked!')}
          icon="call-contact"
        >
          Call to Action
        </Button>
      </div>
      <h2>Disabled</h2>
      <div className="list">
        <Button disabled type="secondary" onClick={() => click('disabled')}>
          Disabled
        </Button>
      </div>
    </ButtonStyles>
  ))
);
