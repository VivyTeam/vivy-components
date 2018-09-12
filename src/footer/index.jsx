import React from "react";
import PT from "prop-types";
import FooterStyles from "./Footer.style";

const Index = ({ children }) => (
  <FooterStyles className="footer">
    <div className="footer">{children}</div>
  </FooterStyles>
);

Index.propTypes = {
  children: PT.node.isRequired
};

export default Index;
