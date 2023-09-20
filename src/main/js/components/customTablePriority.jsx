import React, { useState, useRef, useEffect } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableContainer,
  Paper,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import CustomToolbar from "Components/customToolbar";
import StyledTableCell from "Components/styledTableCell";
import StyledTableRow from "Components/styledTableRow";
import StyledTableHead from "Components/styledTableHead";
import {
  resuscribe,
  unsuscribe,
  sendRpcDirectReplyTo,
} from "Redux/components/broker/brokerSlice";
import CircleIcon from "@mui/icons-material/Circle";
import { availableStatus } from "Utils";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";

const EmptyRow = () => (
  <StyledTableRow key="row-when-inputs-empty">
    <StyledTableCell component="th" scope="row">
      <Typography variant="h6">Waiting for inputs ...</Typography>
    </StyledTableCell>
    <StyledTableCell align="right"></StyledTableCell>
  </StyledTableRow>
);

//ddu.main_unit.environment
const CustomTablePriority = ({
  sources,
  action,
  brokerOptions,
  headers,
  title,
  customStyle = {},
}) => {
  const theme = useTheme();

  const dispatch = useDispatch();
  //Simil to DidComponentMount
  const isInitialMount = useRef(true);

  const rows = sources.reduce((prev, curr, i) => {
    return [
      ...prev,
      ...curr.data.map((source, i) => ({
        ...source,
        source: source.name,
        status: source.status,
        priorities: curr.priorities,
      })),
    ];
  }, []);

  useEffect(() => {
    if (isInitialMount) {
      if (brokerOptions)
        dispatch(
          resuscribe({
            ...brokerOptions,
            action: action.update,
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
            sx={{ width: "100%", height: "25vh" }}
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
                          textTransform="uppercase"
                          fontSize="clamp(0.8rem, 0.8vw, 2rem)"
                          fontWeight="bold"
                          color={
                            theme.palette.mode == "dark"
                              ? grey[400]
                              : "rgb(38, 70, 83)"
                          }>
                          {row.source}
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
                      <StyledTableCell align="center">
                        <FormControl
                          sx={{ m: 1, minWidth: 60 }}
                          variant="standard"
                          size="small">
                          {/* <InputLabel id="demo-select-small">
                            Priority
                          </InputLabel> */}
                          <Select
                            labelId="priority"
                            id="prioritySelect"
                            value={row.priority}
                            // label="priority"
                            onChange={(event) => {
                              dispatch(
                                sendRpcDirectReplyTo({
                                  action: action.changePriority,
                                  device: row.name,
                                  priority: event.target.value,
                                  messageType: 19,
                                })
                              );
                            }}>
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {row.priorities.map((priority, i) => (
                              <MenuItem key={i + "priority"} value={priority}>
                                {priority}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </StyledTableCell>
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

export default CustomTablePriority;
