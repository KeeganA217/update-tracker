import React, { useContext, useEffect } from "react";
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
    M.Tooltip.init(elems, 0);
    var elem = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elem, { edge: "right" });
  }, [isAuthenticated]);

  const authLinks = (
    <div>
      <li className="exit black-text hide-on-small-only">
        <h6>Welcome, {user && user.firstName}</h6>
      </li>
      <li>
        <a
          onClick={onLogout}
          href="/"
          className="tooltipped"
          data-tooltip="LogOut"
        >
          <i className="material-icons indigo-text">exit_to_app</i>
        </a>
      </li>
    </div>
  );
  const notAuthLinks = (
    <div>
      <li className="change">
        <NavLink
          to="/"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "indigo",
            fontSize: "20px",
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="change">
        <NavLink
          to="/login"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "indigo",
            fontSize: "20px",
          }}
        >
          Login
        </NavLink>
      </li>
      <li className="change">
        <NavLink
          to="/register"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "indigo",
            fontSize: "20px",
          }}
        >
          Register
        </NavLink>
      </li>
    </div>
  );

  return (
    <div>
      <nav className="navbar z-depth-1 transparent">
        <div className="nav-wrapper valign-wrapper">
          <div className="container">
            <a className="brand-logo" href="!#">
              <i className="material-icons indigo-text">adb</i>
              <span className="black-text">TeamSolve</span>
            </a>
            <a href="!#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons indigo-text">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              {isAuthenticated ? authLinks : notAuthLinks}
            </ul>
          </div>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        {isAuthenticated ? authLinks : notAuthLinks}
        <li>
          <a className="sidenav-close" href="#!">
            {" "}
            <i className="material-icons indigo-text close-icon">close</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
