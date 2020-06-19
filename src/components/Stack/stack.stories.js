import React from 'react';
import { text } from '@storybook/addon-knobs';

import Stack from './Stack';

export default {
  component: Stack,
  title: 'Stack',
};

export const Default = () => (
  <Stack space={text('spacing', '16px')}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </Stack>
);
