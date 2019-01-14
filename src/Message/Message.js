import React from "react";
import PropTypes from "prop-types";
import { toast, ToastContainer } from "react-toastify";
import Styles from "./message.style";
import { Icon } from "../index";

function MessageContent({ text, icon, color, size }) {
  return (
    <Styles>
      <div className="text-content">
        <Icon name={icon} style={{ color, fontSize: size }} />
        &nbsp;
        {text}
      </div>
    </Styles>
  );
}

MessageContent.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number
};

MessageContent.defaultProps = {
  color: "#04d4bf",
  size: 22
};

export function MessageContainer() {
  return (
    <Styles>
      <ToastContainer />
    </Styles>
  );
}

export const message = {
  ...toast,
  info(text, options = {}) {
    return toast.info(<MessageContent icon="info" text={text} />, {
      ...options,
      className: "message-box",
      progressClassName: "progress-bar"
    });
  },
  success(text, options = {}) {
    return toast.success(<MessageContent icon="confirmed" text={text} />, {
      ...options,
      className: "message-box",
      progressClassName: "progress-bar"
    });
  },
  error(text, options = {}) {
    return toast.error(
      <MessageContent
        icon="failed-filled-16"
        text={text}
        color="#e94119"
        size={18}
      />,
      {
        ...options,
        className: "message-box",
        progressClassName: "error-progress-bar"
      }
    );
  }
};
