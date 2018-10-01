import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import DetailedIconStyles from "./detailedIcon.style";

export default function DetailedProfileIcon(props) {
  const { title, icon, iconDetail, iconSize } = props;

  return (
    <DetailedIconStyles>
      <Icon style={{ fontSize: iconSize }} name={icon} />
      <div className="detail-title">{title}</div>
      <div className="icon-detail">{iconDetail}</div>
    </DetailedIconStyles>
  );
}

DetailedProfileIcon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconDetail: PropTypes.string,
  iconSize: PropTypes.string
};

DetailedProfileIcon.defaultProps = {
  iconSize: "26px",
  iconDetail: "nicht verfügbar"
};
