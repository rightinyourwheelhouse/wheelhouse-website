/* eslint-disable sort-keys */
export const summary = {
  create: true,
  label: 'Summary',
  name: 'summary',
  widget: 'list',
  default: [],
  fields: [
    {
      label: 'Title',
      name: 'title',
      optional: true,
      widget: 'string',
    },
    {
      label: 'content',
      name: 'content',
      widget: 'markdown',
    },
  ],
};

export const cta = {
  label: 'Call to action text',
  name: 'cta',
  widget: 'string',
};

export const image = {
  label: 'Image',
  name: 'image',
  widget: 'image',
  default: 'assets/default-image.png',
};

export const imageWithAlt = {
  label: 'Image',
  name: 'imageWithAlt',
  widget: 'object',
  fields: [
    { label: 'Image', name: 'image', widget: 'image' },
    { label: 'Image Description', name: 'alt', widget: 'string' },
  ],
};
