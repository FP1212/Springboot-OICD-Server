import React, { useState } from 'react';
import styles from '../../styles/MapOverlay.module.scss';
import {
  AppBar,
  Collapse,
  Container,
  Divider,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { SearchRounded, MenuRounded } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { selectDevices } from '../../redux/components/traccar/devices/devicesSlice';

const MapOverlay = () => {
  const [openContextualBar, setOpenContextualBar] = useState(false);
  const devices = useSelector(selectDevices);
  const handleOpenContextualBar = () => setOpenContextualBar(!openContextualBar);

  return (
    <Container className={styles['map-overlay']}>
      <AppBar className={styles['app-bar-devices']}>
        <IconButton
          size="large"
          onClick={handleOpenContextualBar}
          className={styles['button-app-bar']}
        >
          <MenuRounded />
        </IconButton>
        <InputBase
          size="small"
          id="search-device"
          placeholder="Search Your Device"
          className={styles['input-search-app-bar']}
        />
        <IconButton size="large" className={styles['button-app-bar']}>
          <SearchRounded />
        </IconButton>
      </AppBar>
      <Collapse in={openContextualBar} timeout="auto" unmountOnExit>
        <Paper className={styles['paper-devices']}>
          <Stack>
            <List>
              {devices && devices.length > 0 ? (
                <>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary="Inbox" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </>
              ) : (
                <ListItemText primary="There's no devices found" />
              )}
            </List>
          </Stack>
        </Paper>
      </Collapse>
    </Container>
  );
};

export default MapOverlay;
