/* eslint-disable sort-keys */
import seo from '../seo';

export default {
  file: 'src/data/pages/teamPage.json',
  label: 'Team',
  name: 'teamPage',
  identifier_field: 'page',
  fields: [
    {
      label: 'Page',
      name: 'page',
      widget: 'hidden',
      default: 'team',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    seo,
  ],
};
