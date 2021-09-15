import React  , {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdminPanel from 'pages/AdminPanel'
import Feeds from 'pages/Feeds'
import Login from 'pages/LoginRegister'

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
          <Route path="/admin">
            <AdminPanel />
          </Route>
        </Switch>
    </Router>
  );
}
