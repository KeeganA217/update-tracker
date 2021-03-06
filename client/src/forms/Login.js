import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import M from "materialize-css/dist/js/materialize.min.js";

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    loadUser();

    if (isAuthenticated) {
      props.history.push("/logs");
    }

    if (error === "Invalid Credentials") {
      M.toast({ html: "Incorrect Email or Password.." });

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
      M.toast({ html: "Please fill in all fields.." });
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
              className="validate"
            />
            <label htmlFor="password">Password</label>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
