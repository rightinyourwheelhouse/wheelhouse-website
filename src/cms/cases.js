export default {
  create: true,
  extension: 'json',
  fields: [
    {
      create: true,
      label: 'Title',
      name: 'title',
    },

    {
      label: 'BackgroundColor',
      name: 'backgroundColor',
      widget: 'string',
    },

    {
      label: 'Color',
      name: 'color',
      widget: 'string',
    },
    {
      label: 'Company',
      name: 'company',
      widget: 'string',
    },
    {
      label: 'Body',
      name: 'body',
      required: false,
      widget: 'markdown',
    },

    {
      label: 'image',
      name: 'image',
      widget: 'image',
    },
    {
      label: 'banner',
      name: 'banner',
      widget: 'image',
    },
  ],
  folder: 'src/data/cases',
  identifier_field: 'name',
  label: 'Cases',
  label_singular: 'Case',
  name: 'cases',
};
