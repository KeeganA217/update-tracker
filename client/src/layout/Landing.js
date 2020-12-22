import React, { useEffect, useContext } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import Report from "../images/report.png";
import Work from "../images/work.png";
import Sleep from "../images/sleep.png";
import Group from "../images/group.png";
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
    M.Parallax.init(elems, 0);
  }, []);

  return (
    <div>
      <section className="container title-card">
        <div className="card z-depth-3 hoverable">
          <div className="row">
            <div className="col s12 l6 offset-l1">
              <h2>
                The <span className="indigo-text">Team Based </span>approach to
                issue resolution has <span className="accent">never</span> been
                simpler.{" "}
              </h2>
            </div>
            <div className="col s12 m4 l4">
              <img
                src={Group}
                alt="Loading..."
                className="responsive-img"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="row">
          <div className="col s12 m4 l4">
            <img src={Report} alt="Loading..." className="responsive-img"></img>
          </div>
          <div className="col s12 l6 offset-l1">
            <h3>
              Step 1 - <span className="indigo-text">Create</span>
            </h3>
            <p className="flow-text">
              Create a new issue and add to the dashboard for your team to
              review.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4 l4 push-l7 offset-l1">
            <img src={Work} alt="Loading..." className="responsive-img"></img>
          </div>
          <div className="col s12 l6 pull-l5 right-align">
            <h3>
              Step 2 - <span className="indigo-text">Collaborate</span>
            </h3>
            <p className="flow-text">
              Collaborate with your team on a solution. Set deadlines and even
              provide updates, all in real time.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4 l4">
            <img src={Sleep} alt="Loading..." className="responsive-img"></img>
          </div>
          <div className="col s12 l6 offset-l1">
            <h3>
              Step 3 - <span className="indigo-text">Apply</span>
            </h3>
            <p className="flow-text">
              Apply the solution, close out the issue, and sleep easier!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
