import { useEffect, useRef } from 'react';
import ReconnectingWebSocket from 'reconnecting-webSocket';

const useWebSocket = (serverUrl) => {
  const webSocketRef = useRef(null);

  useEffect(() => {
    if (webSocketRef.current === null || webSocketRef.current.url !== serverUrl) {
      if (webSocketRef.current) {
        webSocketRef.current.close(); // Cierra la instancia anterior si existe
      }
      try {
        webSocketRef.current = new ReconnectingWebSocket(serverUrl);
      } catch (error) {
        console.error(error);
      }
    }

    return () => {
      if (webSocketRef.current) {
        webSocketRef.current.close();
      }
    };
  }, [serverUrl]);

  const subscribeToEvent = (eventName, callback) => {
    if (webSocketRef.current) {
      webSocketRef.current.addEventListener(eventName, callback);
    }
  };

  const unsubscribeFromEvent = (eventName) => {
    if (webSocketRef.current) {
      webSocketRef.current.removeEventListener(eventName);
    }
  };

  return {
    webSocket: webSocketRef.current,
    subscribeToEvent,
    unsubscribeFromEvent,
  };
};

export default useWebSocket;
