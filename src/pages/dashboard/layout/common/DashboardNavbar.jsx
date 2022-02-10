import React, { useContext } from "react";
import { Box, useMediaQuery, Button } from "@mui/material";
import { H2 } from "../../../../components/CustomTypography";
import FlexBox from "../../../../components/CustomFlexbox";
import { DashboardNavbarRoot, StyledToolBar, ToggleIcon } from "./StyledBars";
import { TitleContext } from "../../../../contexts/TitleContext";
import Logo from "../../../../assets/logo/nalanda_logo.png";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = (props) => {
  const {
    sideBarLocked,
    setSideBarLocked,
    setShowMobileSideBar,
    setOpenSecondarySideBar,
  } = props;

  const { title } = useContext(TitleContext);

  const downMd = useMediaQuery((theme) => theme.breakpoints.down(1200));
  const downSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleToggleBtn = () => {
    if (downMd) {
      setShowMobileSideBar();
    } else {
      setSideBarLocked();
      setOpenSecondarySideBar();
    }
  };

  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
    localStorage.clear();
  };

  if (downSm) {
    return (
      <React.Fragment>
        <DashboardNavbarRoot position="sticky">
          <StyledToolBar>
            <Box
              sx={{
                cursor: "pointer",
              }}
              onClick={handleToggleBtn}
            >
              <ToggleIcon />
              <ToggleIcon
                sx={{
                  width: sideBarLocked ? 25 : 15,
                }}
              />
              <ToggleIcon />
            </Box>

            <Box flexGrow={1} textAlign="center">
              <img src={Logo} alt="Nalanda Logo" width={60} />
            </Box>
          </StyledToolBar>
        </DashboardNavbarRoot>

        <FlexBox alignItems="center" justifyContent="space-between">
          <H2
            fontSize={21}
            lineHeight={0}
            fontWeight="700"
            color="text.primary"
            mt={5}
          >
            {title}
          </H2>
        </FlexBox>
      </React.Fragment>
    );
  }

  return (
    <DashboardNavbarRoot position="sticky">
      <StyledToolBar>
        <Box
          sx={{
            cursor: "pointer",
          }}
          onClick={handleToggleBtn}
        >
          <ToggleIcon />
          <ToggleIcon
            sx={{
              width: sideBarLocked ? 25 : 15,
            }}
          />
          <ToggleIcon />
        </Box>

        <H2
          fontSize={21}
          lineHeight={0}
          mx={1}
          fontWeight="700"
          color="text.primary"
        >
          {title}
        </H2>

        <Box style={{ marginLeft: "auto" }}>
          <Button variant="contained" onClick={logout} size="small">
            Logout
          </Button>
        </Box>
      </StyledToolBar>
    </DashboardNavbarRoot>
  );
};

export default DashboardNavbar;
