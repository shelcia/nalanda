import React from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import { useRoutes } from "react-router-dom";
import { nalandaTheme } from "./theme";
import routes from "./routes";

import { Toaster } from "react-hot-toast";

import "./styles/bootstrap-grid.css";
import "./styles/bootstrap-utils.css";
import "./styles/style.css";

const App = () => {
  const appTheme = nalandaTheme({
    theme: "light",
    direction: "ltr",
  });

  const allPages = useRoutes(routes);

  window.onbeforeunload = function () {
    localStorage.removeItem("HRT-Verify");
  };
  const toasterOptions = {
    style: {
      fontWeight: 500,
      fontFamily: "'Montserrat', sans-serif",
    },
  };
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Toaster toastOptions={toasterOptions} />
          {allPages}
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default App;
