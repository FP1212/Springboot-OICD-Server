import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import ReconnectingWebSocket from 'reconnecting-webSocket';
import { useKeycloak } from '@react-keycloak/web';

export const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ serverUrl, children }) => {
  const webSocketRef = useRef(null);
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    if (initialized) {
      try {
        connect();
        webSocketRef.current.onerror = async () => {
          console.error('WebSocket error occurred. Trying to reconnect with a new token.');
          try {
            await keycloak.updateToken(5);
            connect();
          } catch (error) {
            console.error('Error updating Keycloak token:', error);
          }
        };
      } catch (error) {
        console.error(error);
      }
    } else {
      close();
    }
    return () => {
      close();
    };
  }, [serverUrl, initialized]);

  const onMessage = useCallback((callback) => {
    if (webSocketRef.current) {
      webSocketRef.current.onmessage((event) => callback(event));
    }
  }, []);

  const connect = useCallback(() => {
    close();
    webSocketRef.current = new ReconnectingWebSocket(`${serverUrl}?token=${keycloak.token}`);
  }, [keycloak]);

  const close = useCallback(() => {
    if (webSocketRef.current) webSocketRef.current.close();
  }, []);

  const value = {
    webSocket: webSocketRef.current,
    onMessage,
    close,
  };

  return <WebSocketContext.Provider value={value}>{children} </WebSocketContext.Provider>;
};
