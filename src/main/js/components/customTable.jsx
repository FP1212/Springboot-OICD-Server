import React, { useState, useRef, useEffect } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableContainer,
  Paper,
  Toolbar,
  Box,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import CustomToolbar from "Components/customToolbar";
import StyledTableCell from "Components/styledTableCell";
import StyledTableRow from "Components/styledTableRow";
import StyledTableHead from "Components/styledTableHead";
import { resuscribe, unsuscribe } from "Redux/components/broker/brokerSlice";
import CircleIcon from "@mui/icons-material/Circle";
import { availableStatus } from "Utils";
import { grey } from "@mui/material/colors";
import { useTranslation } from "react-i18next";

const EmptyRow = () => (
  <StyledTableRow key="row-when-inputs-empty">
    <StyledTableCell component="th" scope="row">
      <Typography variant="h6">Waiting for inputs ...</Typography>
    </StyledTableCell>
    <StyledTableCell align="right"></StyledTableCell>
  </StyledTableRow>
);

//ddu.main_unit.environment
const TableStatus = ({
  sources,
  action,
  brokerOptions,
  headers,
  title,
  showValues = false,
  customStyle = {},
}) => {
  const dispatch = useDispatch();
  //Simil to DidComponentMount
  const isInitialMount = useRef(true);
  const [t] = useTranslation();
  const theme = useTheme();

  const rows = sources.reduce((prev, curr, i) => {
    return [
      ...prev,
      ...curr.data.map((source, i) => ({
        ...source,
        source: source.name,
        status: source.status,
      })),
    ];
  }, []);

  useEffect(() => {
    if (isInitialMount) {
      if (brokerOptions)
        dispatch(
          resuscribe({
            ...brokerOptions,
            action,
          })
        );
    }
    return () => {
      if (brokerOptions) dispatch(unsuscribe(brokerOptions));
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <CustomToolbar title={title} customStyle={{ ...customStyle.toolbar }} />
        <TableContainer>
          <Table
            stickyHeader
            sx={{ width: "100%" }}
            aria-label="customized table"
            size="small">
            <StyledTableHead headers={headers} />
            <TableBody>
              {Object.keys(rows).length === 0 ? (
                <EmptyRow />
              ) : (
                rows.map((row, i) => {
                  return (
                    <StyledTableRow hover key={"row-resume" + i}>
                      <StyledTableCell component="th" scope="row">
                        <Typography
                          variant="caption"
                          // textTransform="uppercase"
                          fontSize="clamp(0.8rem, 0.8vw, 2rem)"
                          fontWeight="bold"
                          color={
                            theme.palette.mode == "dark"
                              ? grey[400]
                              : "rgb(38, 70, 83)"
                          }>
                          {t(row.source)}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Typography variant="body1" textTransform="capitalize">
                          {row.status > availableStatus.length - 1 ? (
                            <CircleIcon
                              sx={{
                                ...availableStatus[availableStatus.length - 1],
                              }}
                            />
                          ) : (
                            <CircleIcon
                              sx={{
                                ...availableStatus[row.status],
                              }}
                            />
                          )}
                        </Typography>
                      </StyledTableCell>
                      {showValues ? (
                        <StyledTableCell align="center">
                          <Typography
                            variant="body1"
                            textTransform="capitalize">
                            {typeof row.value === "boolean"
                              ? row.value
                                ? "Enabled"
                                : "Disabled"
                              : row.value}
                          </Typography>
                        </StyledTableCell>
                      ) : undefined}
                    </StyledTableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TableStatus;
