import React from 'react';
import { text } from '@storybook/addon-knobs';

import Badge from './Badge';

export default {
  component: Badge,
  title: 'Badge',
};

export const Default = () => (
  <Badge>
    { text('inner content', 'Example')}
  </Badge>
);
