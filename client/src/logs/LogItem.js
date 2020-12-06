import React, { useContext } from "react";
import Moment from "moment";
import LogContext from "../context/logs/logContext";
import M from "materialize-css/dist/js/materialize.min.js";
import AuthContext from "../context/auth/authContext";

const LogItem = ({ log }) => {
  const logContext = useContext(LogContext);
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  const { deleteLog, setCurrent } = logContext;

  const { _id, title, attention, date } = log;

  const onDelete = () => {
    deleteLog(_id);
    M.toast({ html: "Log item has been removed" });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            attention === "Needs Attention" ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(log)}
        >
          {title}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID {_id}</span> last updated by{" "}
          <span className="black-text">{user.firstName}</span> on {date}
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default LogItem;
