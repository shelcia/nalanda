import React from "react";
import "./styles/style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// LANDING PAGE

import MainPage from "./components/landingPage/MainPage";
import FacultyPage from "./components/Faculty/Faculty";
import AboutUs from "./components/AboutUs/Aboutus";
import LoginPage from "./components/LoginPage/Login";
import Course from "./components/Courses/Course";
import Gallery from "./components/Gallery/Gallery";
import ContactUs from "./components/Contact Us/ContactUs";

import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";

import AdminUsers from "./components/Dashboard/Admin/pages/Users/Users";
import AddUser from "./components/Dashboard/Admin/pages/Users/AddUsers";
import AdminUserDetails from "./components/Dashboard/Admin/pages/Users/UserDetails";

import FacultyDetails from "./components/Dashboard/Admin/pages/WebEdits/FaculyDetails";
import AddFaculty from "./components/Dashboard/Admin/pages/WebEdits/AddFaculty";

import WebEdit from "./components/Dashboard/Admin/pages/WebEdits/WebEdit";

import AdminAskDoubts from "./components/Dashboard/Admin/pages/Doubts/AskDoubts";
import AdminFeedback from "./components/Dashboard/Admin/pages/Feedbacks/FeedBack";
import AdminAddResources from "./components/Dashboard/Admin/pages/Resources/AddResource";
import AdminResources from "./components/Dashboard/Admin/pages/Resources/Resources";
import AdminOnlineCourses from "./components/Dashboard/Admin/pages/OnlineCourses/Onlinecourses";
import { ResponsiveProvider } from "./components/Context/Responsive";

const App = () => {
  const isAuthenticated = () => {
    return localStorage.getItem("Nalanda-Token") ? true : false;
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );

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
          <ResponsiveProvider>
            <PrivateRoute
              path="/admin/dashboard"
              exact
              component={AdminDashboard}
            />
            <PrivateRoute
              path="/admin/dashboard/adduser"
              exact
              component={AddUser}
            />
            <PrivateRoute
              path="/admin/dashboard/users"
              exact
              component={AdminUsers}
            />
            <PrivateRoute
              path="/admin/dashboard/users/:id"
              exact
              component={AdminUserDetails}
            />
            <PrivateRoute
              path="/admin/dashboard/addresource"
              exact
              component={AdminAddResources}
            />
            <PrivateRoute
              path="/admin/dashboard/resources"
              exact
              component={AdminResources}
            />
            <PrivateRoute
              path="/admin/dashboard/doubts"
              exact
              component={AdminAskDoubts}
            />
            <PrivateRoute
              path="/admin/dashboard/courses"
              exact
              component={AdminOnlineCourses}
            />
            <PrivateRoute
              path="/admin/dashboard/feedback"
              exact
              component={AdminFeedback}
            />
            <PrivateRoute
              path="/admin/dashboard/webpage-edits"
              exact
              component={WebEdit}
            />
            <PrivateRoute
              path="/admin/dashboard/webpage-edits/faculty/addfaculty"
              exact
              component={AddFaculty}
            />
            <PrivateRoute
              path="/admin/dashboard/webpage-edits/faculty/:id"
              exact
              component={FacultyDetails}
            />
          </ResponsiveProvider>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
