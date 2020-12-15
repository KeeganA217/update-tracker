import React, { useEffect, useContext } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import Tech from "../images/technology.jpg";
import Report from "../images/report.jpg";
import Work from "../images/work.jpg";
import Celebrate from "../images/celebrate.jpg";
import AuthContext from "../context/auth/authContext";

const Landing = (props) => {
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

  useEffect(() => {
    var elems = document.querySelectorAll(".parallax");
    var instances = M.Parallax.init(elems, 0);
  }, []);

  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={Tech} className="parallax-image"></img>
        </div>
      </div>
      <div className="section white">
        <div className="row ">
          <div className="col s12 m10 l8 offset-l2">
            <div className="card z-depth-3 purple lighten-4 purple-text text-lighten-2 landing-card">
              <div className="card-content center-align">
                <h4>Team based Issue Resolution has never been Simpler!</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="row">
            <div className="col s12 m6 l4">
              <div className="card z-depth-3 landing-card-1">
                <div className="card-image">
                  <img src={Report}></img>
                  <span className="card-title">
                    <h3>Step 1</h3>
                  </span>
                </div>
                <div className="card-content center-align">
                  <p>Open a ticket for an existing issue.</p>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card z-depth-3 landing-card-1">
                <div className="card-image">
                  <img src={Work}></img>
                  <span className="card-title">
                    <h3>Step 2</h3>
                  </span>
                </div>
                <div className="card-content center-align">
                  <p>
                    Collaborate a solution amongst the team, all from different
                    locations. Provide updates and even change deadlines.
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card z-depth-2 landing-card-1">
                <div className="card-image">
                  <img src={Celebrate}></img>
                  <span className="card-title">
                    <h3>Step 3</h3>
                  </span>
                </div>
                <div className="card-content center-align">
                  <p>Complete the Issue and breathe easier!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
