import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "../pages/RegisterPage.js";
import Dashboard from "../pages/DashboardPage.js";
import DetailDay from "../pages/DetailDayPage.js";
import Login from '../pages/LoginPages'

function Base() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/login">login </Link> | 
              <Link to="/register"> register</Link> |
              <Link to="/dashboard"> dashboard</Link> |
              <Link to="/detailday"> detailsday</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/detailday">
            <DetailDay />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Base;
