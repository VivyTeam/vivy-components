import React from "react";
import PropTypes from "prop-types";
import SimpleIcon from "./SimpleIcon";
import DetailedIcon from "./DetailedIcon";
import missingAvatar from "../../public/images/empty-avatar.svg";
import MedicalCardStyles from "./medicalCard.style";
import DateDisplay from "../dates/DateDisplay";

export default function MedicalCard({ user, data }) {
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
              Schwangerschaft (erwartet &nbsp;
              <DateDisplay date={pregnancyDueDate.data} />)
            </span>
          ) : (
            "Schwanger"
          )
        }
        icon="warning-sign"
        iconColor="#f6be42"
      />
    ) : null;
  const donor = organDonor ? (
    <SimpleIcon
      iconDetail="Organspender"
      icon="organ-donor"
      iconColor="#fe5533"
    />
  ) : null;
  const name = "name" in user ? user.name : "Name unbekannt";
  const picture =
    "pictureBase64" in user
      ? `data:image/png;base64, ${user.pictureBase64}`
      : missingAvatar;

  return (
    <MedicalCardStyles>
      <div className="user-profile">
        <img src={picture} alt="User Profile" />
        <div className="medical-data">
          <h2>{name}</h2>
          {"dateOfBirth" in user ? (
            <div className="date-format">
              <DateDisplay date={user.dateOfBirth} />
            </div>
          ) : (
            "Geburtsdatum unbekannt"
          )}
          <div className="basic-data">
            {gender ? (
              <SimpleIcon
                iconDetail={gender.text}
                icon={gender.icon}
                iconColor="#61d3c1"
              />
            ) : null}
            {donor}
            {pregnancyStatus}
          </div>
        </div>
      </div>
      <div className="detailed-data">
        <DetailedIcon
          title="Gewicht"
          iconDetail={`${weight} kg`}
          icon="weight-info"
        />
        <DetailedIcon
          title="Körpergröße"
          iconDetail={`${height} cm`}
          icon="height-icon"
        />
        <DetailedIcon
          title="Blutgruppe"
          iconDetail={bloodType || "N/A"}
          icon="blood-type"
        />
      </div>
    </MedicalCardStyles>
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
  }).isRequired
};
