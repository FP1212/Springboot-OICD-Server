const API_URL = "http://localhost:9090";

const API_ROUTES = {
  SIGNIN: `${API_URL}/api/v1/auth/signin`,
  SIGNUP: `${API_URL}/api/v1/auth/signup`,
};

export default Object.freeze(API_ROUTES);
