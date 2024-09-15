import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import API_ROUTES from '../../constants/apiRoutes';
import { useDispatch } from 'react-redux';
import { setDevices } from '../../redux/components/traccar/devices/devicesSlice';
import customFetch from '../../utils/customFetch';
import { show } from '../../redux/components/globalAlert/globalAlert';
import apiRoutes from '../../constants/apiRoutes';
import WebSocketHandler from '../handlers/WebSocketHandler';

export default function Main({ children }) {
  const dispatch = useDispatch();
  const [loaded, refresh] = customFetch({
    url: API_ROUTES.TRACCAR.DEVICES,
    method: 'GET',
    onSuccess: (data) => dispatch(setDevices(data)),
    onError: (error) =>
      dispatch(
        show({
          open: true,
          showLoading: false,
          severity: 'error',
          message: error?.message,
        }),
      ),
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        width: 'inherit',
        height: 'inherit',
        position: 'relative',
        flexDirection: 'column',
      }}
    >
      <WebSocketHandler serverUrl={apiRoutes.TRACCAR.SOCKET} />
      <CssBaseline />
      {children}
    </Box>
  );
}
