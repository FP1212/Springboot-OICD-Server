import React, { useState, useEffect } from "react";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Menu,
  MenuItem,
  Switch,
  FormGroup,
  FormControlLabel,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, lightBlue, deepPurple } from "@mui/material/colors";
import DarkLightSwitch from "Components/darkLightSwitch";
import { useTheme } from "@mui/material/styles";

//Import alarmSlice reducers
import {
  trigger,
  drop,
  selectAlarmData,
} from "Redux/components/alarm/alarmSlice";

import { useHistory } from "react-router";

const drawerWidth = 240;

//navSlice reducers
import { toggleDrawer, selectNav } from "Redux/components/nav/navSlice";

const createNotificationList = (list, setNotificationState, dispatch) => {
  if (list.length > 0)
    return list.map((alarm, index) => (
      <MenuItem
        key={index + "menunav"}
        value={index}
        onClick={(event) => {
          setNotificationState({
            ...alarm,
            open: false,
            anchorEl: event.currentTarget,
            selected: event.currentTarget.value,
          });
        }}>
        <Alert
          severity={alarm.severity}
          onClick={() => {
            dispatch(drop({ index: index }));
          }}>
          {alarm.description}
        </Alert>
      </MenuItem>
    ));
  else return <MenuItem>Sin Alarmas Reportadas</MenuItem>;
};

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: lightBlue,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Nav = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar
          position="fixed"
          sx={{
            background:
              theme.palette.mode == "dark"
                ? "linear-gradient(169deg, rgba(4,107,170,1) 0%, rgba(20,81,119,1) 49%, rgba(1,47,75,1) 100%)"
                : "linear-gradient(169deg, rgba(4,107,170,1) 0%, rgba(20,81,119,1) 49%, rgba(1,47,75,1) 100%)", //"linear-gradient(169deg, rgba(96,211,255,1) 0%, rgba(96,211,255,1) 49%, rgba(0,172,255,1) 100%)",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}>
          <Toolbar
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexShrink: 1,
              justifyContent: "space-between",
            }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}>
              CDU
            </Typography>

            <DarkLightSwitch />

            <Box
              sx={{
                marginLeft: "auto",
                justifyContent: "flex-end",
              }}>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="open drawer"
                onClick={() => {
                  dispatch(toggleDrawer());
                }}
                sx={{
                  mr: 2,
                  display: { sm: "none" },
                }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};

export default Nav;
