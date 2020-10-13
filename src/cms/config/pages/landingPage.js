/* eslint-disable sort-keys */
import seo from '../seo';

export default {
  file: 'src/data/pages/landingPage.json',
  label: 'Landing',
  name: 'landingPage',
  fields: [
    {
      label: 'Page',
      name: 'page',
      widget: 'hidden',
      default: 'landing',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    seo,
  ],
};
