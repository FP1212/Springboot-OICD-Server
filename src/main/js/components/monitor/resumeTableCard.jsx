import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableContainer,
  Paper,
  Box,
} from "@mui/material";
import CustomToolbar from "Components/customToolbar";
import { useSelector } from "react-redux";
import { selectMonitorInputs } from "Redux/components/monitor/monitorSlice";
import StyledTableCell from "Components/styledTableCell";
import StyledTableRow from "Components/styledTableRow";
import StyledTableHead from "Components/styledTableHead";
import { useTranslation } from "react-i18next";

const EmptyRow = ({ t }) => (
  <StyledTableRow key="row-when-inputs-empty">
    <StyledTableCell component="th" scope="row">
      <Typography variant="h6" sx={{ fontSize: "clamp(0.7rem,1vw,1.8rem)" }}>
        {t("EmptyTable")}
      </Typography>
    </StyledTableCell>
    <StyledTableCell align="left"></StyledTableCell>
  </StyledTableRow>
);

const resumeTable = () => {
  const inputs = useSelector(selectMonitorInputs);
  const [t, i18n] = useTranslation();
  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      <CustomToolbar title={t("Resume")} />
      <TableContainer sx={{ height: "32vh", maxHeight: "32vh" }}>
        <Table
          stickyHeader
          sx={{ width: "100%", height: "max-content" }}
          aria-label="customized table">
          <StyledTableHead headers={[t("Label"), t("Value")]} />
          <TableBody sx={{ overflow: "auto" }}>
            {Object.keys(inputs).length === 0 ? (
              <EmptyRow t={t} />
            ) : (
              inputs.map((input, i) => {
                return (
                  <StyledTableRow key={"row-resume" + i}>
                    <StyledTableCell component="th" scope="row">
                      <Typography
                        variant="body1"
                        textTransform={"uppercase"}
                        fontWeight={"bold"}>
                        {input.label}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography variant="body1">{input.value}</Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default resumeTable;
