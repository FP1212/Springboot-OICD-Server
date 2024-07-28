export const excludeAPISignup = '/auth/signup';

const API_ROUTES = {
  SIGNIN: `${process.env.REACT_APP_API_URL}/auth/signin`,
  SIGNUP: `${process.env.REACT_APP_API_URL}${excludeAPISignup}`,
  SIGNOUT: `${process.env.REACT_APP_API_URL}/auth/signout`,
  REFRESH_TOKEN: `${process.env.REACT_APP_API_URL}/auth/refresh-token`,
  DASHBOARD: `${process.env.REACT_APP_API_URL}/dashboard`,
};

export default Object.freeze(API_ROUTES);
