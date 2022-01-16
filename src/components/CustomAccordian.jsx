import React from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  styled,
} from "@mui/material";
import { H6 } from "./CustomTypography";

// styled components
const Accordion = styled(MuiAccordion)(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  color: theme.palette.text.disabled,
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: "0.9rem",
          color: "text.disabled",
        }}
      />
    }
  />
))(({ theme }) => ({
  padding: 0,
  "& .Mui-expanded": {
    color: theme.palette.primary.main,
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.main,
    },
  },
}));

const CustomAccordion = ({
  accordionHeader,
  children,
  expandedItem,
  handleChange,
}) => {
  return (
    <Accordion
      square
      disableGutters
      elevation={0}
      expanded={expandedItem === accordionHeader}
      onChange={handleChange(accordionHeader)}
      sx={{
        left: "0 !important",
      }}
    >
      <AccordionSummary
        sx={{
          px: "1rem",
          py: "0.6rem",
        }}
      >
        <H6>{accordionHeader}</H6>
      </AccordionSummary>
      <MuiAccordionDetails
        sx={{
          padding: 0,
        }}
      >
        {children}
      </MuiAccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
