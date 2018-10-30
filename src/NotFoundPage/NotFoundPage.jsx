import React from "react";
import PropTypes from "prop-types";
import NotFoundImage from "../../public/images/404.svg";
import ErrorStyles from "./error.style";

export default function NotFoundPage({ children }) {
  return (
    <ErrorStyles>
      <div className="container">
        <div className="error-body">
          <img className="error-img" src={NotFoundImage} alt="" />
          <div className="info">{children}</div>
        </div>
      </div>
    </ErrorStyles>
  );
}

NotFoundPage.propTypes = {
  children: PropTypes.node.isRequired
};
