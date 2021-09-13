import React  , {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdminPanel from 'pages/AdminPanel'
import Feeds from 'pages/Feeds'
import Register from 'pages/Register'
import Login from 'pages/Login'

export default function Routes() {


  return (
    <Router>
        <Switch>
          <Route exact path="/feeds">
	    <Feeds />
	  </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/login">
            <Register />
          </Route>
          <Route path="/admin">
            <AdminPanel />
          </Route>
        </Switch>
    </Router>
  );
}
