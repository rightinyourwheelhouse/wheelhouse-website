/* eslint-disable sort-keys */
import seo from '../seo';

export default {
  file: 'src/data/pages/blogPage.json',
  label: 'Blog',
  name: 'blogPage',
  identifier_field: 'page',
  fields: [
    {
      label: 'Page',
      name: 'page',
      widget: 'hidden',
      default: 'blog',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    seo,
  ],
};
