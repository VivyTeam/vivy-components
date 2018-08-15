import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import styled from 'styled-components';
import Icon from '../src/icons/Icon';

const IconsStory = styled.div`
  display: flex;
  flex-direction: row;
`;

setAddon(JSXAddon);

storiesOf('Icons', module).addWithJSX('Primary', () => (
  <IconsStory>
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
  </IconsStory>
));
