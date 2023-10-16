const API_URL = process.env.REACT_APP_API_URL;

const API_ROUTES = {
  SIGNIN: `${API_URL}/auth/signin`,
  SIGNUP: `${API_URL}/auth/signup`,
  SIGNOUT: `${API_URL}/auth/signout`,
  REFRESH_TOKEN: `${API_URL}/auth/refresh-token`,
  DASHBOARD: `${API_URL}/dashboard`,
};

export default Object.freeze(API_ROUTES);
