import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { update } from "Redux/components/alarm/alarmSlice";
// import { resuscribe, unsuscribe } from "Redux/components/broker/brokerSlice";
import { Switch, Route, Redirect } from 'react-router-dom';
import ROUTES from 'Constants/routes';
import loadable from '@loadable/component';
// import Nav from "./nav";
// import PermanentDrawer from "Components/drawer/permanentDrawer";
// import styles from "Styles/routes.module.scss";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { selectDarkMode } from 'Redux/components/dark/darkSlice';
import CssBaseline from '@mui/material/CssBaseline';
import { selectLogin } from 'Redux/components/login/loginSlice';
import PrivateRoute from '../components/PrivateRoute';
import { selectGlobalAlert } from 'Redux/components/globalAlert/globalAlert';
import GlobalAlert from '../components/default/globalAlert';
import LoadingBackdrop from '../components/default/loadingBackdrop';
import CustomDrawer from '../components/default/CustomDrawer';
import CustomAppBar from '../components/default/CustomAppBar';
import { useKeycloak } from '@react-keycloak/web';
import TrackMap from '../pages/trackMap';

// Load bundles asynchronously so that the initial render happens faster
const Home = loadable(() => import(/* webpackChunkName: "LoginChunk" */ '../pages/home'));

const Login = loadable(() => import(/* webpackChunkName: "LoginChunk" */ '../pages/login'));

const SignUp = loadable(() => import(/* webpackChunkName: "LoginChunk" */ '../pages/signup'));

const Dashboard = loadable(
  () => import(/* webpackChunkName: "DashboardChunk" */ '../pages/dashboard'),
);

// const TrackMap = loadable(
//   () => import(/* webpackChunkName: "DashboardChunk" */ '../pages/trackMap'),
// );

const Error = loadable(() => import(/* webpackChunkName: "StatusChunk" */ '../pages/error'));

// const Status = loadable(() =>
//   import(/* webpackChunkName: "StatusChunk" */ "../pages/status/status")
// );

// const Alarms = loadable(() =>
//   import(/* webpackChunkName: "AlarmsChunk" */ "../pages/alarms/alarms")
// );

// const Monitor = loadable(() =>
//   import(/* webpackChunkName: "MonitorChunk" */ "../pages/monitor/monitor")
// );

// const Simulator = loadable(() =>
//   import(/* webpackChunkName: "SimulatorChunk" */ "../pages/simulator/simulator")
// );

// const Configuration = loadable(() =>
//   import(
//     /* webpackChunkName: "ConfigurationChunk" */ "../pages/configuration/configuration"
//   )
// );

const Routes = (props) => {
  const { history } = props;
  const darkMode = useSelector(selectDarkMode);
  const loginState = useSelector(selectLogin);
  const { keycloak, initialized } = useKeycloak();

  const { open: openAlert, severity, message } = useSelector(selectGlobalAlert);

  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode,
        },
      }),
    [darkMode],
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalAlert openAlert={openAlert} severity={severity} message={message} />
      <Switch>
        <PrivateRoute path={[ROUTES.INDEX, ROUTES.HOME]} history={history}>
          <TrackMap />
        </PrivateRoute>
        <Route path={[ROUTES['404'], '*']} component={Error} />
      </Switch>
    </ThemeProvider>
  );
};

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
