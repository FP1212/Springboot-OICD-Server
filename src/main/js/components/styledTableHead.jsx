import React from "react";
import { TableRow, TableHead } from "@mui/material";
import StyledTableCell from "Components/styledTableCell";

const StyledTableHead = ({ headers }) => (
  <TableHead>
    <TableRow>
      {headers.map((header, i) =>
        i == 0 ? (
          <StyledTableCell key={"resume-header-row" + i}>
            {header}
          </StyledTableCell>
        ) : (
          <StyledTableCell align="center" key={"resume-header-row" + i}>
            {header}
          </StyledTableCell>
        )
      )}
    </TableRow>
  </TableHead>
);

export default StyledTableHead;
