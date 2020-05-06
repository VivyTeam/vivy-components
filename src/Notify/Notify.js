import React from "react";
import PropTypes from "prop-types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Styles from "./notify.style";
import { Icon } from "../index";

function NotifyContent({ text, icon, color, fontSize }) {
  return (
    <Styles>
      <div className="text-content">
        <Icon name={icon} style={{ color, fontSize }} />
        <p>{text}</p>
      </div>
    </Styles>
  );
}

NotifyContent.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

NotifyContent.defaultProps = {
  color: "#04d4bf",
  fontSize: 22,
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
      progressClassName: "progress-bar",
    });
  },
  success(text, options = {}) {
    return toast.success(<NotifyContent icon="confirmed" text={text} />, {
      ...options,
      className: "message-box",
      progressClassName: "progress-bar",
    });
  },
  error(text, options = {}) {
    return toast.error(
      <NotifyContent
        icon="failed-filled-16"
        text={text}
        color="#e94119"
        fontSize={18}
      />,
      {
        ...options,
        className: "message-box",
        progressClassName: "error-progress-bar",
      }
    );
  },
};
