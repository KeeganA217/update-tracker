import React, { useEffect, useContext } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Register from "./forms/Register";
import Login from "./forms/Login";
import Home from "./layout/Home";
import AuthState from "./context/auth/AuthState";
import LogState from "./context/logs/LogState";
import PrivateRoute from "../src/context/routing/PrivateRoute";
import AddLogModal from "./logs/AddLogModal";
import EditLogModal from "./logs/EditLogModal";
import setAuthToken from "./context/setAuthToken";
import Landing from "./layout/Landing";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <LogState>
      <AuthState>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/logs" component={Home} />
          </Switch>
          <AddLogModal />
          <EditLogModal />
        </div>
      </AuthState>
    </LogState>
  );
}

export default App;
