import React from "react";

const Title = ({ title, children }) => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <h1>{title}</h1>
        {children}
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Title;
