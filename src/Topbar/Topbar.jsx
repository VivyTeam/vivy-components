import React from "react";
import PropTypes from "prop-types";
import TopbarStyles from "./topbar.style";

export default function Topbar({ children }) {
  return <TopbarStyles>{children}</TopbarStyles>;
}

Topbar.propTypes = {
  children: PropTypes.node
};

Topbar.defaultProps = {
  children: {}
};
