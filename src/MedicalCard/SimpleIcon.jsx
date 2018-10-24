import React from "react";
import PropTypes from "prop-types";
import SimpleIconStyles from "./simpleIcon.style";
import Icon from "../Icon";

export default function BasicInfoIcon({ icon, iconDetail, iconColor }) {
  return (
    <SimpleIconStyles style={{ color: iconColor }}>
      <Icon name={icon} />
      <div className="detail">{iconDetail}</div>
    </SimpleIconStyles>
  );
}

BasicInfoIcon.propTypes = {
  iconDetail: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
    .isRequired,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string
};

BasicInfoIcon.defaultProps = {
  iconColor: ""
};
