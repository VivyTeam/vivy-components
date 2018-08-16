import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';
import Icon from '../src/icons/Icon';

const IconsStory = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 100px;
    margin-left: 66px;
    flex-wrap: wrap;
    height: 400px;
  }

  i {
    font-size: 2em;
    margin: 10px;
  }

  h3 {
    font-weight: 400;
  }

  .icon-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

storiesOf('Icons', module).add(
  'Vivy Icons',
  withInfo('Impact')(() => (
    <IconsStory>
      <div className="container">
        <div className="icon-box">
          <Icon name="blood-type" />
          <h3>blood-type</h3>
        </div>
        <div className="icon-box">
          <Icon name="call-contact" />
          <h3>call-contact</h3>
        </div>
        <div className="icon-box">
          <Icon name="contact-info" />
          <h3>contact-info</h3>
        </div>
        <div className="icon-box">
          <Icon name="doctor-info" />
          <h3>doctor-info</h3>
        </div>
        <div className="icon-box">
          <Icon name="gender-female" />
          <h3>gender-female</h3>
        </div>
        <div className="icon-box">
          <Icon name="gender-male" />
          <h3>gender-male</h3>
        </div>
        <div className="icon-box">
          <Icon name="gender-other" />
          <h3>gender-other</h3>
        </div>
        <div className="icon-box">
          <Icon name="medical-health" />
          <h3>medical-health</h3>
        </div>
        <div className="icon-box">
          <Icon name="medical-id" />
          <h3>medical-id</h3>
        </div>
        <div className="icon-box">
          <Icon name="medication-info" />
          <h3>medication-info</h3>
        </div>
        <div className="icon-box">
          <Icon name="organ-donor" />
          <h3>organ-donor</h3>
        </div>
        <div className="icon-box">
          <Icon name="warning-sign" />
          <h3>warning-sign</h3>
        </div>
        <div className="icon-box">
          <Icon name="weight-info" />
          <h3>weight-info</h3>
        </div>
        <div className="icon-box">
          <Icon name="will-information" />
          <h3>will-information</h3>
        </div>
        <div className="icon-box">
          <Icon name="height-icon" />
          <h3>height-icon</h3>
        </div>
      </div>
    </IconsStory>
  ))
);
