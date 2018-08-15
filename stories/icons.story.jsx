import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';
import Icon from '../src/icons/Icon';

const IconsStory = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 200px;
  }

  i {
    font-size: 2em;
    margin: 10px;
  }
`;

storiesOf('Icons', module).add(
  'Vivy Icons',
  withInfo('Impact')(() => (
    <IconsStory>
      <div className="container">
        <Icon name="blood-type" />
        <Icon name="call-contact" />
        <Icon name="contact-info" />
        <Icon name="doctor-info" />
        <Icon name="gender-female" />
        <Icon name="gender-male" />
        <Icon name="gender-other" />
        <Icon name="medical-health" />
        <Icon name="medical-id" />
        <Icon name="medication-info" />
        <Icon name="organ-donor" />
        <Icon name="warning-sign" />
        <Icon name="weight-info" />
        <Icon name="will-information" />
        <Icon name="height-icon" />
      </div>
    </IconsStory>
  ))
);
