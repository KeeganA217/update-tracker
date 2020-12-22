import React, { useContext } from "react";
import moment from "moment";
import LogContext from "../context/logs/logContext";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log }) => {
  const logContext = useContext(LogContext);

  const { deleteLog, setCurrent } = logContext;

  const { _id, title, attention, description, due } = log;

  const onDelete = () => {
    deleteLog(_id);
    M.toast({ html: "Log item has been removed" });
  };

  let dueDate;

  if (attention === "Issue Resolved") {
    dueDate = "Completed";
  } else {
    dueDate = moment(due, "DD").fromNow(true);
  }

  return (
    <table className="highlight centered">
      <tbody>
        <tr>
          <td className="td-title">
            <p className="flow-text">{title}</p>
          </td>
          <td className="td-description">
            <p className="flow-text">{description}</p>
          </td>
          <td className="td-attention">
            <i
              className={`material-icons action ${
                attention === "Needs Attention" ? "red-text" : "green-text"
              }`}
            >
              {`${
                attention === "Needs Attention"
                  ? "do_not_disturb_alt"
                  : "done_all"
              }`}
            </i>
          </td>
          <td className="td-due">
            <div
              className={` due-date ${
                dueDate === "Completed" ? "green lighten-2" : "amber lighten-2"
              }`}
            >
              <p>
                {attention === "Issue Resolved"
                  ? "Completed"
                  : `Due in ${dueDate}`}
              </p>
            </div>
          </td>
          <td className="td-edit">
            <a
              href="#edit-log-modal"
              className="modal-trigger"
              onClick={() => setCurrent(log)}
            >
              <i className="material-icons small card-link amber-text text-accent-2">
                edit
              </i>
            </a>
          </td>
          <td className="td-delete">
            <a href="#!" onClick={onDelete} className="">
              <i className="material-icons small red-text text-accent-2 card-link">
                delete
              </i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LogItem;
