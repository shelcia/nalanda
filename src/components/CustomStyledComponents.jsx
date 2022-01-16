import {
  alpha,
  AppBar,
  Badge,
  InputBase,
  Pagination,
  styled,
  TableRow,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
// import SearchIcon from "../icons/SearchIcon";
import { Small } from "./CustomTypography";

export const StyledTableBodyRow = styled(TableRow)(({ theme, selected_row }) =>
  selected_row === "select"
    ? {
        backgroundColor: alpha(theme.palette.primary.light, 0.5),
        position: "relative",
        "&::after": {
          top: 0,
          left: 0,
          width: "3px",
          content: '""',
          height: "100%",
          position: "absolute",
          backgroundColor: theme.palette.primary.main,
        },
      }
    : {}
);

export const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    fontSize: 12,
    fontWeight: 500,
    color: theme.palette.text.disabled,
  },
  "& .MuiPaginationItem-page:hover": {
    borderRadius: 20,
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  "& .MuiPaginationItem-page.Mui-selected": {
    borderRadius: 20,
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  "& .MuiPaginationItem-previousNext": {
    margin: 10,
    borderRadius: 20,
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export const StyledSearchInput = styled(InputBase)(({ theme }) => ({
  height: 40,
  fontSize: 12,
  maxWidth: 450,
  width: "100%",
  fontWeight: 500,
  padding: "0.5rem",
  borderRadius: "4px",
  backgroundColor: "white",
  color: theme.palette.text.primary,
}));

// export const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
//   fontSize: 16,
//   marginLeft: "0.5rem",
//   marginRight: "0.5rem",
//   color: theme.palette.primary.main,
// }));

// custom styled components for badge
export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));

// custom styled components for auth fields
export const AuthTextFieldWrapper = styled(Box)(({ theme }) => ({
  width: "48%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: "0.5rem",
  },
}));

// custom styled components for navbar
export const DashboardNavbarRoot = styled(AppBar)(() => ({
  zIndex: 11,
  padding: "0.5rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  backdropFilter: "blur(6px)",
  backgroundColor: "#fff",
}));

export const StyledToolBar = styled(Toolbar)(() => ({
  "@media (min-width: 0px)": {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: "auto",
  },
}));

export const CustomMenuList = styled(Small)(({ theme }) => ({
  display: "block",
  padding: "5px 1rem",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.secondary.light
        : theme.palette.divider,
  },
}));
