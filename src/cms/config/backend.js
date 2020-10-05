/* eslint-disable sort-keys */
const LOCAL = {
  name: 'proxy',
  proxy_url: 'http://localhost:8081/api/v1',
};

const PRODUCTION = {
  name: 'github',
  repo: 'rightinyourwheelhouse/wheelhouse-website',
};

export default process.env.NODE_ENV === 'development' ? LOCAL : PRODUCTION;
