import React from 'react';

import AnimatedCard from './AnimatedCard';

export default {
  component: AnimatedCard,
  title: 'AnimatedCard',
};

export const Default = () => (
  <AnimatedCard>
    <img src="https://images.unsplash.com/photo-1587613757703-eea60bd69e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80" alt="" />
  </AnimatedCard>
);
