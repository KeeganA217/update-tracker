import React, { useState, useContext, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import LogContext from "../context/logs/logContext";
import AuthContext from "../context/auth/authContext";

const AddLogModal = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".datepicker");
    var instances = M.Datepicker.init(elems, {
      container: "body",
      onSelect: function (date) {
        date = instances[0].date;
        setLog({
          due: date,
        });
      },
    });
  });

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
    date: new Date(),
  });

  const { title, description, attention, author, due } = log;

  const onChange = (e) => setLog({ ...log, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "" || attention === "") {
      M.toast({ html: "Please complete all fields.." });
    } else {
      setLog({
        ...log,
        [e.target.name]: e.target.value,
      });
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
            <input className="datepicker" type="text" name="due" />
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

import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import LogContext from "../context/logs/logContext";
import AuthContext from "../context/auth/authContext";
import authContext from "../context/auth/authContext";

class AddLogModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      // attention: "",
      author: "",
      due: "",
      date: new Date(),
    };
    // refs for startDate, endDate
    this.due = React.createRef();
  }

  componentDidMount() {
    var context = this;
    var elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems, {
      container: "body",
      autoClose: true,
      onClose: context.handleDate,
    });

    this.setState({
      author: "test",
    });
  }

  handleDate = () => {
    this.setState({
      due: this.due.current.value,
    });
    console.log(this.state.due);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
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
                id="title"
                value={this.state.title}
                onChange={this.handleChange}
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
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
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
                id="due"
                value={this.state.due}
                ref={this.due}
              />
              <label htmlFor="due" className="active">
                Due Date
              </label>
            </div>
          </div>

          {/* <div className="row">
            <div className="input-field">
              <p>
                <label>
                  <input
                    type="radio"
                    name="attention"
                    checked={this.state.attention === "Needs Attention"}
                    value="Needs Attention"
                    onChange={this.handleChange}
                  />
                  <span>Needs Attention</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="radio"
                    name="attention"
                    checked={this.state.attention === "Issue Resolved"}
                    value="Issue Resolved"
                    onChange={this.handleChange}
                  />
                  <span>Issue Resolved</span>
                </label>
              </p>
            </div>
          </div> */}
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            onClick={this.handleSubmit}
            className="modal-close waves-effect waves-light blue btn"
          >
            Enter
          </a>
        </div>
      </form>
    );
  }
}

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default AddLogModal;
