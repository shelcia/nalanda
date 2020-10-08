import React from "react";
import MainPage from "./components/landingPage/MainPage";
import FacultyPage from "./components/Faculty/Faculty";
import LoginPage from "./components/LoginPage/Login";
import "./styles/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/faculty" exact component={FacultyPage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
