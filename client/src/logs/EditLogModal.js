import React, { useState, useContext, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import LogContext from "../context/logs/logContext";
import AuthContext from "../context/auth/authContext";
import moment from "moment";

const EditLogModal = () => {
  const logContext = useContext(LogContext);
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  const { updateLog, current, clearCurrent } = logContext;

  useEffect(() => {
    if (current) {
      setLog({
        title: current.title,
        description: current.description,
        attention: current.attention,
        id: current._id,
        due: current.due,
        author: current.author,
        created: current.created,
      });
    }

    var elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems, {
      container: "body",
      autoClose: true,
      onSelect: (date) =>
        setLog({
          id: current._id,
          due: moment(date).format("MMM Do YYYY"),
          author: current.author,
          title: current.title,
          description: current.description,
          attention: "Needs Attention",
        }),
    });
  }, [logContext, current]);

  const [log, setLog] = useState({
    title: "",
    description: "",
    attention: "",
    id: "",
    author: "",
    due: "",
  });

  const { title, description, attention, author, id, created, due } = log;

  const onChange = (e) => setLog({ ...log, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "" || attention === "") {
      M.toast({ html: "Please complete all fields..." });
    } else {
      updateLog(log);

      M.toast({ html: `Log updated by ${user.firstName}` });
    }

    clearCurrent();
  };

  return (
    <form
      id="edit-log-modal"
      className="modal modal-fixed-footer"
      style={modalStyle}
    >
      <div className="modal-content">
        <h4>Edit Pending Issue</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="title" value={title} onChange={onChange} />
          </div>
        </div>
        <div className="input-field">
          <input
            type="text"
            name="description"
            value={description}
            onChange={onChange}
          />
          <div className="row ">
            <div className="input-field">
              <input
                className="datepicker"
                type="text"
                name="due"
                value={due}
                onChange={onChange}
              />
            </div>
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
          <p>
            <strong>Issue ID: </strong>
            {id}
          </p>
          <p>
            <strong>Created By: </strong>
            {author} <strong>on </strong>{" "}
            {moment(created).format("MMMM Do YYYY, h:mm:ss a")}
          </p>
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
  height: "85%",
};

export default EditLogModal;
