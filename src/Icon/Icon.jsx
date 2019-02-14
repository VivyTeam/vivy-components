import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import mapping from "../../public/fonts/vivy-icons/iconMapping.json";

const Icons = styled.div`
  line-height: 1;

  i {
    font-family: "vivy-icons";
    font-weight: normal;
    font-style: normal;
  }
`;

export default function Icon({ name, style }) {
  const iconName = `icon-${name}`;
  const icon = String.fromCharCode(parseInt(mapping[iconName], 16));

  return (
    <Icons style={style}>
      <i>{icon}</i>
    </Icons>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.shape({})
};

Icon.defaultProps = {
  style: {}
};
