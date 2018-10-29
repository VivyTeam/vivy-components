import React from "react";
import PropTypes from "prop-types";
import ModalStyles from "./modal.style";

export default function Modal({ open, children }) {
  return (
    <ModalStyles>
      {open ? (
        <div className="container">
          <div className="modal-body">{children}</div>
        </div>
      ) : null}
    </ModalStyles>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired
};
