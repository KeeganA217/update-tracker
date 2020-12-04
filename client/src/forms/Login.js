import React from "react";

const Login = () => {
  return (
    <div className="container">
      <h4 className="center-align">Login</h4>
      <div className="row">
        <div className="col s12">
          <div className="input-field col s12 l6 offset-l3 offset-r3">
            <input id="email" type="email" class="validate" />
            <label for="email">Email</label>
          </div>
          <div className="input-field col s12 l6 offset-l3 offset-r3">
            <input id="password" type="password" class="validate" />
            <label for="password">Password</label>
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
                href="/register"
                className="waves-effect waves-light btn btn-small teal lighten-1"
              >
                <i className="material-icons right">subdirectory_arrow_right</i>
                Click Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
