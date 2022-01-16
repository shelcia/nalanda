import React from "react";
import { Box, styled } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSideBar"; // styled components

const Wrapper = styled(Box)(({ theme, show }) => ({
  width: `calc(100% - ${show ? "320px" : "80px"})`,
  paddingLeft: "3rem",
  paddingRight: "3rem",
  transition: "all 0.3s",
  marginLeft: show ? 320 : 80,
  [theme.breakpoints.down(1200)]: {
    width: "100%",
    marginLeft: 0,
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
}));
const InnerWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    maxWidth: 1200,
    margin: "auto",
  },
}));

const DashboardLayout = ({ children }) => {
  const [sideBarLocked, setSideBarLocked] = useState(false);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  const [openSecondarySideBar, setOpenSecondarySideBar] = useState(false);
  return (
    <React.Fragment>
      <DashboardSidebar
        sideBarLocked={sideBarLocked}
        showMobileSideBar={showMobileSideBar}
        openSecondarySideBar={openSecondarySideBar}
        setOpenSecondarySideBar={setOpenSecondarySideBar}
        closeMobileSideBar={() => setShowMobileSideBar(false)}
      />

      <Wrapper show={openSecondarySideBar}>
        <InnerWrapper>
          <DashboardNavbar
            sideBarLocked={sideBarLocked}
            setOpenSecondarySideBar={() =>
              setOpenSecondarySideBar((state) => !state)
            }
            setSideBarLocked={() => setSideBarLocked((state) => !state)}
            setShowMobileSideBar={() => setShowMobileSideBar((state) => !state)}
          />
          {children || <Outlet />}
        </InnerWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default DashboardLayout;
