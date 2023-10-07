const API_URL = "http://localhost:9090";

const API_ROUTES = {
  LOGIN: `${API_URL}/login`,
  IS_VALID_SESSION: `${API_URL}/api/v1/auth/authenticate`,
};

export default Object.freeze(API_ROUTES);
