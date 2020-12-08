import React, { useState, useContext, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import LogContext from "../context/logs/logContext";
import AuthContext from "../context/auth/authContext";

const EditLogModal = () => {
  const logContext = useContext(LogContext);
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  const { updateLog, current } = logContext;

  const [log, setLog] = useState({
    title: "",
    description: "",
    attention: "",
    date: new Date(),
  });

  const { title, description, attention } = log;

  useEffect(() => {
    if (current) {
      setLog({
        title: current.title,
        description: current.description,
        attention: current.attention,
      });
    }
  }, [current]);

  const onChange = (e) => setLog({ ...log, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "" || attention === "") {
      M.toast({ html: "Please enter a title and description.." });
    } else {
      const updLog = {
        id: current._id,
        title,
        description,
        attention,
        date: new Date(),
      };

      updateLog(updLog);

      M.toast({ html: `Log updated by ${user.firstName}` });
    }

    setLog({
      title: "",
      description: "",
      attention: "",
    });
  };

  return (
    <form id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit Log</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="title" value={title} onChange={onChange} />
            <label htmlFor="message" className="acvtive">
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

export default EditLogModal;
