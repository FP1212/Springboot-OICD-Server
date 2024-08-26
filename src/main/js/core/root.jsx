import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import Routes from '../core/routes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { WebSocketProvider } from '../context/WebSocketProvider';
import { useKeycloak } from '@react-keycloak/web';

class Root extends React.Component {
  render() {
    const { store, history } = this.props;
    const serverUrl = `${process.env.TRACCAR_SOCKET_URL}`;

    return (
      <React.Fragment>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <WebSocketProvider serverUrl={serverUrl}>
                <Routes history={history} />
              </WebSocketProvider>
            </LocalizationProvider>
          </ConnectedRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default Root;
