import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import ROUTES from 'Constants/routes';
import CustomAppBar from './default/CustomAppBar';
import { useKeycloak } from '@react-keycloak/web';
import LoadingBackdrop from './default/loadingBackdrop';

const PrivateRoute = ({ path, history, children }) => {
  const { keycloak, initialized } = useKeycloak();
  const [isLoggedIn, setIsLoggedIn] = useState(keycloak.authenticated);

  useEffect(() => {
    if (initialized) {
      setIsLoggedIn(keycloak.authenticated);
    }
  }, [initialized]);

  return (
    <Route
      exact
      path={path}
      render={(routeProps) =>
        isLoggedIn ? (
          <React.Fragment>
            <CustomAppBar>{React.cloneElement(children, { didComplete: routeProps })}</CustomAppBar>
          </React.Fragment>
        ) : (
          <LoadingBackdrop open={!isLoggedIn} />
        )
      }
      history={history}
    />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
