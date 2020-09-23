/* eslint-disable sort-keys */
export default {
  label: 'SEO & Meta',
  name: 'seo',
  widget: 'object',
  fields: [
    {
      label: 'Browser Title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'string',
    },
    {
      default: 'assets/default-image.png',
      label: 'Image',
      name: 'image',
      widget: 'image',
    },
  ],
};
