import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { setPositions } from '../../redux/components/traccar/positions/positionsSlice';

const WebSocketHandler = ({ serverUrl }) => {
  const { lastJsonMessage, readyState } = useWebSocket(serverUrl);
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
