import React, { useMemo, useState, useCallback } from 'react';

import {
  Section,
  Container,
  LightContent,
} from '~components/layoutComponents';
import colors from '~styles/colors';

import { Conversation } from './Onboarding.styles';
import Opening from './Stages/Opening';
import Name from './Stages/Name';

export default () => {
  const [stageIndex, setStageIndex] = useState(0);
  const stages = [
    { key: 'opening-stage', Component: Opening },
    { key: 'name-stage', Component: Name },
  ];

  const advance = useCallback(() => {
    if (stageIndex < stages.length - 1) {
      setStageIndex(stageIndex + 1);
    }
  }, [stages, stageIndex]);

  const Stages = useMemo(() => stages.map(({ key, Component: Stage }, index) => (
    <Stage key={key} advance={advance} visible={index === stageIndex} />
  )), [stageIndex, advance]);

  return (
    <Section background={colors.backgroundDark}>
      <Container>
        <LightContent>
          <Conversation position={stageIndex}>
            <div className="scrolling-container">
              {Stages}
            </div>
          </Conversation>
        </LightContent>
      </Container>
    </Section>
  );
};
