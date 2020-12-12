import React, { Fragment, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import M from "materialize-css/dist/js/materialize.min.js";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, user, logout } = authContext;

  const onLogout = () => {
    logout();
  };

  useEffect(() => {
    var elems = document.querySelectorAll(".tooltipped");
    var instances = M.Tooltip.init(elems, 0);
  }, [isAuthenticated]);

  const authLinks = (
    <Fragment>
      <li className="exit white-text hide-on-small-only">
        Welcome, {user && user.firstName}
      </li>
      <li>
        <a
          onClick={onLogout}
          href="/"
          className="tooltipped"
          data-tooltip="LogOut"
        >
          <i className="material-icons">exit_to_app</i>
        </a>
      </li>
    </Fragment>
  );
  const notAuthLinks = (
    <Fragment>
      <li>
        <a href="/login" className="">
          Login
        </a>
      </li>
      <li>
        <a href="/register" className="">
          Register
        </a>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar z-depth-2">
      <div className="nav-wrapper red accent-2">
        <div className="container">
          <a className="brand-logo valign-wrapper">
            <i className="material-icons">adb</i>BugTracker
          </a>
          <ul className="right valign-wrapper">
            {isAuthenticated ? authLinks : notAuthLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
