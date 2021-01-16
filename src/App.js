import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// LANDING PAGE

import MainPage from "./components/landingPage/MainPage";
import FacultyPage from "./components/Faculty/Faculty";
import AboutUs from "./components/AboutUs/Aboutus";
import Course from "./components/Courses/Course";
import Gallery from "./components/Gallery/Gallery";
import ContactUs from "./components/Contact Us/ContactUs";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/faculty" exact component={FacultyPage} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/courses" exact component={Course} />
          <Route path="/contactus" exact component={ContactUs} />
          {/* <Route path="/login" exact component={LoginPage} /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
