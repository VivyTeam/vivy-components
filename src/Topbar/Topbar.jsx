import React from "../../node_modules/react";
import PropTypes from "../../node_modules/prop-types";
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
