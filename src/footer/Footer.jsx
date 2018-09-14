import React from "react";
import PropTypes from "prop-types";
import FooterStyles from "./footer.style";

export default function Footer({ children }) {
  return (
    <FooterStyles className="footer">
      <div className="footer">{children}</div>
    </FooterStyles>
  );
}

Footer.propTypes = {
  children: PropTypes.node.isRequired
};
