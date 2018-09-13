import React from "react";
import PropTypes from "prop-types";
import { I18n, Trans, translate } from "react-i18next";
import SimpleIcon from "./SimpleIcon";
import DetailedIcon from "./DetailedIcon";
import missingAvatar from "../../public/images/empty-avatar.svg";
import MedicalCardStyles from "./medicalCard.style";
import DateDisplay from "../dates/DateDisplay";

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
              {t("pregnancyStatus")} ({t("dueDate")} &nbsp;
              <DateDisplay
                date={pregnancyDueDate.data}
                monthNames={t("months")}
              />)
            </span>
          ) : (
            t("pregnant")
          )
        }
        icon="warning-sign"
        iconColor="#f6be42"
      />
    ) : null;
  const name =
    "name" in user ? (
      user.name
    ) : (
      <Trans i18nKey="nameUnknown">Name unbekannt</Trans>
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
                    monthNames={t("months")}
                  />
                </div>
              ) : (
                <Trans i18nKey="dobUnknown">Geburtsdatum unbekannt</Trans>
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
                    iconDetail={t("organDonor")}
                    icon="organ-donor"
                    iconColor="#fe5533"
                  />
                ) : null}
                {pregnancyStatus}
              </div>
            </div>
          </div>
          <div className="detailed-data">
            <DetailedIcon
              title={t("weight")}
              iconDetail={`${weight} kg`}
              icon="weight-info"
            />
            <DetailedIcon
              title={t("height")}
              iconDetail={`${height} cm`}
              icon="height-icon"
            />
            <DetailedIcon
              title={t("bloodType")}
              iconDetail={bloodType || t("notAvailable")}
              icon="blood-type"
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
