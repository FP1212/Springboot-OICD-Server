import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import globalAlertReducer from 'Redux/components/globalAlert/globalAlert';
import loginReducer from 'Redux/components/login/loginSlice';
import navReducer from 'Redux/components/nav/navSlice';
import statusReducer from 'Redux/components/status/statusSlice';
import drawerReducer from 'Redux/components/drawer/drawerSlice';
import darkReducer from 'Redux/components/dark/darkSlice';
import mapReducer from 'Redux/components/map/mapSlice';
import positionsReducer from 'Redux/components/traccar/positions/positionsSlice';
import devicesReducer from 'Redux/components/traccar/devices/devicesSlice';
import eventsReducer from 'Redux/components/traccar/events/eventsSlice';
import history from 'Core/history';

const combinedReducers = combineReducers({
  router: connectRouter(history),
  login: loginReducer,
  nav: navReducer,
  status: statusReducer,
  drawer: drawerReducer,
  dark: darkReducer,
  globalAlert: globalAlertReducer,
  map: mapReducer,
  positions: positionsReducer,
  devices: devicesReducer,
  events: eventsReducer,
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};

export default rootReducer;
