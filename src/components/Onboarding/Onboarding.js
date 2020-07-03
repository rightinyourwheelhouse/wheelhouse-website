import React, { useMemo } from 'react';

import { Conversation } from './Onboarding.styles';

import Opening from './Stages/Opening';
import Name from './Stages/Name';

export default () => {
  let stageIndex = 0;
  const stages = [
    { key: 'opening-stage', Component: Opening },
    { key: 'name-stage', Component: Name },
  ];

  const advance = () => {
    if (stageIndex < stages.length - 1) {
      stageIndex += 1;
    }
  };

  const Stages = useMemo(() => stages.map(({ key, Component: Stage }, index) => (
    <Stage key={key} position={index} />
  )), [stages]);

  return (
    <Conversation>
      {Stages}
    </Conversation>
  );
};
