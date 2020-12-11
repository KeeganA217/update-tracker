import React, { useState, useContext } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import LogContext from "../context/logs/logContext";
import AuthContext from "../context/auth/authContext";

const AddLogModal = () => {
  const logContext = useContext(LogContext);
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  const { addLog } = logContext;

  const [log, setLog] = useState({
    title: "",
    description: "",
    attention: "",
    author: "",
    date: new Date(),
  });

  const { title, description, attention, author } = log;

  const onChange = (e) => setLog({ ...log, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "" || attention === "") {
      M.toast({ html: "Please enter a title and description.." });
    } else {
      setLog({ ...log, [e.target.name]: e.target.value });
    }

    addLog(log);

    setLog({
      title: "",
      description: "",
      attention: "",
      author: "",
    });
  };

  return (
    <form
      id="add-log-modal"
      className="modal modal-fixed-footer"
      style={modalStyle}
    >
      <div className="modal-content">
        <h4>Open New Issue</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="title" value={title} onChange={onChange} />
            <label htmlFor="title" className="active">
              Log Title
            </label>
          </div>
        </div>
        <div className="input-field">
          <textarea
            type="text"
            name="description"
            placeholder="Enter Description...."
            value={description}
            onChange={onChange}
          />
        </div>
        <div className="input-field">
          <input type="text" name="author" value={author} onChange={onChange} />
          <label htmlFor="author" className="active">
            Created By
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
