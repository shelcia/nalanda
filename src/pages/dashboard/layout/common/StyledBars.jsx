import { styled, Box, ListItemButton, AppBar, Toolbar } from "@mui/material";
import FlexBox from "../../../../components/CustomFlexbox";

const MainMenu = styled(Box)(({ theme }) => ({
  width: 80,
  height: "100%",
  position: "fixed",
  left: 0,
  boxShadow: theme.shadows[2],
  zIndex: theme.zIndex.drawer + 11,
  transition: "left 0.3s ease",
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down("md")]: {
    left: -80,
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 7,
  },
  "& .simplebar-scrollbar:before": {
    background: theme.palette.text.primary,
  },
}));
const SecondarySideBar = styled(Box)(({ theme, show }) => ({
  width: 240,
  height: "100%",
  position: "fixed",
  left: show ? 80 : -320,
  transition: "left 0.3s ease-in-out",
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.background.paper,
}));
const StyledListItemButton = styled(ListItemButton)(() => ({
  marginBottom: "1rem",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));
const Dot = styled(Box)(() => ({
  width: 4,
  height: 4,
  marginRight: 10,
  borderRadius: "50%",
}));
const SubMenuItem = styled(FlexBox)(({ theme, active }) => ({
  cursor: "pointer",
  alignItems: "center",
  padding: "0.6rem 1rem",
  "& div": {
    backgroundColor: active
      ? theme.palette.primary.main
      : theme.palette.text.disabled,
  },
  "& small": {
    color: active ? theme.palette.primary.main : theme.palette.secondary[400],
  },
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.secondary.light
        : theme.palette.divider,
    "& div": {
      backgroundColor: theme.palette.primary.main,
    },
    "& small": {
      color: theme.palette.primary.main,
    },
  },
})); // root component

// custom styled components
const DashboardNavbarRoot = styled(AppBar)(() => ({
  zIndex: 11,
  boxShadow: "none",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  backdropFilter: "blur(6px)",
  backgroundColor: "transparent",
}));
const StyledToolBar = styled(Toolbar)(() => ({
  "@media (min-width: 0px)": {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: "auto",
  },
}));

const ToggleIcon = styled(Box)(({ theme }) => ({
  width: 25,
  height: 3,
  margin: "5px",
  borderRadius: "10px",
  transition: "width 0.3s",
  backgroundColor: theme.palette.primary.main,
})); // root component

export {
  MainMenu,
  SecondarySideBar,
  StyledListItemButton,
  Dot,
  SubMenuItem,
  DashboardNavbarRoot,
  StyledToolBar,
  ToggleIcon,
};
