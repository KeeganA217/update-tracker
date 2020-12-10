import React, { useEffect, useContext } from "react";
import LogItem from "./LogItem";
import M from "materialize-css/dist/js/materialize.min.js";
import LogContext from "../context/logs/logContext";

const Logs = () => {
  const logContext = useContext(LogContext);

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
    <div id="logs">
      <div className="container">
        <div className="row ">
          {!logs ? (
            <p className="center">No logs found..</p>
          ) : (
            logs.map((log) => <LogItem log={log} key={log._id} />)
          )}
        </div>
        <div className="fixed-action-btn">
          <a
            href="#add-log-modal"
            className="btn-floating pulse btn-large green darken-2 modal-trigger tooltipped"
            data-tooltip="Open New Issue"
            data-position="left"
          >
            <i className="large material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logs;
