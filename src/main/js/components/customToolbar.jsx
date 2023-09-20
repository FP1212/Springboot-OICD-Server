import React from "react";
import { Typography, Toolbar, IconButton } from "@mui/material";
import TableRowsIcon from "@mui/icons-material/TableRows";

const CustomToolbar = ({ title, customStyle }) => (
  <Toolbar
    sx={{
      pl: { sm: 2 },
      pr: { xs: 1, sm: 1 },
      backgroundColor: "#118ab2",
      color: "white",
      ...customStyle,
    }}>
    <Typography
      sx={{
        flex: "1 1 100%",
        color: "#edf2f4",
        fontSize: "clamp(0.7rem,1vw,1.8rem)",
      }}
      variant="h6"
      id="tableTitle"
      component="div"
      textTransform="capitalize">
      {title}
    </Typography>
    <IconButton>
      <TableRowsIcon sx={{ fill: "#edf2f4" }} />
    </IconButton>
  </Toolbar>
);

export default CustomToolbar;
