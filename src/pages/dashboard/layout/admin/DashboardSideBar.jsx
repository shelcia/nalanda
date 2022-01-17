import React from "react";
import { Box, List, ListItem, Tooltip, useMediaQuery } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { topMenuList } from "./Sidebar"; // root component interface
import { H3, Small } from "../../../../components/CustomTypography";
import CustomAccordion from "../../../../components/CustomAccordian";
import {
  Dot,
  MainMenu,
  SecondarySideBar,
  StyledListItemButton,
  SubMenuItem,
} from "../common/StyledBars";

const DashboardSideBar = ({
  sideBarLocked,
  showMobileSideBar,
  closeMobileSideBar,
  openSecondarySideBar,
  setOpenSecondarySideBar,
}) => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Dashboard");
  const [activeSubMenuItem, setActiveSubMenuItem] = useState("");
  const [categoryMenus, setCategoryMenus] = useState(initialCategoryMenus);
  const downMd = useMediaQuery((theme) => theme.breakpoints.down(1200));

  const handleActiveMainMenu = (menuItem) => () => {
    setActive(menuItem.title);

    if (menuItem.children && menuItem.children.length > 0) {
      setCategoryMenus(menuItem.children);
      const matched = openSecondarySideBar && active === menuItem.title;
      setOpenSecondarySideBar(matched ? false : true);
    } else {
      // console.log(!menuItem.path);
      navigate(menuItem.path);
      closeMobileSideBar();
      setOpenSecondarySideBar(sideBarLocked && !menuItem.path);
    }
  }; // accordion

  const [expanded, setExpanded] = useState("");
  useEffect(() => {
    setExpanded(categoryMenus[0].subTitle);
  }, [categoryMenus]);

  const handleAccordionChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleSubMenuItem = (path) => {
    navigate(path);
    setActiveSubMenuItem(path);
    setOpenSecondarySideBar(sideBarLocked);
    closeMobileSideBar();
  }; // main menus content

  const mainSideBarContent = (
    <List
      sx={{
        height: "100%",
      }}
    >
      <StyledListItemButton>
        <NavLink to="admin_dashboard">
          <h1 style={{ fontSize: "2rem" }} className="color-blue my-0">
            N.
          </h1>
        </NavLink>
      </StyledListItemButton>

      {topMenuList.map((nav, index) => (
        <Tooltip title={nav.title} placement="right" key={index}>
          <StyledListItemButton onClick={handleActiveMainMenu(nav)}>
            <i
              className={`${nav.icon} fa-2x`}
              style={{
                color: active === nav.title ? "#00b5eb" : "#94A4C4",
              }}
            ></i>
          </StyledListItemButton>
        </Tooltip>
      ))}
    </List>
  ); // secondary side bars content

  const secondarySideBarContent = (
    <Fragment>
      <ListItem
        sx={{
          py: 2,
        }}
      >
        <H3>{active}</H3>
      </ListItem>

      {categoryMenus.map((item, index) =>
        item.subCategories ? (
          <CustomAccordion
            key={index}
            expandedItem={expanded}
            accordionHeader={item.subTitle}
            handleChange={handleAccordionChange}
          >
            {item.subCategories.map((sub) => (
              <SubMenuItem
                key={sub.name}
                active={sub.path === activeSubMenuItem}
                onClick={() => handleSubMenuItem(sub.path)}
              >
                <Dot />
                <Small color="secondary.400">{sub.name}</Small>
              </SubMenuItem>
            ))}
          </CustomAccordion>
        ) : (
          <SubMenuItem
            key={item.subTitle}
            active={item.path === activeSubMenuItem}
            onClick={() => handleSubMenuItem(item.path)}
          >
            <Dot />
            <Small color="secondary.400">{item.subTitle}</Small>
          </SubMenuItem>
        )
      )}
    </Fragment>
  ); // for mobile device

  if (downMd) {
    return (
      <Fragment>
        <Box
          sx={{
            width: 60,
            height: "100%",
            position: "fixed",
            zIndex: (theme) => theme.zIndex.drawer + 3,
            backgroundColor: (theme) => theme.palette.background.paper,
            boxShadow: (theme) => theme.shadows[1],
            transform: showMobileSideBar
              ? "translateX(0)"
              : "translateX(-100%)",
            transition: "transform 0.3s",
          }}
        >
          {mainSideBarContent}
        </Box>

        {showMobileSideBar && (
          <Box
            onClick={closeMobileSideBar}
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: (theme) => theme.zIndex.drawer,
            }}
          />
        )}

        <Box
          sx={{
            position: "fixed",
            left: showMobileSideBar ? 0 : -300,
            width: 300,
            height: "100%",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "background.paper",
            transition: "left 0.3s",
          }}
        >
          <Box
            sx={{
              height: "100%",
              position: "relative",
              width: "calc(100% - 60px)",
              marginLeft: "60px",
            }}
          >
            {secondarySideBarContent}
          </Box>
        </Box>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <MainMenu>{mainSideBarContent}</MainMenu>
      <SecondarySideBar show={openSecondarySideBar}>
        {secondarySideBarContent}
      </SecondarySideBar>
    </Fragment>
  );
};

const initialCategoryMenus = [
  {
    subTitle: "Quick Links",
    subCategories: [
      {
        name: "Add Questions/Note",
        path: "/admin_dashboard/questions-corner/add-questions-corner",
      },
    ],
    path: "",
  },
];
export default DashboardSideBar;
