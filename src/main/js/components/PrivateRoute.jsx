import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import ROUTES from 'Constants/routes';
import CustomAppBar from './default/CustomAppBar';
import { useKeycloak } from '@react-keycloak/web';
import LoadingBackdrop from './default/loadingBackdrop';

const PrivateRoute = ({ children, ...props }) => {
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    if (initialized) {
      if (!keycloak.authenticated) {
        keycloak.login();
      }
    }
  }, [initialized]);

  return (
    <Route
      {...props}
      render={(routeProps) =>
        keycloak.authenticated ? (
          <React.Fragment>
            <CustomAppBar>{React.cloneElement(children, { didComplete: routeProps })}</CustomAppBar>
          </React.Fragment>
        ) : (
          <LoadingBackdrop open={!keycloak.authenticated} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  history: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
