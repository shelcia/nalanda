import React from "react";
import MainPage from "./components/landingPage/MainPage";
import FacultyPage from "./components/Faculty/Faculty";
import LoginPage from "./components/LoginPage/Login";
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import AdminUsers from "./components/Dashboard/Admin/Users/Users";
import AdminUserDetails from "./components/Dashboard/Admin/Users/UserDetails";
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
import AddUser from "./components/Dashboard/Admin/Users/AddUsers";

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
          <Route path="/login" exact component={LoginPage} />
          <Route path="/admin/dashboard" exact component={AdminDashboard} />
          <Route
            path="/admin/dashboard/users/adduser"
            exact
            component={AddUser}
          />
          <Route path="/admin/dashboard/users" exact component={AdminUsers} />
          <Route
            path="/admin/dashboard/users/:id"
            exact
            component={AdminUserDetails}
          />
          <Route
            path="/admin/dashboard/resources"
            exact
            component={AdminResources}
          />
          <Route
            path="/admin/dashboard/doubts"
            exact
            component={AdminAskDoubts}
          />
          <Route
            path="/admin/dashboard/courses"
            exact
            component={OnlineCourses}
          />
          <Route
            path="/admin/dashboard/feedback"
            exact
            component={AdminFeedback}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
