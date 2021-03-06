import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import  Login from "./components/Login/Login";
import  ToDo  from "./components/ToDo/ToDo";
function App() {
  return (
    <Router>
      <Switch>
          <Route  exact path="/LoginApp/ToDo" >
            <ToDo/>
          </Route>
          <Route exact path="/LoginApp" >
            <Login/>
          </Route>
      </Switch>
    </Router>
  );

  

}

export default App;
