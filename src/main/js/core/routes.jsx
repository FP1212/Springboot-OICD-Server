import React, { useState, useRef, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
// import { update } from "Redux/components/alarm/alarmSlice";
// import { resuscribe, unsuscribe } from "Redux/components/broker/brokerSlice";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ROUTES from "Constants/routes";
import loadable from "@loadable/component";
// import Nav from "./nav";
// import PermanentDrawer from "Components/drawer/permanentDrawer";
// import styles from "Styles/routes.module.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { selectDarkMode } from "Redux/components/dark/darkSlice";
import CssBaseline from "@mui/material/CssBaseline";
import { selectLogin, isValidSession } from "Redux/components/login/loginSlice";

// Load bundles asynchronously so that the initial render happens faster
const Home = loadable(() =>
  import(/* webpackChunkName: "LoginChunk" */ "Pages/home/home")
);

const Login = loadable(() =>
  import(/* webpackChunkName: "LoginChunk" */ "Pages/login/login")
);
const Dashboard = loadable(() =>
  import(/* webpackChunkName: "DashboardChunk" */ "Pages/dashboard/dashboard")
);

// const Status = loadable(() =>
//   import(/* webpackChunkName: "StatusChunk" */ "Pages/status/status")
// );

// const Alarms = loadable(() =>
//   import(/* webpackChunkName: "AlarmsChunk" */ "Pages/alarms/alarms")
// );

// const Monitor = loadable(() =>
//   import(/* webpackChunkName: "MonitorChunk" */ "Pages/monitor/monitor")
// );

// const Simulator = loadable(() =>
//   import(/* webpackChunkName: "SimulatorChunk" */ "Pages/simulator/simulator")
// );

// const Configuration = loadable(() =>
//   import(
//     /* webpackChunkName: "ConfigurationChunk" */ "Pages/configuration/configuration"
//   )
// );

const Routes = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  const loginState = useSelector(selectLogin);

  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode,
        },
      }),
    [darkMode]
  );

  useEffect(() => {
    if (!loginState.authenticate) {
      dispatch(isValidSession());
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Route
          exact
          path={ROUTES.SIGNING}
          component={Login}
          history={history}
        />
        <Route exact path={ROUTES.INDEX} component={Home} history={history} />
        <Route exact path={ROUTES.HOME} component={Home} history={history} />
        <Route
          exact
          path={ROUTES.DASHBOARD}
          component={Dashboard}
          history={history}
        />

        {/* <React.Fragment>
          <Nav history={history}></Nav>
          <div component="main" className={styles.main}>
            <div className={styles.container}>
              <div className={styles.nav_space} />
              <div className={styles.workspace}>
                <Route path={ROUTES.DASHBOARD} component={Dashboard}></Route>
                <Route path={ROUTES.STATUS} component={Status}></Route>
                <Route path={ROUTES.ALARMS} component={Alarms}></Route>
                <Route path={ROUTES.MONITOR} component={Monitor}></Route>
                <Route path={ROUTES.SIMULATOR} component={Simulator}></Route>
                <Route
                  path={ROUTES.CONFIGURATION}
                  component={Configuration}></Route>
              </div>
            </div>
            <PermanentDrawer />
          </div>
        </React.Fragment> */}
      </Router>
    </ThemeProvider>
  );
};

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
