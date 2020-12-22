import React, { useEffect, useContext } from "react";
import LogItem from "./LogItem";
import M from "materialize-css/dist/js/materialize.min.js";
import LogContext from "../context/logs/logContext";
import AuthContext from "../context/auth/authContext";
import Loader from "../layout/Loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Logs = () => {
  const logContext = useContext(LogContext);

  const { getLogs, logs, filtered } = logContext;

  const authContext = useContext(AuthContext);

  const { loading } = authContext;

  useEffect(() => {
    getLogs();
    var elems = document.querySelectorAll(".modal", ".tooltipped");
    M.Modal.init(elems, 0.5);

    var elem = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(elem, {
      margin: 16,
      inDuration: 1000,
      outDuration: 400,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div id="logs">
      <div className="container">
        <div className="row ">
          <table className="centered">
            <thead>
              <tr>
                <th className="th-title">Title</th>
                <th className="th-description">Description</th>
                <th className="th-attention">Attention</th>
                <th className="th-due">Deadline</th>
                <th className="th-edit">Edit</th>
                <th className="th-delete">Delete</th>
              </tr>
            </thead>
          </table>
          {logs && !loading ? (
            <TransitionGroup>
              {filtered !== null
                ? filtered.map((log) => (
                    <CSSTransition
                      key={log._id}
                      timeout={300}
                      classNames="item"
                    >
                      <LogItem log={log} />
                    </CSSTransition>
                  ))
                : logs.map((log) => (
                    <CSSTransition
                      key={log._id}
                      timeout={300}
                      classNames="item"
                    >
                      <LogItem log={log} />
                    </CSSTransition>
                  ))}
            </TransitionGroup>
          ) : (
            <Loader />
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
