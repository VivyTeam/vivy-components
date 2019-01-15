import React from "react";
import PropTypes from "prop-types";
import { toast, ToastContainer } from "react-toastify";
import Styles from "./notify.style";
import { Icon } from "../index";

function NotifyContent({ text, icon, color, size }) {
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

NotifyContent.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number
};

NotifyContent.defaultProps = {
  color: "#04d4bf",
  size: 22
};

export function NotifyContainer() {
  return (
    <Styles>
      <ToastContainer />
    </Styles>
  );
}

export const notify = {
  ...toast,
  info(text, options = {}) {
    return toast.info(<NotifyContent icon="info" text={text} />, {
      ...options,
      className: "message-box",
      progressClassName: "progress-bar"
    });
  },
  success(text, options = {}) {
    return toast.success(<NotifyContent icon="confirmed" text={text} />, {
      ...options,
      className: "message-box",
      progressClassName: "progress-bar"
    });
  },
  error(text, options = {}) {
    return toast.error(
      <NotifyContent
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
