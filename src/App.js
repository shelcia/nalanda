import React from "react";
import MainPage from "./components/landingPage/MainPage";
import FacultyPage from "./components/Faculty/Faculty";
import LoginPage from "./components/LoginPage/Login";
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import AdminUsers from "./components/Dashboard/Admin/Users";
import AdminUserDetails from "./components/Dashboard/Admin/UserDetails";
import AdminAskDoubts from "./components/Dashboard/Admin/AskDoubts";
import AdminFeedback from "./components/Dashboard/Admin/FeedBack";
import AdminResources from "./components/Dashboard/Admin/Resources";

import "./styles/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OnlineCourses from "./components/Dashboard/Admin/Onlinecourses";
import Gallery from "./components/Gallery/Gallery";
import Course from "./components/Courses/Course";
import ContactUs from "./components/Contact Us/ContactUs";
import AboutUs from "./components/AboutUs/Aboutus";

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
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/admin/dashboard" exact component={AdminDashboard} />
          <Route path="/admin/users" exact component={AdminUsers} />
          <Route path="/admin/users/:id" exact component={AdminUserDetails} />
          <Route path="/admin/resources" exact component={AdminResources} />
          <Route path="/admin/doubts" exact component={AdminAskDoubts} />
          <Route path="/admin/courses" exact component={OnlineCourses} />
          <Route path="/admin/feedback" exact component={AdminFeedback} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
