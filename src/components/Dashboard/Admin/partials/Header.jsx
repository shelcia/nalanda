import React, { useContext } from "react";
import { ResponsiveContext } from "../../../Context/Responsive";

const Header = () => {
  const [responsive, setResponsive] = useContext(ResponsiveContext);

  return (
    <React.Fragment>
      <header className="w-100 py-2 shadow-sm px-0 mx-0">
        <i
          className="fas fa-bars navbar-toggler"
          onClick={() => setResponsive(!responsive)}
        ></i>
      </header>
    </React.Fragment>
  );
};

export default Header;
