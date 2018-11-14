import React from "react";
import PropTypes from "prop-types";
import Styles from "./footer.style";

export default function Footer({ children }) {
  return (
    <Styles>
      <div className="footer">{children}</div>
    </Styles>
  );
}

Footer.propTypes = {
  children: PropTypes.node.isRequired
};
