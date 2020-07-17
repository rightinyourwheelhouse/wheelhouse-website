import React, { useState, useCallback, useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import {
  Conversation,
  ScrollingContainer,
  OnboardingContainer,
  InitialContentContainer,
} from './Onboarding.styles';

import Button from '~components/Button';

import Stage from './_Stage';

const GeneralOnboarding = ({
  children,
  buttonText,
  onValueChange,
  stages: originalStages,
}) => {
  const [stageIndex, setStageIndex] = useState(0);

  const InitialStageComponent = useCallback(
    ({ onAdvance: advance }) => (
      <div>
        <InitialContentContainer>
          {children}
        </InitialContentContainer>
        <Button onClick={advance}>{buttonText}</Button>
      </div>
    ),
    [buttonText]
  );

  const stages = useMemo(
    () => [
      {
        Component: InitialStageComponent,
      },
      ...originalStages,
    ],
    [originalStages, InitialStageComponent]
  );

  const onAdvance = useCallback(() => {
    if (stageIndex < stages.length - 1) {
      setStageIndex(stageIndex + 1);
    }
  }, [stages, stageIndex]);

  return (
    <OnboardingContainer>
      <Conversation>
        <ScrollingContainer position={stageIndex}>
          {stages.map(({ Component, metaData, action }, index) => (
            <Stage
              Component={Component}
              action={action}
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
  buttonText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  onValueChange: PropTypes.func,
  stages: PropTypes.array.isRequired,
};

GeneralOnboarding.defaultProps = {
  buttonText: 'Get in touch',
  onValueChange: () => {},
};

export default GeneralOnboarding;
