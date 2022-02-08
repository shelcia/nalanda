import React from "react";
import { Box, styled } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router";
import DashboardNavbar from "../common/DashboardNavbar";
import DashboardSideBar from "../common/DashboardSideBar";
import { topMenuList } from "./Sidebar"; // root component interface

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

const StudentDashboardLayout = ({ children }) => {
  const [sideBarLocked, setSideBarLocked] = useState(false);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  const [openSecondarySideBar, setOpenSecondarySideBar] = useState(false);

  const initialCategoryMenus = [
    {
      subTitle: "Quick Links",
      subCategories: [
        {
          name: "View Questions",
          path: "/student_dashboard/questions-corner",
        },
        {
          name: "View Notes",
          path: "/student_dashboard/notes",
        },
      ],
      path: "",
    },
  ];

  return (
    <React.Fragment>
      <DashboardSideBar
        sideBarLocked={sideBarLocked}
        showMobileSideBar={showMobileSideBar}
        openSecondarySideBar={openSecondarySideBar}
        setOpenSecondarySideBar={setOpenSecondarySideBar}
        closeMobileSideBar={() => setShowMobileSideBar(false)}
        topMenuList={topMenuList}
        initialCategoryMenus={initialCategoryMenus}
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

export default StudentDashboardLayout;
