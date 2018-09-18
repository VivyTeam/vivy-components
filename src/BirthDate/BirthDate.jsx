import React from "react";
import PropTypes from "prop-types";

export default function BirthDate({ birthDate, style }) {
  if (birthDate)
    return (
      <div style={style}>
        {birthDate.split("-")[2]}.{birthDate.split("-")[1]}.
        {birthDate.split("-")[0]}
      </div>
    );
}
BirthDate.propTypes = {
  birthDate: PropTypes.string.isRequired,
  style: PropTypes.shape({})
};

BirthDate.defaultProps = {
  style: {}
};