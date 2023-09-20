import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Typography,
  Box,
  Button,
  Card,
  TextareaAutosize,
  Toolbar,
  TextField,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  Monitor as MonitorIcon,
  Stop as StopIcon,
  PlayArrow as PlayIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { useTranslation } from "react-i18next";

//monitorSlice reducers
import {
  selectMonitorTitle,
  selectMonitorData,
  selectMonitorDevice,
  playstop,
  selectMonitorPlayStopStatus,
} from "Redux/components/monitor/monitorSlice";

const monitorCard = () => {
  const title = useSelector(selectMonitorTitle);
  const dataState = useSelector(selectMonitorData);
  const selectedDevice = useSelector(selectMonitorDevice);
  const statusPlayStop = useSelector(selectMonitorPlayStopStatus);
  const dispatch = useDispatch();
  const textfieldRef = useRef(null);
  const theme = useTheme();
  const [t, i18n] = useTranslation();

  useEffect(() => {
    if (textfieldRef.current) {
      //textfieldRef.current.scrollIntoView({ behaviour: "auto" });
      textfieldRef.current.scrollTop = textfieldRef.current.scrollHeight;
    }
  }, [dataState]);

  const PlayStopButton = ({ play, t }) => {
    return play ? (
      <Button
        variant="outlined"
        startIcon={<PlayIcon />}
        onClick={() => dispatch(playstop())}
        sx={{
          width: "auto",
          textTransform: "capitalize",
          fontSize: "clamp(0.5rem,1vw,1rem)",
          fontWeight: "400",
        }}>
        {t("Play")}
      </Button>
    ) : (
      <Button
        variant="outlined"
        startIcon={<StopIcon />}
        onClick={() => dispatch(playstop())}
        sx={{
          width: "auto",
          textTransform: "capitalize",
          fontSize: "clamp(0.5rem,1vw,1rem)",
          fontWeight: "400",
        }}>
        {t("Stop")}
      </Button>
    );
  };

  return (
    <Card
      raised={true}
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        maxHeight: "40vh",
        flexDirection: "column",
        backgroundColor: theme.palette.mode == "dark" ? grey[900] : "#f8f9fa",
      }}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#118ab2",
        }}>
        <MonitorIcon sx={{ fill: "#e5e5e5" }} />
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: "clamp(0.7rem,1vw,1.8rem)",
            fontWeight: "500",
            flex: "1 1 100%",
            color: "#edf2f4",
          }}>
          Monitor
        </Typography>
      </Toolbar>
      <Toolbar>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: "clamp(0.7rem,1vw,1.8rem)",
            fontWeight: "500",
          }}>
          {`${t("DeviceSelected")}:`}
        </Typography>
        <Typography
          mx={2}
          sx={{
            width: "auto",
            textTransform: "capitalize",
            fontSize: "clamp(0.5rem,1vw,1.2rem)",
            fontWeight: "400",
          }}>
          {t(title) || t("None")}
        </Typography>
        <PlayStopButton play={statusPlayStop} t={t} />
      </Toolbar>
      <Box sx={{ p: 1, flex: "1 1 100%" }}>
        <TextareaAutosize
          ref={textfieldRef}
          id="outlined-multiline-flexible"
          label="Monitor"
          value={dataState}
          disabled={true}
          minRows={10}
          style={{
            width: "100%",
            height: "100%",
            resize: "none",
            backgroundColor: "#FFFFFF00",
            borderRadius: "1vh",
            border: "1px solid  rgba(214, 208, 213, 1)",
            overflow: "auto",
            //scrollBehavior: "smooth",
            color: theme.palette.text.primary,
          }}
        />
      </Box>
    </Card>
  );
};

export default monitorCard;
