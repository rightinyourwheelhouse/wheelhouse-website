/* eslint-disable sort-keys */
import seo from '../seo';

export default {
  file: 'src/data/pages/careersPage.json',
  label: 'Careers',
  name: 'careersPage',
  identifier_field: 'page',
  fields: [
    {
      label: 'Page',
      name: 'page',
      widget: 'hidden',
      default: 'careers',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    seo,
  ],
};
