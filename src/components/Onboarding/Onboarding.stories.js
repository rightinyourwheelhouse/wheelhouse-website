import React from 'react';
import { text } from '@storybook/addon-knobs';

import Onboarding from './Onboarding';

export default {
  component: Onboarding,
  title: 'Onboarding',
};

export const Default = () => (
  <Onboarding space={text('spacing', '16px')} />
);
