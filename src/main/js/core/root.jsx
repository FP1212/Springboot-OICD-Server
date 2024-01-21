import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import Routes from "Core/routes";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


class Root extends React.Component {
  render() {
    const { store, history } = this.props;
    return (
      <React.Fragment>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Routes history={history} />
            </LocalizationProvider>
          </ConnectedRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default Root;
