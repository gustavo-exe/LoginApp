import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import  Login from "./components/Login/Login";
import  ToDo  from "./components/ToDo/ToDo";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <Switch>
          <Route  exact path="/ToDo" >
            <ToDo/>
          </Route>
          <Route exact path="/">
            <Login/>
          </Route>
      </Switch>
    </Router>
  );

  

}

export default App;
