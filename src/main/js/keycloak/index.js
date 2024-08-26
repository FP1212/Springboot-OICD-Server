import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8083',
  realm: 'iotwatch',
  clientId: 'iotwatch-traccar',
});

export const initOptions = {
  onLoad: 'login-required',
  autoRefreshToken: true,
};

export default keycloak;
