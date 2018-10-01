import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DateDisplayStyles = styled.span`
  font-size: 16px;
  line-height: 1.25;
  color: #575756;
`;

export default function DateDisplay({ date, monthNames }) {
  const dateTime = new Date(date);
  const month = monthNames[dateTime.getMonth()];

  return (
    <DateDisplayStyles>
      {`${dateTime.getDate()}. ${month} ${dateTime.getFullYear()}`}
    </DateDisplayStyles>
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
