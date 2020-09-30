/* eslint-disable sort-keys */
const LOCAL = {
  name: 'proxy',
  proxy_url: 'http://localhost:8081/api/v1',
};

const PRODUCTION = {
  name: 'bitbucket',
  repo: 'TODO_REPO',
  auth_type: 'implicit',
  app_id: 'TODO_REPO_APP_ID',
};

export default process.env.NODE_ENV === 'development' ? LOCAL : PRODUCTION;
