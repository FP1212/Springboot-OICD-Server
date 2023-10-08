import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";

// const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
//   return isAuthenticated ? children : <Link to="/login" />;
// };

const defaultLogin = "/login";

const PrivateRoute = ({
  path,
  auth: { isAuthenticated },
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
          <Link to={defaultLogin} />
        )
      }
      history={history}
    />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  auth: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
