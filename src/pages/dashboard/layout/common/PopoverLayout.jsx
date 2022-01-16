import React from "react"; // component props interface
import { Box, ButtonBase, Divider, Popover } from "@mui/material";
import { H4 } from "../../../../components/CustomTypography";

const PopoverLayout = (props) => {
  const {
    children,
    popoverClose,
    popoverOpen,
    anchorRef,
    title,
    hiddenViewButton,
    minWidth,
    maxWidth,
  } = props;
  return (
    <Popover
      open={popoverOpen}
      onClose={popoverClose}
      anchorEl={anchorRef.current}
      anchorOrigin={{
        horizontal: "center",
        vertical: "bottom",
      }}
      PaperProps={{
        sx: {
          minWidth: minWidth || 250,
          maxWidth: maxWidth || 375,
          width: "100%",
          padding: "0.5rem 0",
        },
      }}
    >
      <H4 fontWeight="700" p={2}>
        {title || "Notifications"}
      </H4>
      <Divider />

      {children}

      {!hiddenViewButton && (
        <Box p={2}>
          <ButtonBase
            disableRipple
            sx={{
              margin: "auto",
              display: "block",
              color: "primary.main",
            }}
          >
            View all Notifications
          </ButtonBase>
        </Box>
      )}
    </Popover>
  );
};

export default PopoverLayout;
