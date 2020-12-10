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
      <li className="exit white-text">Welcome, {user && user.firstName}</li>
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

  return (
    <nav>
      <div className="nav-wrapper red accent-2">
        <div className="container">
          <a className="brand-logo">
            <i className=" nav-icon material-icons">error_outline</i>Logo
          </a>
          <ul className="right valign-wrapper">
            {isAuthenticated ? authLinks : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
