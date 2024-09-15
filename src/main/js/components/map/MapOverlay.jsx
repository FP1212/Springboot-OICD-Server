import React, { useCallback, useState } from 'react';
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
import { SearchRounded, MenuRounded, LocationOn, DirectionsCar } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { selectDevices } from '../../redux/components/traccar/devices/devicesSlice';
import { selectPositionByDeviceId } from '../../redux/components/traccar/positions/positionsSlice';
import { selectMapViewState, setViewState } from '../../redux/components/map/mapSlice';
import { getState } from '../../redux/store/store';
import { useMap } from 'react-map-gl';

const MapOverlay = () => {
  const [openContextualBar, setOpenContextualBar] = useState(false);
  const devices = useSelector(selectDevices);
  const dispatch = useDispatch();
  const { current: map } = useMap();

  const handleOpenContextualBar = () => {
    setOpenContextualBar(!openContextualBar);
  };

  const handleSelectDevice = useCallback(
    (device) => {
      if (map && device) {
        const position = getState()?.positions[device.id];
        map.flyTo({
          center: [position.longitude, position.latitude],
          zoom: 14,
          duration: 1300,
          easing: (t) => t,
        });
      }
    },
    [map],
  );

  return (
    <div className={styles['map-overlay']}>
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
                devices.map((device, i) => {
                  return (
                    <ListItem disablePadding key={device.uniqueId}>
                      <ListItemButton
                        disabled={device.disabled}
                        onClick={() => handleSelectDevice(device)}
                      >
                        <ListItemIcon>
                          <DirectionsCar />
                        </ListItemIcon>
                        <ListItemText primary={device.name} />
                        <ListItemIcon>
                          <LocationOn />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  );
                })
              ) : (
                <ListItemText primary="There's no devices found" />
              )}
            </List>
          </Stack>
        </Paper>
      </Collapse>
    </div>
  );
};

export default MapOverlay;
