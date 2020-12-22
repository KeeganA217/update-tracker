import React, { useState, useContext, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import LogContext from "../context/logs/logContext";
import moment from "moment";
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
    due: "",
    created: new Date(),
  });

  const { title, description, attention, due } = log;

  useEffect(() => {
    var elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems, {
      container: "body",
      autoClose: true,
      onSelect: (date) =>
        setLog({
          due: moment(date).format("MMM Do YYYY"),
          author: user.firstName,
          title: title,
          description: description,
          created: new Date(),
        }),
    });
  });

  const onChange = (e) => setLog({ ...log, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "" || attention === "") {
      M.toast({ html: "Please complete all fields.." });
    } else {
      setLog({
        ...log,
      });
    }
    console.log(log);
    addLog(log);

    setLog({
      title: "",
      description: "",
      attention: "",
      author: "",
      due: "",
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
            <input
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              autoComplete="off"
            />
            <label htmlFor="title" className="active">
              Log Title
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="description"
              value={description}
              onChange={onChange}
              autoComplete="off"
            />
            <label htmlFor="description" className="active">
              Description
            </label>
          </div>
        </div>
        <div className="row ">
          <div className="input-field">
            <input
              className="datepicker"
              type="text"
              name="due"
              defaultValue={due}
            />
            <label htmlFor="due" className="active">
              Due Date
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="radio"
                  name="attention"
                  checked={attention === "Needs Attention"}
                  defaultValue="Needs Attention"
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
                  defaultValue="Issue Resolved"
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
