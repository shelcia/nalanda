import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  //   Tooltip,
  MenuItem,
  useScrollTrigger,
  Zoom,
  Fab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Logo from "../../../assets/logo/nalanda_logo.png";
import { NavLink } from "react-router-dom";

// const pages = ["Faculty", "Gallery", "Contact Us"];

const ScrollTop = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

const Topbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const topBarLinks = [
    // {
    //   name: "About Us",
    //   link: "/aboutus",
    // },
    // {
    //   name: "Courses",
    //   link: "/courses",
    // },
    {
      name: "Faculty",
      link: "/faculty",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Contact Us",
      link: "/contactus",
    },
  ];

  return (
    <React.Fragment>
      <AppBar position="static" color="transparent" id="back-to-top-anchor">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <NavLink to="/">
                <img src={Logo} alt="" height="30px" />
              </NavLink>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {topBarLinks.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <NavLink to={page.link}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img src={Logo} alt="" height="30px" />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "end",
                alignItems: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              {topBarLinks.map((page) => (
                <NavLink to={page.link} key={page.name}>
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                  >
                    {page.name}
                  </Button>
                </NavLink>
              ))}
              <NavLink to="/login">
                <Button color="primary" variant="contained">
                  Login
                </Button>
              </NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};
export default Topbar;
