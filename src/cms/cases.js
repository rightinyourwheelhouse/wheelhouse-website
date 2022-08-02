export default {
  create: true,
  extension: 'json',
  fields: [
    {
      create: true,
      label: 'Name',
      name: 'name',
    },

    {
      label: 'Address',
      name: 'address',
      widget: 'string',
    },

    {
      label: 'Mail',
      name: 'mail',
      widget: 'string',
    },

    {
      label: 'Phone',
      name: 'phone',
      widget: 'string',
    },

    {
      label: 'Description',
      name: 'description',
      required: false,
      widget: 'markdown',
    },

    {
      label: 'How to reach',
      name: 'howToReach',
      widget: 'markdown',
    },

    {
      label: 'image',
      name: 'image',
      widget: 'image',
    },
  ],
  folder: 'src/data/cases',
  identifier_field: 'name',
  label: 'Cases',
  label_singular: 'Case',
  name: 'cases',
};
