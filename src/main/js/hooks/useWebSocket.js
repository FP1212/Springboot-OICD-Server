import { useEffect, useState } from 'react';
import ReconnectingWebSocket from 'reconnecting-webSocket';
import axios from 'axios';

const useWebSocket = (serverUrl) => {
  const [webSocket, setWebSocket] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams();
    params.append('email', 'fept1298@gmail.com');
    params.append('password', '10514Faee2*');

    axios
      .post('http://localhost:8082/api/session', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(() => {
        const webSocketInstance = new ReconnectingWebSocket(serverUrl);
        setWebSocket(webSocketInstance);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      webSocket.close();
    };
  }, [serverUrl]);

  const subscribeToEvent = (eventName, callback) => {
    if (webSocket) {
      webSocket.addEventListener(eventName, callback);
    }
  };

  const unsubscribeFromEvent = (eventName) => {
    if (webSocket) {
      webSocket.removeEventListener(eventName);
    }
  };

  return {
    webSocket,
    subscribeToEvent,
    unsubscribeFromEvent,
  };
};

export default useWebSocket;
