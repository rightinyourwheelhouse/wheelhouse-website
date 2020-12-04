/* eslint-disable sort-keys */
import { image, qAndA } from './config/common';

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
      label: 'Description',
      name: 'description',
      widget: 'string',
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      required: false,
    },
    image,
    {
      label: 'Detail image',
      name: 'detailImage',
      widget: 'object',
      fields: [
        image,
        {
          label: 'Moving Picture',
          name: 'movingPicture',
          widget: 'file',
        },
      ],
    },
    qAndA,
    {
      label: 'Show Picked By in recommendations',
      name: 'showPickedBy',
      widget: 'boolean',
      default: true,
    },
  ],
};
