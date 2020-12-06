import React, { useState, useContext } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import LogContext from "../context/logs/logContext";

const AddLogModal = () => {
  const logContext = useContext(LogContext);

  const { addLog } = logContext;

  const [log, setLog] = useState({
    title: "",
    description: "",
    attention: "Needs Attention",
    date: new Date(),
  });

  const { title, description, attention } = log;

  const onChange = (e) => setLog({ ...log, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      M.toast({ html: "Please enter a title and description.." });
    } else {
      setLog({ ...log, [e.target.name]: e.target.value });
    }

    addLog(log);

    setLog({
      title: "",
      description: "",
      attention: "Needs Attention",
    });
  };

  return (
    <form id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="title" value={title} onChange={onChange} />
            <label htmlFor="message" className="active">
              Log Title
            </label>
          </div>
        </div>
        <div className="input-field">
          <input
            type="text"
            name="description"
            value={description}
            onChange={onChange}
          />
          <label htmlFor="message" className="active">
            Log Description
          </label>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="radio"
                  name="attention"
                  checked={attention === "Needs Attention"}
                  value="Needs Attention"
                  onChange={onChange}
                />
                <span>Needs Attention</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="radio"
                  name="attention"
                  checked={attention === "Issue Resolved"}
                  value="Issue Resolved"
                  onChange={onChange}
                />
                <span>Issue Resolved</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light blue btn"
        >
          Enter
        </a>
      </div>
    </form>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default AddLogModal;
