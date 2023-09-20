import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Snackbar, Alert } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { selectAlarmLastData } from "Redux/components/alarm/alarmSlice";
import { useHistory } from "react-router";
import ROUTES from "Constants/routes";

export default function SimpleSnackbar() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({ status: "", id: undefined });
  const lastData = useSelector(selectAlarmLastData);
  const history = useHistory();

  const handleClick = ({ status, id }) => {
    if (status !== "error") {
      return;
    }
    setOpen(true);
    setMessage({ status, id });
  };

  const forceClose = () => {
    setOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    handleClick(lastData);
    return () => {
      forceClose();
    };
  }, [lastData]);

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          onClick={() => history.push(ROUTES.ALARMS)}
          severity={message.status || "error"}
          variant="filled"
          sx={{ width: "100%", textTransform: "capitalize" }}>
          {`${message.status}, ID: ${message.id}`}
        </Alert>
      </Snackbar>
    </div>
  );
}
