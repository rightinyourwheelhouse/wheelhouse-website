/* eslint-disable sort-keys */
export default {
  create: true,
  extension: 'json',
  folder: 'src/data/recommendations',
  identifier_field: 'title',
  label: 'Picks',
  name: 'pick',
  fields: [
    {
      default: false,
      label: 'Live',
      name: 'live',
      widget: 'boolean',
    },
    {
      dateFormat: 'D MMM YYYY',
      label: 'Date',
      name: 'date',
      timeFormat: false,
      widget: 'datetime',
    },
    { label: 'Title', name: 'title' },

    {
      collection: 'teammembers',
      label: 'Author',
      name: 'author',
      searchFields: ['name'],
      valueField: '{{name}}',
      widget: 'relation',
    },

    {
      tags: 'Tags',
      name: 'tags',
      widget: 'list',
      allow_add: true,
      required: false,
    },
    {
      label: 'image',
      name: 'image',
      widget: 'image',
      required: false,
    },

    { label: 'Description', name: 'description', widget: 'string' },

    { label: 'Introduction', name: 'introduction', widget: 'markdown' },

    {
      identifier_field: 'title',
      label: 'Item',
      name: 'items',
      widget: 'list',
      fields: [
        {
          label: 'Title',
          name: 'title',
        },
        { label: 'Author', name: 'author', required: false },

        {
          label: 'Url',
          name: 'url',
          widget: 'string',
          required: false,
        },

        {
          label: 'Description',
          name: 'description',
          widget: 'markdown',
        },
      ],
    },
    {
      label: 'Slot',
      name: 'slot',
      widget: 'markdown',
      required: false,
    },
  ],
};
