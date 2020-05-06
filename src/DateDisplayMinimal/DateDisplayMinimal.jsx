import React from "react";
import PropTypes from "prop-types";

export default function DateDisplayMinimal({ date, style }) {
  return (
    <div style={style}>
      {date.split("-")[2]}.{date.split("-")[1]}.{date.split("-")[0]}
    </div>
  );
}
DateDisplayMinimal.propTypes = {
  date: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
};

DateDisplayMinimal.defaultProps = {
  style: {},
};
