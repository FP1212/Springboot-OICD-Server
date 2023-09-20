import React, { useState, useEffect, useRef } from "react";

import {
  Box,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer,
  Badge,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  CheckCircle as StatusIcon,
  Notifications as AlarmIcon,
  Monitor as MonitorIcon,
  PlayCircleOutlineOutlined as SimulatorIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import CircleIcon from "@mui/icons-material/Circle";
import styles from "Styles/drawer.module.scss";
import { availableStatus } from "Utils";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
import ROUTES from "Constants/routes";

//navSlice state
import { toggleDrawer, selectNav } from "Redux/components/nav/navSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import ResourceManager from "Utils/ResourceManager";
import { selectDrawer, update } from "Redux/components/drawer/drawerSlice";
import { resuscribe, unsuscribe } from "Redux/components/broker/brokerSlice";
import { selectAlarmDataRemaining } from "Redux/components/alarm/alarmSlice";
import AlarmSnackBar from "Components/alarmSnackbar";

//Import loginSlice reducers
import { signout, clear } from "Redux/components/login/loginSlice";

const drawerWidth = 240;
const CotecmarLogo = ResourceManager.getIconResource("enterpriseLogo");

const AlarmBadge = () => {
  const alarmRemaining = useSelector(selectAlarmDataRemaining);
  const theme = useTheme();
  return (
    <Badge badgeContent={alarmRemaining} color="error">
      <AlarmIcon sx={{ fill: theme.palette.info.dark }} />
      <AlarmSnackBar />
    </Badge>
  );
};

const CustomListIconItem = (props) => {
  const theme = useTheme();
  const { itemName, action, Icon } = props;
  const [t] = useTranslation();
  return (
    <ListItem button key={itemName} onClick={action}>
      <ListItemIcon>
        <Icon sx={{ fill: theme.palette.info.dark }} />
      </ListItemIcon>
      <ListItemText primary={t(itemName)} />
    </ListItem>
  );
};

const CustomListStatusItem = (props) => {
  const { itemName, value, information } = props;

  return (
    <ListItem>
      <ListItemIcon>
        {value ? (
          <CircleIcon
            sx={{ width: "15px", height: "15px", ...availableStatus[value] }}
          />
        ) : (
          <div></div>
        )}
      </ListItemIcon>
      <ListItemText primary={itemName} secondary={information} />
    </ListItem>
  );
};

const DrawerContent = ({ drawerState }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { items } = drawerState;
  const theme = useTheme();
  const [t] = useTranslation();

  const firstItemsList = [
    {
      itemName: "Dashboard",
      action: () => {
        history.push(ROUTES.DASHBOARD);
      },
      Icon: DashboardIcon,
    },
    {
      itemName: "Status",
      action: () => {
        history.push(ROUTES.STATUS);
      },
      Icon: StatusIcon,
    },
    {
      itemName: "Alarms",
      action: () => {
        history.push(ROUTES.ALARMS);
      },
      Icon: AlarmBadge,
    },
    {
      itemName: "Monitor",
      action: () => {
        history.push(ROUTES.MONITOR);
      },
      Icon: MonitorIcon,
    },
    {
      itemName: "Simulator",
      action: () => {
        history.push(ROUTES.SIMULATOR);
      },
      Icon: SimulatorIcon,
    },
  ];

  const secondItemsList = [
    {
      itemName: "Settings",
      action: () => {
        history.push(ROUTES.CONFIGURATION);
      },
      Icon: SettingsIcon,
    },
    {
      itemName: "Logout",
      action: () => {
        dispatch(signout());
        history.push(ROUTES.LOGIN);
      },
      Icon: LogoutIcon,
    },
    // {
    //   itemName: "Clear",
    //   action: () => {
    //     dispatch(clear());
    //   },
    //   Icon: LogoutIcon,
    // },
  ];

  return (
    <div>
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: 5,
        }}>
        <CotecmarLogo
          style={{
            width: "72px",
            height: "72px",
            fill: theme.palette.info.dark,
          }}
        />
      </Box>

      <Toolbar>
        <Box>
          <Typography variant="subtitle1">{`${t("Status")}:`}</Typography>
          <Box px={1}>
            <List>
              {Object.entries(drawerState.items).map((item, index) => {
                return (
                  <CustomListStatusItem
                    itemName={t(item[1].name)}
                    key={index + "drawerstatus"}
                    value={t(item[1].status)}
                    information={t(item[1].value)}
                  />
                );
              })}
            </List>
          </Box>
        </Box>
      </Toolbar>
      <Divider />
      <div className={styles.drawer_content}>
        <List>
          {[...firstItemsList].map((item, index) => (
            <CustomListIconItem
              itemName={t(item.itemName)}
              action={item.action}
              Icon={item.Icon}
              key={index + "firstlist"}
            />
          ))}
        </List>
        <Divider />

        <List>
          {[...secondItemsList].map((item, index) => (
            <CustomListIconItem
              itemName={t(item.itemName)}
              action={item.action}
              Icon={item.Icon}
              key={index + "secondlist"}
            />
          ))}
        </List>
      </div>
    </div>
  );
};

const PermanentDrawer = (props) => {
  const [t] = useTranslation();

  const { openDrawer } = useSelector(selectNav);
  const theme = useTheme();
  const { window } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const dispatch = useDispatch();
  const drawerState = useSelector(selectDrawer);
  const { brokerOptions } = drawerState;
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount) {
      if (brokerOptions)
        dispatch(
          resuscribe({
            ...brokerOptions,
            action: update,
          })
        );
    }
    return () => {
      if (brokerOptions) dispatch(unsuscribe(brokerOptions));
    };
  }, []);

  return (
    <React.Fragment>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          overflow: "hidden",
        }}
        aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={openDrawer}
          onClose={() => {
            dispatch(toggleDrawer());
          }}
          anchor="right"
          PaperProps={{
            sx: {
              backgroundColor:
                theme.palette.mode == "dark" ? grey[900] : "rgb(249, 250, 251)",
              color: "rgb(99, 115, 129)",
              borderLeftStyle: "dashed",
              overflow: "hidden",
            },
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "display": { xs: "flex", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            "marginTop": "auto",
            "flexDirection": "column",
            "alignContent": "flex-end",
          }}>
          <DrawerContent drawerState={drawerState} />
          <Box
            sx={{
              flexGrow: 1,
            }}></Box>
          <div className={styles.drawer_logo}>
            <CotecmarLogo
              style={{
                width: "72px",
                height: "72px",
                fill: theme.palette.info.dark,
              }}
            />
          </div>
        </Drawer>
        <Drawer
          variant="permanent"
          anchor="right"
          PaperProps={{
            sx: {
              backgroundColor:
                theme.palette.mode == "dark" ? grey[900] : "rgb(249, 250, 251)",
              color: "rgb(99, 115, 129)",
              borderLeftStyle: "dashed",
              overflow: "hidden",
            },
          }}
          sx={{
            "display": { xs: "none", sm: "flex" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: "auto",
              flexDirection: "column",
              alignContent: "flex-end",
            },
          }}
          open>
          <DrawerContent drawerState={drawerState} />
        </Drawer>
      </Box>
    </React.Fragment>
  );
};

export default PermanentDrawer;
