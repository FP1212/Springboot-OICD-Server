import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import DrawerHeader from 'Components/drawer/drawerHeader';
import { useTranslation } from 'react-i18next';
//navSlice state
import { toggleDrawer, selectNav } from 'Redux/components/nav/navSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

//Import loginSlice reducers
import { signout } from 'Redux/components/login/loginSlice';

import ROUTES from 'Constants/routes';

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'unwrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const TemporaryDrawer = () => {
  const navState = useSelector(selectNav);
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();
  const [t, i18n] = useTranslation();
  //User drawer State
  const [drawer, setdrawerState] = useState({
    selected: undefined,
  });

  const list = () => (
    <Box>
      <List>
        {[
          ['Dashboard', () => {}],
          ['Status', () => {}],
          ['Alarms', () => {}],
          ['Monitor', () => {}],
          ['Simulator', () => {}],
        ].map((item, index) => (
          <ListItem button key={item[0] + 'draweritem'} onClick={item[1]}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={item[0]} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          ['Configuration', () => {}],
          [
            'Log Out',
            () => {
              dispatch(signout());
              history.push(ROUTES.SIGNIN);
            },
          ],
        ].map((item, index) => (
          <ListItem button key={item[0] + 'draweritem2'} onClick={item[1]}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={item[0]} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment key={navState.anchor}>
      <Drawer
        variant="permanent"
        anchor="right"
        open={navState.openDrawer}
        onClose={() => {
          dispatch(toggleDrawer({ openDrawer: false }));
        }}
      >
        <DrawerHeader>
          <IconButton
            onClick={() => {
              dispatch(toggleDrawer({ openDrawer: false }));
            }}
          >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default TemporaryDrawer;
