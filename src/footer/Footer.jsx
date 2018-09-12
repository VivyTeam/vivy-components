import React from "react";
import PropTypes from "prop-types";
import FooterStyles from "./footer.style";

const Index = ({ children }) => (
  <FooterStyles className="footer">
    <div className="footer">{children}</div>
  </FooterStyles>
);

Index.propTypes = {
  children: PropTypes.node.isRequired
};

export default Index;
