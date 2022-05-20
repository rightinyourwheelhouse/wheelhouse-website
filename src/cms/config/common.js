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
  default: '/assets/default-image.png',
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

export const qAndA = {
  label: 'Q and A',
  name: 'qAndA',
  widget: 'list',
  required: false,
  create: true,
  fields: [
    {
      label: 'Question',
      name: 'q',
      widget: 'text',
    },
    {
      label: 'Answer',
      name: 'a',
      widget: 'markdown',
    },
  ],
};

export const openSourceProject = {
  label: 'Open-source project',
  name: 'openSourceProject',
  widget: 'object',
  required: false,
  create: true,
  fields: [
    {
      label: 'Github Repos links',
      name: 'repos_links',
      widget: 'list',
      summary: 'repo_links',
      max: 5,
      min: 0,
      field: {
        label: 'Repo link',
        name: 'repo_link',
        widget: 'string',
      },
    },
  ],
};
