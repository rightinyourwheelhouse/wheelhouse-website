export default {
  create: true,
  extension: 'json',
  fields: [
    {
      label: 'Name',
      name: 'name',
      widget: 'string',
    },
    {
      default: true,
      label: 'Visible',
      name: 'visible',
      widget: 'boolean',
    }, {
      label: 'Role',
      name: 'role',
    },

    {
      label: 'Description',
      name: 'description',
    },
    {
      label: 'image',
      name: 'image',
      widget: 'image',
    }],
  folder: 'src/data/team',
  identifier_field: 'name',
  label: 'Team members',
  label_singular: 'Team member',
  name: 'teammembers',
};
