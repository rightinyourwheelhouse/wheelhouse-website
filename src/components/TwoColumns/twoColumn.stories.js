import React from 'react';

import TwoColumns from './TwoColumns';

export default {
  component: TwoColumns,
  title: 'TwoColumns',
};

export const Default = () => (
  <TwoColumns>
    <div>column 1</div>
    <div>column 2</div>
  </TwoColumns>
);
