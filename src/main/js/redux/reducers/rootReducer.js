import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
//import dashboardReducer from "Redux/components/dashboard/dashboardSlice";
import globalAlertReducer from 'Redux/components/globalAlert/globalAlert';
import loginReducer from 'Redux/components/login/loginSlice';
import navReducer from 'Redux/components/nav/navSlice';
import statusReducer from 'Redux/components/status/statusSlice';
import drawerReducer from 'Redux/components/drawer/drawerSlice';
import darkReducer from 'Redux/components/dark/darkSlice';
import mapReducer from 'Redux/components/map/mapSlice';
import history from 'Core/history';

const initialState = {
  // Don't reset router here
  nav: { openDrawer: false, anchor: 'right', tabIndex: 0 },
  status: {},
  drawer: {},
};

const combinedReducers = combineReducers({
  router: connectRouter(history),
  //dashboard: dashboardReducer,
  login: loginReducer,
  nav: navReducer,
  status: statusReducer,
  drawer: drawerReducer,
  dark: darkReducer,
  globalAlert: globalAlertReducer,
  map: mapReducer,
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};

export default rootReducer;
