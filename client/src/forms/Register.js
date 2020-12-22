import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import M from "materialize-css/dist/js/materialize.min.js";

const Register = (props) => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      M.toast({ html: "Please fill in all fields.." });
    } else if (password !== password2) {
      M.toast({ html: "Passwords do not match.." });
    } else {
      register({
        firstName,
        lastName,
        email,
        password,
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/logs");
    }

    if (error === "User already exists") {
      M.toast({ html: "User already exists.." });
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  return (
    <form className="container" onSubmit={onSubmit}>
      <h4 className="center-align">Register New User</h4>
      <div className="row">
        <div className="col s12">
          <div className="input-field col s12 l6 offset-l3 offset-r3">
            <i className="material-icons prefix">person</i>
            <input
              id="icon-prefix"
              type="text"
              name="firstName"
              value={firstName}
              onChange={onChange}
              className="validate"
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s12 l6 offset-l3 offset-r3">
            <i className="material-icons prefix">person_outline</i>
            <input
              id="icon-prefix"
              type="text"
              name="lastName"
              value={lastName}
              onChange={onChange}
              className="validate"
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="input-field col s12 l6 offset-l3 offset-r3">
            <i className="material-icons prefix">email</i>
            <input
              id="icon-prefix"
              type="email"
              name="email"
              onChange={onChange}
              className="validate"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s12 l6 offset-l3 offset-r3">
            <i className="material-icons prefix">lock</i>
            <input
              id="icon-prefix"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field col s12 l6 offset-l3 offset-r3">
            <i className="material-icons prefix">lock_open</i>
            <input
              id="icon-prefix"
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              className="validate"
            />
            <label htmlFor="password_2">Confirm Password</label>
          </div>
          <div className="col s12 center-align">
            <button
              className="btn waves-effect waves-light grey darken-1 hoverable"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
