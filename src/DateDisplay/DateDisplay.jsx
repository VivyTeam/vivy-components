import React from "react";
import PropTypes from "prop-types";

export default function DateDisplay({ date, monthNames }) {
  const dateTime = new Date(date);
  const month = monthNames[dateTime.getMonth()];

  return (
    <span>{`${dateTime.getDate()}. ${month} ${dateTime.getFullYear()}`}</span>
  );
}

DateDisplay.propTypes = {
  date: PropTypes.string.isRequired,
  monthNames: PropTypes.arrayOf(PropTypes.string)
};

DateDisplay.defaultProps = {
  monthNames: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ]
};
