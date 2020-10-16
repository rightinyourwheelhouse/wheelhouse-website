import React from 'react';
import { Onboarding, stages } from '~components/Onboarding';

export default {
  component: Onboarding,
  title: 'Onboarding',
};

export const Default = () => {
  const demoStages = [
    { Component: stages.Name },
    { Component: stages.Opening },
  ];

  return <Onboarding stages={demoStages} />;
};
