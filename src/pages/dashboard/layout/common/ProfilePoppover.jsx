import { Avatar, Badge, Box, ButtonBase, Divider } from "@mui/material";
import React, { useRef, useState } from "react"; // component props interface
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CustomMenuList } from "../../../../components/CustomStyledComponents";
import PopoverLayout from "./PopoverLayout";

const ProfilePopover = () => {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuItem = (path) => {
    navigate(path);
    setOpen(false);
  };

  const logout = () => {
    navigate("/login");
    localStorage.clear();
  };

  return (
    <React.Fragment>
      <ButtonBase disableRipple ref={anchorRef} onClick={() => setOpen(true)}>
        <Badge
          overlap="circular"
          variant="dot"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          sx={{
            "& .MuiBadge-badge": {
              width: 11,
              height: 11,
              right: "7%",
              borderRadius: "50%",
              border: "2px solid #fff",
              backgroundColor: "success.main",
            },
          }}
        >
          <Avatar
            sx={{
              width: 30,
              height: 30,
              ml: 1,
            }}
          >
            C
          </Avatar>
        </Badge>
      </ButtonBase>

      <PopoverLayout
        hiddenViewButton
        maxWidth={230}
        minWidth={200}
        popoverOpen={open}
        anchorRef={anchorRef}
        popoverClose={() => setOpen(false)}
        title={"My Profile"}
      >
        <Box pt={1}>
          <CustomMenuList
            onClick={() => handleMenuItem("/admin_dashboard/profile")}
          >
            Profile & Account
          </CustomMenuList>

          <Divider
            sx={{
              my: 1,
            }}
          />

          <CustomMenuList
            onClick={() => {
              logout();
              toast.error("You Logout Successfully");
            }}
          >
            Sign Out
          </CustomMenuList>
        </Box>
      </PopoverLayout>
    </React.Fragment>
  );
};

export default ProfilePopover;
