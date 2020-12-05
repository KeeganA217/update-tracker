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
      console.log("please enter all fields");
      //setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      console.log("passwords must match");
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
      props.history.push("/logs");
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
            <i className="material-icons prefix">person</i>
            <input
              id="icon-prefix"
              type="text"
              name="firstName"
              value={firstName}
              onChange={onChange}
              required
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
              required
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
              required
              className="validate"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s12 l6 offset-l3 offset-r3">
            <i className="material-icons prefix">lock_outline</i>
            <input
              id="icon-prefix"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              minLength="6"
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
              required
              className="validate"
            />
            <label htmlFor="password_2">Confirm Password</label>
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
          <div className="col s12 center-align">
            <p className="flow-text">
              Already registered?{" "}
              <a
                href="/"
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
