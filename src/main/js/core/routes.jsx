import React, { useState, useRef, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { update } from "Redux/components/alarm/alarmSlice";
// import { resuscribe, unsuscribe } from "Redux/components/broker/brokerSlice";
import { Switch, Route } from "react-router";
import ROUTES from "Constants/routes";
import loadable from "@loadable/component";
// import Nav from "./nav";
// import PermanentDrawer from "Components/drawer/permanentDrawer";
// import styles from "Styles/routes.module.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { selectDarkMode } from "Redux/components/dark/darkSlice";
import CssBaseline from "@mui/material/CssBaseline";
import { selectLogin } from "Redux/components/login/loginSlice";

// Load bundles asynchronously so that the initial render happens faster
const Login = loadable(() =>
  import(/* webpackChunkName: "LoginChunk" */ "Pages/login/login")
);
// const Dashboard = loadable(() =>
//   import(/* webpackChunkName: "DashboardChunk" */ "Pages/dashboard/dashboard")
// );

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
  const isInitialMount = useRef(true);
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

  // useEffect(() => {
  //   loginState.authorized
  //     ? history.push(ROUTES.DASHBOARD)
  //     : history.push(ROUTES.DASHBOARD); //ROUTES.LOGIN ojo lo desactivo para probar
  // }, [loginState.authorized]);

  // useEffect(() => {
  //   if (isInitialMount) {
  //     if (brokerOptions)
  //       dispatch(
  //         resuscribe({
  //           ...brokerOptions,
  //           action: update,
  //         })
  //       );
  //   }
  //   return () => {
  //     if (brokerOptions) dispatch(unsuscribe(brokerOptions));
  //   };
  // }, [loginState.authorized]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Switch>
        <Route
          exact
          path={ROUTES.LOGIN}
          component={Login}
          history={history}></Route>
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
      </Switch>
    </ThemeProvider>
  );
};

export default Routes;
