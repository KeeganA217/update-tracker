import React, { useEffect, useContext } from "react";
import LogItem from "./LogItem";
import M from "materialize-css/dist/js/materialize.min.js";
import AuthContext from "../context/auth/authContext";
import LogContext from "../context/logs/logContext";
import { GET_LOGS } from "../context/Types";

const Logs = () => {
  const logContext = useContext(LogContext);
  const authContext = useContext(AuthContext);

  const { loading } = authContext;
  const { logs, getLogs } = logContext;

  useEffect(() => {
    getLogs();
    var elems = document.querySelectorAll(".modal", ".tooltipped");
    var instances = M.Modal.init(elems, 0.5);

    var elem = document.querySelectorAll(".tooltipped");
    var instance = M.Tooltip.init(elem, {
      margin: 16,
      inDuration: 1000,
      outDuration: 400,
    });
  }, []);

  return (
    <div className="container">
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!logs ? (
          <p className="center">No logs found..</p>
        ) : (
          logs.map((log) => <LogItem log={log} key={log._id} />)
        )}
      </ul>
      <div className="fixed-action-btn">
        <a
          href="#add-log-modal"
          className="btn-floating pulse btn-large green darken-2 modal-trigger tooltipped"
          data-tooltip="Add New Log"
          data-position="left"
        >
          <i className="large material-icons">add</i>
        </a>
      </div>
    </div>
  );
};

export default Logs;
