import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";
import Icon from "../src/icons/Icon";

const IconsStory = styled.div`
  .container {
    display: flex;
    margin: 80px 0 50px 110px;
    flex-direction: column;
    color: #575756;
  }

  i {
    font-size: 2em;
    margin: 10px;
  }

  h3 {
    font-weight: 400;
  }

  .title {
    font-size: 22px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.91;
    letter-spacing: normal;
    color: #898988;
    text-transform: uppercase;
  }

  .icon-list {
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    height: 500px;
  }

  .icon-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

storiesOf("Icons", module).add(
  "Vivy font icon pack",
  withInfo("Simple icon set used for frontend apps")(() => (
    <IconsStory>
      <div className="container">
        <div className="title">Icons</div>
        <div className="icon-list">
          <div className="icon-box">
            <Icon name="blood-type" />
            <h3>blood-type</h3>
          </div>
          <div className="icon-box">
            <Icon name="call-contact" />
            <h3>call-contact</h3>
          </div>
          <div className="icon-box">
            <Icon name="phone-number" />
            <h3>phone-number</h3>
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
          <div className="icon-box">
            <Icon name="calendar-date" />
            <h3>calendar-date</h3>
          </div>
          <div className="icon-box">
            <Icon name="insurance-shield" />
            <h3>insurance-shield</h3>
          </div>
        </div>
      </div>
    </IconsStory>
  ))
);
