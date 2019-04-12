import PropTypes from "prop-types";
import React from "react";
import Modal from "./Modal";
import { Button } from "../index";

export default class ModalWrapper extends React.Component {
  triggerButton = React.createRef();

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false }, () => this.triggerButton.current.focus());
  };

  render() {
    const { modalBody } = this.props;
    const { open } = this.state;

    return (
      <div
        role="presentation"
        onKeyDown={evt => {
          if (evt.which === 27) {
            this.handleClose();
          }
        }}
      >
        <Button onClick={this.handleOpen} ref={this.triggerButton}>
          Open Modal
        </Button>
        {open && (
          <Modal closeCallback={this.handleClose} renderItems={modalBody} />
        )}
      </div>
    );
  }
}

ModalWrapper.propTypes = {
  modalBody: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
