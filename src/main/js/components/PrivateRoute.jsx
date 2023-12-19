import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import ROUTES from "Constants/routes";

const PrivateRoute = ({
  path,
  auth: { isAuthenticated = false },
  history,
  children,
}) => {
  return (
    <Route
      exact
      path={path}
      render={(routeProps) =>
        isAuthenticated ? (
          <React.Fragment>
            {React.cloneElement(children, { didComplete: routeProps })}
          </React.Fragment>
        ) : (
          <Redirect to={ROUTES.SIGNIN} />
        )
      }
      history={history}
    />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
