import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Button } from "@mui/material";
import ROUTES from "Constants/routes";
import {
  Monitor as MonitorIcon,
  Stop as StopIcon,
  PlayArrow as PlayIcon,
} from "@mui/icons-material";

const Home = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        startIcon={<PlayIcon />}
        onClick={() => history.push(ROUTES.SIGNING)}
        sx={{
          width: "auto",
          textTransform: "capitalize",
          fontSize: "clamp(0.5rem,1vw,1rem)",
          fontWeight: "400",
        }}
      >
        Login
      </Button>
    </React.Fragment>
  );
};

export default Home;
