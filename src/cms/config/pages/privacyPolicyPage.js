/* eslint-disable sort-keys */
import seo from '../seo';

export default {
  file: 'src/data/pages/privacyPolicy.json',
  label: 'Privacy policy',
  name: 'privacyPolicy',
  fields: [
    {
      label: 'Page',
      name: 'page',
      widget: 'hidden',
      default: 'privacyPolicy',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
    },
    seo,
  ],
};
