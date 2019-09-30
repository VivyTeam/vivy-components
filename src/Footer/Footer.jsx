import React from "../../node_modules/react";
import PropTypes from "../../node_modules/prop-types";
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
