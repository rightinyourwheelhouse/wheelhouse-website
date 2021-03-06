/* eslint-disable sort-keys */
import CMS from 'netlify-cms-app';

import blogPage from './config/pages/blogPage';
import careersPage from './config/pages/careersPage';
import landingPage from './config/pages/landingPage';
import privacyPolicy from './config/pages/privacyPolicyPage';
import teamPage from './config/pages/teamPage';

import employees from './employees';
import offices from './offices';
import picks from './picks';

import backend from './config/backend';

CMS.init({
  config: {
    ...backend,
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
      { ...employees },
      { ...offices },
      { ...picks },
    ],
    load_config_file: true,
    media_folder: 'static/assets',
    public_folder: 'assets',
  },
});
