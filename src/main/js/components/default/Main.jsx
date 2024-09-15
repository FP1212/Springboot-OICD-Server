import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MapOverlay from '../map/MapOverlay';

export default function Main({ children }) {
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
      <CssBaseline />
      {children}
      <MapOverlay />
    </Box>
  );
}
