import { Skeleton } from "@mui/material";
import React from "react";

const TableLoaders = () => {
  return (
    <React.Fragment>
      <Skeleton animation="wave" width="100%" />
      <Skeleton animation="wave" width="100%" />
      <Skeleton animation="wave" width="100%" />
    </React.Fragment>
  );
};

const ProfileLoaders = () => {
  return (
    <React.Fragment>
      <Skeleton variant="circular" width={50} height={50} animation="wave" />
      <Skeleton animation="wave" width="100%" />
      <Skeleton animation="wave" width="100%" />
    </React.Fragment>
  );
};

const ContentLoaders = () => {
  return (
    <React.Fragment>
      <div className="d-flex">
        <Skeleton animation="wave" width="20%" />
        <Skeleton animation="wave" width="20%" />
        <Skeleton animation="wave" width="20%" />
        <Skeleton animation="wave" width="20%" />
        <Skeleton animation="wave" width="20%" />
      </div>
      <Skeleton animation="wave" width="100%" />
      <Skeleton animation="wave" width="100%" />
    </React.Fragment>
  );
};

const BoxLoaders = () => {
  return (
    <React.Fragment>
      <div className="d-flex">
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </div>
    </React.Fragment>
  );
};

export { TableLoaders, ProfileLoaders, ContentLoaders, BoxLoaders };
