import { Skeleton, useMediaQuery } from "@mui/material";
import React from "react";

const TableLoaders = () => {
  const matches = useMediaQuery("(max-width:500px)");
  return (
    <div style={{ marginTop: matches ? "10vh" : "1vh" }}>
      <Skeleton animation="wave" width="100%" />
      <Skeleton animation="wave" width="100%" />
      <Skeleton animation="wave" width="100%" />
    </div>
  );
};

const ProfileLoaders = () => {
  const matches = useMediaQuery("(max-width:500px)");
  return (
    <div style={{ marginTop: matches ? "10vh" : "1vh" }}>
      <Skeleton variant="circular" width={50} height={50} animation="wave" />
      <Skeleton animation="wave" width="100%" />
      <Skeleton animation="wave" width="100%" />
    </div>
  );
};

const ContentLoaders = () => {
  const matches = useMediaQuery("(max-width:500px)");
  return (
    <div style={{ marginTop: matches ? "10vh" : "1vh" }}>
      <div className="d-flex">
        <Skeleton animation="wave" width="20%" />
        <Skeleton animation="wave" width="20%" />
        <Skeleton animation="wave" width="20%" />
        <Skeleton animation="wave" width="20%" />
        <Skeleton animation="wave" width="20%" />
      </div>
      <Skeleton animation="wave" width="100%" />
      <Skeleton animation="wave" width="100%" />
    </div>
  );
};

const BoxLoaders = () => {
  const matches = useMediaQuery("(max-width:500px)");
  return (
    <div style={{ marginTop: matches ? "10vh" : "1vh" }}>
      <div className="d-flex">
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>
    </div>
  );
};

export { TableLoaders, ProfileLoaders, ContentLoaders, BoxLoaders };
