import React from "react";
import PropTypes from "prop-types";
import GridStyles from "./grid.style";

export default function FlexGrid({ children }) {
  return <GridStyles>{children}</GridStyles>;
}

FlexGrid.propTypes = {
  children: PropTypes.node.isRequired
};
