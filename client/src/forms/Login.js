import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/logs");
    }

    if (error === "Invalid Credentials") {
      //setAlert(error, "danger");
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      //setAlert("Please fill in all fields", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };
  return (
    <div className="container">
      <h4 className="center-align">Login</h4>
      <div className="row">
        <form onSubmit={onSubmit} className="col s12">
          <div className="input-field col s12 l6 offset-l3 offset-r3">
            <i className="material-icons prefix">email</i>
            <input
              id="icon-prefix"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
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
              requiredclassName="validate"
            />
            <label htmlFor="password">Password</label>
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
              Not yet registered?{" "}
              <a
                href="/register"
                className="waves-effect waves-light btn btn-small teal lighten-1"
              >
                <i className="material-icons right">subdirectory_arrow_right</i>
                Click Here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
