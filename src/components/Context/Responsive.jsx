import React, { createContext, useState } from "react";

export const ResponsiveContext = createContext();

export const ResponsiveProvider = ({ children }) => {
  const [responsive, setResponsive] = useState(false);

  return (
    <ResponsiveContext.Provider value={[responsive, setResponsive]}>
      {children}
    </ResponsiveContext.Provider>
  );
};
