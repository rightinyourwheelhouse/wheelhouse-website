import React, { useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import { Conversation, ScrollingContainer, OnboardingContainer } from './Onboarding.styles';

import Stage from './_Stage';

const GeneralOnboarding = ({ onValueChange, stages }) => {
  const [stageIndex, setStageIndex] = useState(0);

  const onAdvance = useCallback(() => {
    if (stageIndex < stages.length - 1) {
      setStageIndex(stageIndex + 1);
    }
  }, [stages, stageIndex]);

  return (
    <OnboardingContainer>
      <Conversation>
        <ScrollingContainer position={stageIndex}>
          {stages.map(({ Component, metaData }, index) => (
            <Stage
              Component={Component}
              active={index === stageIndex}
              key={uuid()}
              metaData={metaData}
              onAdvance={onAdvance}
              onValueChange={onValueChange}
            />
          ))}
        </ScrollingContainer>
      </Conversation>
    </OnboardingContainer>
  );
};

GeneralOnboarding.propTypes = {
  onValueChange: PropTypes.func,
  stages: PropTypes.array.isRequired,
};

GeneralOnboarding.defaultProps = {
  onValueChange: () => {},
};

export default GeneralOnboarding;
