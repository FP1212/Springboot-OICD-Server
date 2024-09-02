import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { setPositions } from '../../redux/components/traccar/positions/positionsSlice';
import { useKeycloak } from '@react-keycloak/web';

const WebSocketHandler = ({ serverUrl }) => {
  const { keycloak, initialized } = useKeycloak();
  const [wsUrl, setWsUrl] = useState(`${serverUrl}?token=${keycloak.token}`);
  const { lastJsonMessage, readyState, getWebSocket } = useWebSocket(wsUrl, {
    shouldReconnect: (closeEvent) => true,
    onOpen: () => console.log('WebSocket connection opened'),
    onError: (error) => console.error('WebSocket error:', error),
  });

  useEffect(() => {
    if (initialized && keycloak.token) {
      setWsUrl(`${serverUrl}?token=${keycloak.token}`);
      const socket = getWebSocket();
      if (socket) socket.close();
    }
  }, [keycloak.token]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (lastJsonMessage !== null) {
      dispatch(setPositions(lastJsonMessage));
    }
  }, [lastJsonMessage, dispatch]);

  return null;
};

WebSocketHandler.propTypes = {
  serverUrl: PropTypes.string.isRequired,
};

export default WebSocketHandler;
