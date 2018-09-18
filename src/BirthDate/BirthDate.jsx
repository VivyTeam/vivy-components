import React from "react";
import PropTypes from "prop-types";

export default function BirthDate({ date, style }) {
  if (date)
    return (
      <div style={style}>
        {date.split("-")[2]}.{date.split("-")[1]}.{date.split("-")[0]}
      </div>
    );
}
BirthDate.propTypes = {
  date: PropTypes.string.isRequired,
  style: PropTypes.shape({})
};

BirthDate.defaultProps = {
  style: {}
};
