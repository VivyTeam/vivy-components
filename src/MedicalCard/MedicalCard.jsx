import React from "react";
import PropTypes from "prop-types";
import { I18n, Trans, translate } from "react-i18next";
import SimpleIcon from "./SimpleIcon";
import DetailedIcon from "./DetailedIcon";
import missingAvatar from "../../public/images/empty-avatar.svg";
import MedicalCardStyles from "./medicalCard.style";
import DateDisplay from "../DateDisplay";

function MedicalCard({ user, data, t }) {
  const {
    pregnancyDueDate,
    organDonor,
    height,
    weight,
    bloodType,
    gender
  } = data;
  const pregnancyStatus =
    pregnancyDueDate && Object.keys(pregnancyDueDate).length > 0 ? (
      <SimpleIcon
        iconDetail={
          pregnancyDueDate.data ? (
            <span className="date-format">
              {t("component.pregnancyStatus")}
              &nbsp;({t("component.dueDate")}&nbsp;
              <DateDisplay
                date={pregnancyDueDate.data}
                monthNames={t("component.months")}
              />)
            </span>
          ) : (
            t("component.pregnant")
          )
        }
        icon="warning-triangle-outline"
        iconColor="#f6be42"
      />
    ) : null;
  const name =
    "name" in user ? (
      user.name
    ) : (
      <Trans i18nKey="component.nameUnknown">Name unbekannt</Trans>
    );
  const picture =
    "pictureBase64" in user
      ? `data:image/png;base64, ${user.pictureBase64}`
      : missingAvatar;

  return (
    <I18n ns="translations">
      {() => (
        <MedicalCardStyles>
          <div className="user-profile">
            <img src={picture} alt="User Profile" />
            <div className="medical-data">
              <h2>{name}</h2>
              {"dateOfBirth" in user ? (
                <div className="date-format">
                  <DateDisplay
                    date={user.dateOfBirth}
                    monthNames={t("component.months")}
                  />
                </div>
              ) : (
                <Trans i18nKey="component.dobUnknown">
                  Geburtsdatum unbekannt
                </Trans>
              )}
              <div className="basic-data">
                {gender ? (
                  <SimpleIcon
                    iconDetail={gender.text}
                    icon={gender.icon}
                    iconColor="#61d3c1"
                  />
                ) : null}
                {organDonor ? (
                  <SimpleIcon
                    iconDetail={t("component.organDonor")}
                    icon="organ-donor-16"
                    iconColor="#fe5533"
                  />
                ) : null}
                {pregnancyStatus}
              </div>
            </div>
          </div>
          <div className="detailed-data">
            <DetailedIcon
              title={t("component.weight")}
              iconDetail={`${weight} kg`}
              icon="weight"
            />
            <DetailedIcon
              title={t("component.height")}
              iconDetail={`${height} cm`}
              icon="height"
            />
            <DetailedIcon
              title={t("component.bloodType")}
              iconDetail={bloodType || t("component.notAvailable")}
              icon="blood-test"
            />
          </div>
        </MedicalCardStyles>
      )}
    </I18n>
  );
}

MedicalCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    dateOfBirth: PropTypes.string,
    pictureBase64: PropTypes.string
  }).isRequired,
  data: PropTypes.shape({
    pregnancyDueDate: PropTypes.shape({
      data: PropTypes.string
    }),
    organDonor: PropTypes.string,
    height: PropTypes.string,
    weight: PropTypes.string,
    bloodType: PropTypes.string,
    gender: PropTypes.shape({})
  }).isRequired,
  t: PropTypes.func.isRequired
};

export default translate()(MedicalCard);
