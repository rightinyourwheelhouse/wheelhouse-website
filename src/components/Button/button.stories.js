import React from 'react';
import { text } from '@storybook/addon-knobs';

import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const Default = () => (
  <Button>
    { text('inner content', 'Example')}
  </Button>
);
