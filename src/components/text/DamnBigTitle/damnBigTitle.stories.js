import React from 'react';
import { text } from '@storybook/addon-knobs';

import DamnBigTitle from './DamnBigTitle';

export default {
  component: DamnBigTitle,
  title: 'DamnBigTitle',
};

export const Default = () => (
  <DamnBigTitle color={text('color', null)}>
    Damn Big Title
  </DamnBigTitle>
);
