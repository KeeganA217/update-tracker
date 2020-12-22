import React, { useEffect, useContext } from "react";
import Logs from "../logs/Logs";
import Search from "./Search";
import AuthContext from "../context/auth/authContext";
import M from "materialize-css/dist/js/materialize.min.js";

const Home = (props) => {
  const authContext = useContext(AuthContext);

  const { error, clearErrors, isAuthenticated, loadUser } = authContext;

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
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className=" col s12 l8 offset-l2">
            <div className="center-align">
              <h4 className="logs-title">Current Open Issues</h4>
            </div>
          </div>
        </div>
      </div>
      <Search />
      <Logs />
    </div>
  );
};

export default Home;
