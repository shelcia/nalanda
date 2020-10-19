import React from "react";
import MainPage from "./components/landingPage/MainPage";
import FacultyPage from "./components/Faculty/Faculty";
import LoginPage from "./components/LoginPage/Login";
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import AdminUsers from "./components/Dashboard/Admin/Users";
import AdminFeeDetails from "./components/Dashboard/Admin/AdminFeeDetails";
import AdminAskDoubts from "./components/Dashboard/Admin/AskDoubts";
import AdminFeedback from "./components/Dashboard/Admin/FeedBack";
import AdminResources from "./components/Dashboard/Admin/Resources";

import "./styles/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OnlineCourses from "./components/Dashboard/Admin/Onlinecourses";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/faculty' exact component={FacultyPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/admin/dashboard' exact component={AdminDashboard} />
          <Route path='/admin/users' exact component={AdminUsers} />
          <Route path='/admin/feedetails' exact component={AdminFeeDetails} />
          <Route path='/admin/resources' exact component={AdminResources} />
          <Route path='/admin/askdoubts' exact component={AdminAskDoubts} />
          <Route path='/admin/courses' exact component={OnlineCourses} />
          <Route path='/admin/feedback' exact component={AdminFeedback} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
