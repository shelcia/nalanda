import React from "react";
import { Box, CircularProgress } from "@mui/material";
import NProgress from "nprogress";
import { useEffect } from "react";

const LoadingScreen = () => {
  NProgress.configure({
    showSpinner: false, // easing: "ease",
    // speed: 700,
    // minimum: 0.1,
  });
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);
  return (
    <React.Fragment>
      {/* <Box sx={{ backgroundColor: "background.paper", minHeight: "100%" }} /> */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    </React.Fragment>
  );
};

export default LoadingScreen;
