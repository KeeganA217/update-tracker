import React, { useContext } from "react";
import moment from "moment";
import LogContext from "../context/logs/logContext";
import M from "materialize-css/dist/js/materialize.min.js";
import AuthContext from "../context/auth/authContext";

const LogItem = ({ log }) => {
  const logContext = useContext(LogContext);
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  const { deleteLog, setCurrent } = logContext;

  const { _id, title, attention, date, description, due } = log;

  const onDelete = () => {
    deleteLog(_id);
    M.toast({ html: "Log item has been removed" });
  };

  var dueDate = moment(due, "MMM DD, YYYY").fromNow(true);

  return (
    <div className="col s12 m6 l4">
      <div className="card blue-grey z-depth-5 medium">
        <div className="card-content white-text">
          <span className="card-title">
            {title}

            <span
              className={`due-date right ${
                dueDate <= "3"
                  ? "green lighten-2"
                  : dueDate <= "6"
                  ? "amber lighten-2"
                  : "red darken-1"
              }`}
            >
              <p>Due in {dueDate}</p>
            </span>
          </span>

          <p className="flow-text">{description}</p>
        </div>
        <div className="card-action">
          <a
            href="#edit-log-modal"
            className="modal-trigger"
            onClick={() => setCurrent(log)}
          >
            <i className="material-icons small card-link amber-text text-accent-2">
              edit
            </i>
          </a>
          <a href="#!" onClick={onDelete} className="">
            <i className="material-icons small white-text card-link">delete</i>
          </a>
          <i
            className={`material-icons action right ${
              attention === "Needs Attention" ? "red-text" : "green-text"
            }`}
          >
            {`${
              attention === "Needs Attention"
                ? "do_not_disturb_alt"
                : "done_all"
            }`}
          </i>
        </div>
      </div>
    </div>
  );
};

export default LogItem;
