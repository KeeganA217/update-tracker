import React, { Fragment, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import M from "materialize-css/dist/js/materialize.min.js";
import { NavLink } from "react-router-dom";

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
      <li className="change">
        <NavLink
          to="/"
          exact
          activeStyle={{ fontWeight: "bold", color: "black", fontSize: "20px" }}
        >
          Home
        </NavLink>
      </li>
      <li className="change">
        <NavLink
          to="/login"
          exact
          activeStyle={{ fontWeight: "bold", color: "black", fontSize: "20px" }}
        >
          Login
        </NavLink>
      </li>
      <li className="change">
        <NavLink
          to="/register"
          exact
          activeStyle={{ fontWeight: "bold", color: "black", fontSize: "20px" }}
        >
          Register
        </NavLink>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar z-depth-2">
      <div className="nav-wrapper red accent-2">
        <div className="container">
          <a className="brand-logo valign-wrapper">
            <i className="material-icons">adb</i>TeamSolve
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
