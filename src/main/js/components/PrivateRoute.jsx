import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Main from './default/Main';
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
            <Main>{React.cloneElement(children, { didComplete: routeProps })}</Main>
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
