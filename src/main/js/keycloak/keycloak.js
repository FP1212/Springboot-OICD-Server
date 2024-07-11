import Keycloak from 'keycloak-js';
const keycloak = new Keycloak({
  url: 'http://localhost:8083/auth',
  realm: 'iotwatch',
  clientId: 'iotwatch-web',
});

export default keycloak;
