import React from "react";
import { lazy, Suspense } from "react";
import LoadingScreen from "./pages/others/LoadingScreen";
import AdminDashboardLayout from "./pages/dashboard/layout/admin/AdminDashboardLayout";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import("./pages/home/Home")));
const Faculty = Loadable(lazy(() => import("./pages/home/Faculty")));
const Gallery = Loadable(lazy(() => import("./pages/home/Gallery")));
const Contact = Loadable(lazy(() => import("./pages/home/ContactUs")));

const Login = Loadable(lazy(() => import("./pages/auth/Login")));
const NotFoundPage = Loadable(lazy(() => import("./pages/others/404Page")));

const AdminHome = Loadable(
  lazy(() => import("./pages/dashboard/admin/home/Home"))
);

const AdminUsers = Loadable(
  lazy(() => import("./pages/dashboard/admin/users/Users"))
);
const AdminAddUsers = Loadable(
  lazy(() => import("./pages/dashboard/admin/users/AddUser"))
);

const AdminAnnouncements = Loadable(
  lazy(() => import("./pages/dashboard/admin/annnouncements/Announcements"))
);
const AdminAddAnnouncement = Loadable(
  lazy(() => import("./pages/dashboard/admin/annnouncements/AddAnnouncement"))
);

const AdminQuestionsCorner = Loadable(
  lazy(() => import("./pages/dashboard/admin/questionscorner/QuestionsCorner"))
);
const AdminAddQuestion = Loadable(
  lazy(() => import("./pages/dashboard/admin/questionscorner/AddQuestion"))
);

const routes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "faculty",
    element: <Faculty />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "contactus",
    element: <Contact />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "admin_dashboard",
    element: <AdminDashboardLayout />,
    children: [
      {
        path: "",
        element: <AdminHome />,
      },
      {
        path: "users",
        element: <AdminUsers />,
      },
      {
        path: "users/add-user",
        element: <AdminAddUsers />,
      },
      {
        path: "announcements",
        element: <AdminAnnouncements />,
      },
      {
        path: "announcements/add-announcement",
        element: <AdminAddAnnouncement />,
      },
      {
        path: "questions-corner",
        element: <AdminQuestionsCorner />,
      },
      {
        path: "questions-corner/add-questions-corner",
        element: <AdminAddQuestion />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
