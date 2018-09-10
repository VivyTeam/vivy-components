import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import mapping from "../../public/fonts/vivy-icons/iconMapping.json";

const Icons = styled.div`
  font-family: "vivy-icons";

  i {
    font-weight: normal;
    font-style: normal;
  }
`;

export default function Icon({ name }) {
  const iconName = `icon-${name}`;
  const icon = String.fromCharCode(parseInt(mapping[iconName], 16));

  return (
    <Icons>
      <i>{icon}</i>
    </Icons>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
};
