import React from "react";
import { TableCell, styled, tableCellClasses } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: "#118ab2",
    //color: theme.palette.common.white,
    fontWeight: "bolder",
    fontSize: "clamp(0.8rem,1vw,2rem)",
    textTransform: "capitalize",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "clamp(0.8rem,1vw,2rem)",
    textTransform: "capitalize",
    fontFamiliy: "Arial",
  },
}));

export default StyledTableCell;
