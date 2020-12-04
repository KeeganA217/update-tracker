import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";

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
      //setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      //setAlert("Passwords do not match", "danger");
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
      props.history.push("/");
    }

    if (error === "User already exists") {
      //setAlert(error, "danger");
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
            <input
              id="first_name"
              type="text"
              className="validate"
              onChange={onChange}
              value={firstName}
            />
            <label for="first_name">First Name</label>
          </div>
          <div className="input-field col s12 l6 offset-l3 offset-r3">
            <input
              id="last_name"
              type="text"
              className="validate"
              onChange={onChange}
              value={lastName}
            />
            <label for="last_name">Last Name</label>
          </div>
          <div className="input-field col s12 l6 offset-l3 offset-r3">
            <input
              id="email"
              type="email"
              className="validate"
              onChange={onChange}
              value={email}
            />
            <label for="email">Email</label>
          </div>
          <div className="input-field col s12 l6 offset-l3 offset-r3">
            <input
              id="password"
              type="password"
              className="validate"
              onChange={onChange}
              value={password}
            />
            <label for="password">Password</label>
          </div>
          <div className="input-field col s12 l6 offset-l3 offset-r3">
            <input
              id="password_2"
              type="password"
              className="validate"
              onChange={onChange}
              value={password2}
            />
            <label for="password_2">Confirm Password</label>
          </div>
          <div className="col s12 center-align">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
          <div className="col s12 l5 offset-l4 offset-r3">
            <p className="flow-text">
              Already registered?{" "}
              <a
                href="/login"
                className="waves-effect waves-light btn btn-small teal lighten-1"
              >
                <i className="material-icons right">subdirectory_arrow_right</i>
                Click Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
