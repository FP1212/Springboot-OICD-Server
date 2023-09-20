import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import {
  Container,
  IconButton,
  Box,
  Chip,
  Alert,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { selectAlarmData ,drop} from "Redux/components/alarm/alarmSlice";
const { ddu } = window.api.config.broker.exchanges;

const statusChipList = {
  info: { icon: <InfoIcon />, color: "primary" },
  success: { icon: <DoneIcon />, color: "success" },
  warning: { icon: <WarningIcon />, color: "warning" },
  error: { icon: <ErrorIcon />, color: "error" },
};

export default function DataTable(props) {
  const dispatch = useDispatch();
  const alarmState = useSelector(selectAlarmData);
  const isInitialMount = useRef(true);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [t, i18n] = useTranslation();

  const columns = [
    { field: "id", headerName: t("ID"), width: 40, minWidth: 40 },
    {
      field: "status",
      headerName: t("Status"),
      width: 120,
      //flex: 1,
      minWidth: 100,
      renderCell: (params) => {
        return (
          <Chip
            variant="outlined"
            label={t(params.row.status)}
            icon={statusChipList[params.row.status].icon}
            color={statusChipList[params.row.status].color}
          />
        );
      },
    },
    { field: "date", headerName: t("Date"), minWidth: 90, width:140 },
    { field: "description", headerName: t("Description"), flex: 1 },
    {
      field: "delete",
      width: 70,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <IconButton
            onClick={() =>
              dispatch(drop({ selected: new Set(selectionModel) }))
            }>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
      }}>
      <Toolbar sx={{ bgcolor: "#118ab2" }}>
        <NotificationsActiveIcon sx={{ fill: "#e5e5e5" }} />
        <Typography
          variant="h6"
          sx={{
            flex: "1 1 100%",
            color: "#edf2f4",
          }}>
          {t("Alarms")}
        </Typography>
      </Toolbar>

      <DataGrid
        rows={alarmState}
        columns={columns}
        autoPageSize
        checkboxSelection
        getRowHeight={ () => 'auto'}  
        sx={{
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
          "maxHeight": "90%",
        }}
        onSelectionModelChange={(ids) => {
          setSelectionModel(ids);
        }}
      />
    </Container>
  );
}
