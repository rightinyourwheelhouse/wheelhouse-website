import React from 'react';

import MarkWithContent from './MarkWithContent';

export default {
  component: MarkWithContent,
  title: 'MarkWithContent',
};

export const Default = () => (
  <div>
    this is a
    {' '}
    <MarkWithContent text="mark object">
      <img src="https://images.unsplash.com/photo-1588614478415-f25a77edc40f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80" alt="" />
    </MarkWithContent>
    .
  </div>
);
