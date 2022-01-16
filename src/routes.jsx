import React from "react";
import { lazy, Suspense } from "react";
import LoadingScreen from "./pages/others/LoadingScreen";

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
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
