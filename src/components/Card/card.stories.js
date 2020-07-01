import React from 'react';
import { text } from '@storybook/addon-knobs';

import Card from './Card';

export default {
  component: Card,
  title: 'Card',
};

export const Default = () => (
  <Card
    background={text('background', '#F1F1F1')}
    foreground={text('background', '#000')}
  >
    {text('children', 'Can be anything')}
  </Card>
);
