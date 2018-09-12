import React from "react";
import PropTypes from "prop-types";
import FooterStyles from "./footer.style";

const Footer = ({ children }) => (
  <FooterStyles className="footer">
    <div className="footer">{children}</div>
  </FooterStyles>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired
};

export default Footer;
