import React from 'react';
import { text } from '@storybook/addon-knobs';

import Card from './Card';
import TwoColumns from '../TwoColumns';

export default {
  component: Card,
  title: 'Card',
};

export const Default = () => (
  <TwoColumns>
    <div>
      <Card
        background={text('background', '#F1F1F1')}
        foreground={text('foreground', '#000')}
      >
        {text('children', 'Can be anything')}
      </Card>
    </div>
    <div>
      <Card
        background="#000"
        foreground="#fff"
      >
        {text('children', 'Can be anything')}
      </Card>
    </div>
  </TwoColumns>
);
