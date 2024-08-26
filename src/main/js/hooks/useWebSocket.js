import { useContext } from 'react';
import { WebSocketContext } from '../context/WebSocketProvider';

export const useWebSocket = () => {
  return useContext(WebSocketContext);
};
