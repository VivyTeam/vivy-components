import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const monthNames = [
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
];

function dateFormat(date) {
  const dateTime = new Date(date);
  const month = monthNames[dateTime.getMonth()];

  return `${dateTime.getDate()}. ${month} ${dateTime.getFullYear()}`;
}

const DateDisplayStyles = styled.span`
  font-size: 16px;
  line-height: 1.25;
  color: #575756;
`;

export default function DateDisplay({ date }) {
  return <DateDisplayStyles>{dateFormat(date)}</DateDisplayStyles>;
}

DateDisplay.propTypes = {
  date: PropTypes.string.isRequired
};
