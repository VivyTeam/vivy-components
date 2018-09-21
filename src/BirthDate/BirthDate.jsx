import React from "react";
import PropTypes from "prop-types";

export default function BirthDate({ date, style }) {
  return date ? (
    <div style={style}>
      {date.split("-")[2]}.{date.split("-")[1]}.{date.split("-")[0]}
    </div>
  ) : null;
}
BirthDate.propTypes = {
  date: PropTypes.string.isRequired,
  style: PropTypes.shape({})
};

BirthDate.defaultProps = {
  style: {}
};
