import React from "react";
import PropTypes from "prop-types";
import { toast, ToastContainer } from "react-toastify";
import Styles from "./message.style";
import { Icon } from "../index";

function ToastMessage({ text, icon, color, size }) {
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

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number
};

ToastMessage.defaultProps = {
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
    return (
      <Styles>
        {toast.info(<ToastMessage icon="info" text={text} />, {
          ...options,
          className: "message-box",
          progressClassName: "progress-bar"
        })}
      </Styles>
    );
  },
  success(text, options = {}) {
    return (
      <Styles>
        {toast.success(<ToastMessage icon="confirmed" text={text} />, {
          ...options,
          className: "message-box",
          progressClassName: "progress-bar"
        })}
      </Styles>
    );
  },
  error(text, options = {}) {
    return (
      <Styles>
        {toast.error(
          <ToastMessage
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
        )}
      </Styles>
    );
  }
};
