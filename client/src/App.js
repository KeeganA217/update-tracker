import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Register from "./forms/Register";
import Login from "./forms/Login";
import Home from "./layout/Home";
import AuthState from "./context/auth/AuthState";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <AuthState>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </AuthState>
  );
}

export default App;
