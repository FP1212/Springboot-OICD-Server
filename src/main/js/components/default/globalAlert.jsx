import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { show } from "Redux/components/globalAlert/globalAlert";
import { useDispatch } from "react-redux";

const GlobalAlert = ({ openAlert = false, message, severity }) => {
  const [open, setOpen] = useState(openAlert);
  const dispatch = useDispatch();

  useEffect(() => {
    setOpen(openAlert);
  }, [openAlert]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    dispatch(show({ open: false }));
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default GlobalAlert;
