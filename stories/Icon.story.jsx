import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";
import { Icon } from "../src/index";

const IconsStory = styled.div`
  .container {
    display: flex;
    margin: auto;
    flex-direction: column;
    color: #575756;
    width: 80%;
  }
  i {
    font-size: 1.5em;
    margin: 10px;
  }
  h3 {
    font-weight: 400;
  }

  .icon-list {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .icon-box {
    display: flex;
    align-items: center;
    width: 340px;
  }
`;

storiesOf("Icons", module).add(
  "Vivy font icon pack",
  withInfo("Simple icon set used for frontend apps")(() => (
    <IconsStory>
      <div className="container">
        <h1>Vivy icons</h1>
        <div className="icon-list">
          <div className="icon-box">
            <Icon name="add" />
            <h3>add</h3>
          </div>
          <div className="icon-box">
            <Icon name="allergy-test" />
            <h3>allergy-test</h3>
          </div>
          <div className="icon-box">
            <Icon name="apotheke" />
            <h3>apotheke</h3>
          </div>
          <div className="icon-box">
            <Icon name="arrow-down" />
            <h3>arrow-down</h3>
          </div>
          <div className="icon-box">
            <Icon name="arrow-left" />
            <h3>arrow-left</h3>
          </div>
          <div className="icon-box">
            <Icon name="arrow-right" />
            <h3>arrow-right</h3>
          </div>
          <div className="icon-box">
            <Icon name="arrow-up" />
            <h3>arrow-up</h3>
          </div>
          <div className="icon-box">
            <Icon name="bank" />
            <h3>bank</h3>
          </div>
          <div className="icon-box">
            <Icon name="barcode" />
            <h3>barcode</h3>
          </div>
          <div className="icon-box">
            <Icon name="blood-test" />
            <h3>blood-test</h3>
          </div>
          <div className="icon-box">
            <Icon name="body" />
            <h3>body</h3>
          </div>
          <div className="icon-box">
            <Icon name="calendar" />
            <h3>calendar</h3>
          </div>
          <div className="icon-box">
            <Icon name="call-filled" />
            <h3>call-filled</h3>
          </div>
          <div className="icon-box">
            <Icon name="call-outline" />
            <h3>call-outline</h3>
          </div>
          <div className="icon-box">
            <Icon name="camera" />
            <h3>camera</h3>
          </div>
          <div className="icon-box">
            <Icon name="checkbox-empty" />
            <h3>checkbox-empty</h3>
          </div>
          <div className="icon-box">
            <Icon name="checkbox-filled" />
            <h3>checkbox-filled</h3>
          </div>
          <div className="icon-box">
            <Icon name="chevron-down" />
            <h3>chevron-down</h3>
          </div>
          <div className="icon-box">
            <Icon name="chevron-left" />
            <h3>chevron-left</h3>
          </div>
          <div className="icon-box">
            <Icon name="chevron-right" />
            <h3>chevron-right</h3>
          </div>
          <div className="icon-box">
            <Icon name="chevron-up" />
            <h3>chevron-up</h3>
          </div>
          <div className="icon-box">
            <Icon name="close" />
            <h3>close</h3>
          </div>
          <div className="icon-box">
            <Icon name="comments" />
            <h3>comments</h3>
          </div>
          <div className="icon-box">
            <Icon name="confirmed-fill" />
            <h3>confirmed-fill</h3>
          </div>
          <div className="icon-box">
            <Icon name="confirmed-filled-16" />
            <h3>confirmed-filled-16</h3>
          </div>
          <div className="icon-box">
            <Icon name="confirmed-outline" />
            <h3>confirmed-outline</h3>
          </div>
          <div className="icon-box">
            <Icon name="confirmed" />
            <h3>confirmed</h3>
          </div>
          <div className="icon-box">
            <Icon name="credit-card" />
            <h3>credit-card</h3>
          </div>
          <div className="icon-box">
            <Icon name="crop" />
            <h3>crop</h3>
          </div>
          <div className="icon-box">
            <Icon name="ct-scan" />
            <h3>ct-scan</h3>
          </div>
          <div className="icon-box">
            <Icon name="current-position-fill" />
            <h3>current-position-fill</h3>
          </div>
          <div className="icon-box">
            <Icon name="customer-service" />
            <h3>customer-service</h3>
          </div>
          <div className="icon-box">
            <Icon name="current-position" />
            <h3>current-position</h3>
          </div>
          <div className="icon-box">
            <Icon name="data-security" />
            <h3>data-security</h3>
          </div>
          <div className="icon-box">
            <Icon name="default" />
            <h3>default</h3>
          </div>
          <div className="icon-box">
            <Icon name="delete" />
            <h3>delete</h3>
          </div>
          <div className="icon-box">
            <Icon name="dentist-filled" />
            <h3>dentist-filled</h3>
          </div>
          <div className="icon-box">
            <Icon name="dentist-outline" />
            <h3>dentist-outline</h3>
          </div>
          <div className="icon-box">
            <Icon name="diagnose" />
            <h3>diagnose</h3>
          </div>
          <div className="icon-box">
            <Icon name="directions" />
            <h3>directions</h3>
          </div>
          <div className="icon-box">
            <Icon name="doctor" />
            <h3>doctor</h3>
          </div>
          <div className="icon-box">
            <Icon name="doctors-letter" />
            <h3>doctors-letter</h3>
          </div>
          <div className="icon-box">
            <Icon name="document-review" />
            <h3>document-review</h3>
          </div>
          <div className="icon-box">
            <Icon name="document-scanning" />
            <h3>document-scanning</h3>
          </div>
          <div className="icon-box">
            <Icon name="document-unsupported" />
            <h3>document-unsupported</h3>
          </div>
          <div className="icon-box">
            <Icon name="document-upload" />
            <h3>document-upload</h3>
          </div>
          <div className="icon-box">
            <Icon name="documents" />
            <h3>documents</h3>
          </div>
          <div className="icon-box">
            <Icon name="done" />
            <h3>done</h3>
          </div>
          <div className="icon-box">
            <Icon name="doucment-processed" />
            <h3>doucment-processed</h3>
          </div>
          <div className="icon-box">
            <Icon name="ecg" />
            <h3>ecg</h3>
          </div>
          <div className="icon-box">
            <Icon name="edit" />
            <h3>edit</h3>
          </div>
          <div className="icon-box">
            <Icon name="email" />
            <h3>email</h3>
          </div>
          <div className="icon-box">
            <Icon name="evening" />
            <h3>evening</h3>
          </div>
          <div className="icon-box">
            <Icon name="event" />
            <h3>event</h3>
          </div>
          <div className="icon-box">
            <Icon name="exercise" />
            <h3>exercise</h3>
          </div>
          <div className="icon-box">
            <Icon name="export-data" />
            <h3>export-data</h3>
          </div>
          <div className="icon-box">
            <Icon name="failed-filled-16" />
            <h3>failed-filled-16</h3>
          </div>
          <div className="icon-box">
            <Icon name="failed-outline" />
            <h3>failed-outline</h3>
          </div>
          <div className="icon-box">
            <Icon name="feedback" />
            <h3>feedback</h3>
          </div>
          <div className="icon-box">
            <Icon name="file-error" />
            <h3>file-error</h3>
          </div>
          <div className="icon-box">
            <Icon name="flash-off" />
            <h3>flash-off</h3>
          </div>
          <div className="icon-box">
            <Icon name="flash-on" />
            <h3>flash-on</h3>
          </div>
          <div className="icon-box">
            <Icon name="folder-default" />
            <h3>folder-default</h3>
          </div>
          <div className="icon-box">
            <Icon name="folder-secured" />
            <h3>folder-secured</h3>
          </div>
          <div className="icon-box">
            <Icon name="food" />
            <h3>food</h3>
          </div>
          <div className="icon-box">
            <Icon name="gallery" />
            <h3>gallery</h3>
          </div>
          <div className="icon-box">
            <Icon name="gender-both" />
            <h3>gender-both</h3>
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
            <Icon name="gender-other-16" />
            <h3>gender-other-16</h3>
          </div>
          <div className="icon-box">
            <Icon name="happy" />
            <h3>happy</h3>
          </div>
          <div className="icon-box">
            <Icon name="health-check" />
            <h3>health-check</h3>
          </div>
          <div className="icon-box">
            <Icon name="health-records" />
            <h3>health-records</h3>
          </div>
          <div className="icon-box">
            <Icon name="health-report" />
            <h3>health-report</h3>
          </div>
          <div className="icon-box">
            <Icon name="height" />
            <h3>height</h3>
          </div>
          <div className="icon-box">
            <Icon name="help" />
            <h3>help</h3>
          </div>
          <div className="icon-box">
            <Icon name="history" />
            <h3>history</h3>
          </div>
          <div className="icon-box">
            <Icon name="info" />
            <h3>info</h3>
          </div>
          <div className="icon-box">
            <Icon name="insurance" />
            <h3>insurance</h3>
          </div>
          <div className="icon-box">
            <Icon name="invoice" />
            <h3>invoice</h3>
          </div>
          <div className="icon-box">
            <Icon name="key-private" />
            <h3>key-private</h3>
          </div>
          <div className="icon-box">
            <Icon name="key-publicons" />
            <h3>key-publicons</h3>
          </div>
          <div className="icon-box">
            <Icon name="key" />
            <h3>key</h3>
          </div>
          <div className="icon-box">
            <Icon name="lab" />
            <h3>lab</h3>
          </div>
          <div className="icon-box">
            <Icon name="legal" />
            <h3>legal</h3>
          </div>
          <div className="icon-box">
            <Icon name="location" />
            <h3>location</h3>
          </div>
          <div className="icon-box">
            <Icon name="lot-number" />
            <h3>lot-number</h3>
          </div>
          <div className="icon-box">
            <Icon name="lungs" />
            <h3>lungs</h3>
          </div>
          <div className="icon-box">
            <Icon name="map-default" />
            <h3>map-default</h3>
          </div>
          <div className="icon-box">
            <Icon name="map-location-marker" />
            <h3>map-location-marker</h3>
          </div>
          <div className="icon-box">
            <Icon name="market-place" />
            <h3>market-place</h3>
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
            <Icon name="medications" />
            <h3>medications</h3>
          </div>
          <div className="icon-box">
            <Icon name="memory-sd" />
            <h3>memory-sd</h3>
          </div>
          <div className="icon-box">
            <Icon name="menu" />
            <h3>menu</h3>
          </div>
          <div className="icon-box">
            <Icon name="message-filled" />
            <h3>message-filled</h3>
          </div>
          <div className="icon-box">
            <Icon name="message-outline" />
            <h3>message-outline</h3>
          </div>
          <div className="icon-box">
            <Icon name="mind" />
            <h3>mind</h3>
          </div>
          <div className="icon-box">
            <Icon name="money" />
            <h3>money</h3>
          </div>
          <div className="icon-box">
            <Icon name="more-horizontal" />
            <h3>more-horizontal</h3>
          </div>
          <div className="icon-box">
            <Icon name="more-vertical" />
            <h3>more-vertical</h3>
          </div>
          <div className="icon-box">
            <Icon name="morning" />
            <h3>morning</h3>
          </div>
          <div className="icon-box">
            <Icon name="mri-scan" />
            <h3>mri-scan</h3>
          </div>
          <div className="icon-box">
            <Icon name="new-folder" />
            <h3>new-folder</h3>
          </div>
          <div className="icon-box">
            <Icon name="night" />
            <h3>night</h3>
          </div>
          <div className="icon-box">
            <Icon name="noon" />
            <h3>noon</h3>
          </div>
          <div className="icon-box">
            <Icon name="notifications" />
            <h3>notifications</h3>
          </div>
          <div className="icon-box">
            <Icon name="open-in-new" />
            <h3>open-in-new</h3>
          </div>
          <div className="icon-box">
            <Icon name="ophthalmologist" />
            <h3>ophthalmologist</h3>
          </div>
          <div className="icon-box">
            <Icon name="organ-donor-16" />
            <h3>organ-donor-16</h3>
          </div>
          <div className="icon-box">
            <Icon name="other-document" />
            <h3>other-document</h3>
          </div>
          <div className="icon-box">
            <Icon name="password" />
            <h3>password</h3>
          </div>
          <div className="icon-box">
            <Icon name="pediatrician-filled" />
            <h3>pediatrician-filled</h3>
          </div>
          <div className="icon-box">
            <Icon name="pediatrician-outline" />
            <h3>pediatrician-outline</h3>
          </div>
          <div className="icon-box">
            <Icon name="performance" />
            <h3>performance</h3>
          </div>
          <div className="icon-box">
            <Icon name="personal-link" />
            <h3>personal-link</h3>
          </div>
          <div className="icon-box">
            <Icon name="photo-add" />
            <h3>photo-add</h3>
          </div>
          <div className="icon-box">
            <Icon name="prescription" />
            <h3>prescription</h3>
          </div>
          <div className="icon-box">
            <Icon name="qr-code" />
            <h3>qr-code</h3>
          </div>
          <div className="icon-box">
            <Icon name="question-mark" />
            <h3>question-mark</h3>
          </div>
          <div className="icon-box">
            <Icon name="radio-button-empty" />
            <h3>radio-button-empty</h3>
          </div>
          <div className="icon-box">
            <Icon name="radio-button-filled-alt" />
            <h3>radio-button-filled-alt</h3>
          </div>
          <div className="icon-box">
            <Icon name="radio-button-filled" />
            <h3>radio-button-filled</h3>
          </div>
          <div className="icon-box">
            <Icon name="recommended-16" />
            <h3>recommended-16</h3>
          </div>
          <div className="icon-box">
            <Icon name="record" />
            <h3>record</h3>
          </div>
          <div className="icon-box">
            <Icon name="referral-letter" />
            <h3>referral-letter</h3>
          </div>
          <div className="icon-box">
            <Icon name="remove-fill" />
            <h3>remove-fill</h3>
          </div>
          <div className="icon-box">
            <Icon name="request-document" />
            <h3>request-document</h3>
          </div>
          <div className="icon-box">
            <Icon name="reset" />
            <h3>reset</h3>
          </div>
          <div className="icon-box">
            <Icon name="retry" />
            <h3>retry</h3>
          </div>
          <div className="icon-box">
            <Icon name="rotate" />
            <h3>rotate</h3>
          </div>
          <div className="icon-box">
            <Icon name="sad" />
            <h3>sad</h3>
          </div>
          <div className="icon-box">
            <Icon name="search" />
            <h3>search</h3>
          </div>
          <div className="icon-box">
            <Icon name="settings" />
            <h3>settings</h3>
          </div>
          <div className="icon-box">
            <Icon name="share-alt" />
            <h3>share-alt</h3>
          </div>
          <div className="icon-box">
            <Icon name="share-with-doctor" />
            <h3>share-with-doctor</h3>
          </div>
          <div className="icon-box">
            <Icon name="share-with-user" />
            <h3>share-with-user</h3>
          </div>
          <div className="icon-box">
            <Icon name="share" />
            <h3>share</h3>
          </div>
          <div className="icon-box">
            <Icon name="shared" />
            <h3>shared</h3>
          </div>
          <div className="icon-box">
            <Icon name="show-pass-off" />
            <h3>show-pass-off</h3>
          </div>
          <div className="icon-box">
            <Icon name="show-pass-on" />
            <h3>show-pass-on</h3>
          </div>
          <div className="icon-box">
            <Icon name="sick-note" />
            <h3>sick-note</h3>
          </div>
          <div className="icon-box">
            <Icon name="signature" />
            <h3>signature</h3>
          </div>
          <div className="icon-box">
            <Icon name="sort" />
            <h3>sort</h3>
          </div>
          <div className="icon-box">
            <Icon name="star-filled" />
            <h3>star-filled</h3>
          </div>
          <div className="icon-box">
            <Icon name="star-half-filled" />
            <h3>star-half-filled</h3>
          </div>
          <div className="icon-box">
            <Icon name="surgery" />
            <h3>surgery</h3>
          </div>
          <div className="icon-box">
            <Icon name="tap" />
            <h3>tap</h3>
          </div>
          <div className="icon-box">
            <Icon name="tick-small" />
            <h3>tick-small</h3>
          </div>
          <div className="icon-box">
            <Icon name="tick" />
            <h3>tick</h3>
          </div>
          <div className="icon-box">
            <Icon name="time" />
            <h3>time</h3>
          </div>
          <div className="icon-box">
            <Icon name="timeline" />
            <h3>timeline</h3>
          </div>
          <div className="icon-box">
            <Icon name="trackers" />
            <h3>trackers</h3>
          </div>
          <div className="icon-box">
            <Icon name="trade-name" />
            <h3>trade-name</h3>
          </div>
          <div className="icon-box">
            <Icon name="trends" />
            <h3>trends</h3>
          </div>
          <div className="icon-box">
            <Icon name="user" />
            <h3>user</h3>
          </div>
          <div className="icon-box">
            <Icon name="vaccination-add-entry" />
            <h3>vaccination-add-entry</h3>
          </div>
          <div className="icon-box">
            <Icon name="vaccination-regular" />
            <h3>vaccination-regular</h3>
          </div>
          <div className="icon-box">
            <Icon name="vaccination-travel" />
            <h3>vaccination-travel</h3>
          </div>
          <div className="icon-box">
            <Icon name="vaccination" />
            <h3>vaccination</h3>
          </div>
          <div className="icon-box">
            <Icon name="warning-circle-filled" />
            <h3>warning-circle-filled</h3>
          </div>
          <div className="icon-box">
            <Icon name="warning-circle-outline" />
            <h3>warning-circle-outline</h3>
          </div>
          <div className="icon-box">
            <Icon name="warning-triangle-filled" />
            <h3>warning-triangle-filled</h3>
          </div>
          <div className="icon-box">
            <Icon name="warning-triangle-outline" />
            <h3>warning-triangle-outline</h3>
          </div>
          <div className="icon-box">
            <Icon name="web" />
            <h3>web</h3>
          </div>
          <div className="icon-box">
            <Icon name="weight" />
            <h3>weight</h3>
          </div>
          <div className="icon-box">
            <Icon name="xray" />
            <h3>xray</h3>
          </div>
        </div>
      </div>
    </IconsStory>
  ))
);
