/* eslint-disable sort-keys */
import { image } from './config/common';

export default {
  folder: 'src/data/team',
  label: 'Employees',
  name: 'employees',
  label_singular: 'employee',
  identifier_field: 'name',
  create: true,
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'employees',
    },
    {
      label: 'Visible',
      name: 'visible',
      widget: 'boolean',
      default: true,
    },
    {
      label: 'Name',
      name: 'name',
      widget: 'string',
    },
    {
      label: 'Role',
      name: 'role',
      widget: 'string',
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
    },
    image,
    {
      label: 'Detail image',
      name: 'detailImage',
      widget: 'image',
      default: 'assets/default-image.png',
    },
  ],
};
