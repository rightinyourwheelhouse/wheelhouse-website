/* eslint-disable sort-keys */
import CMS from 'netlify-cms-app';

import blogPage from './config/pages/blogPage';
import careersPage from './config/pages/careersPage';
import landingPage from './config/pages/landingPage';
import privacyPolicy from './config/pages/privacyPolicyPage';
import teamPage from './config/pages/teamPage';

import backend from './config/backend';

CMS.init({
  config: {
    // publish_mode: 'editorial_workflow',
    backend,
    collections: [
      {
        label: 'Pages',
        name: 'pages',
        files: [
          { ...landingPage },
          { ...teamPage },
          { ...careersPage },
          { ...blogPage },
          { ...privacyPolicy },
        ],
      },
    ],
    load_config_file: true,
    media_folder: 'static/assets',
    public_folder: 'assets',
  },
});
