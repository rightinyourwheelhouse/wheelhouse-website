import React, { useState, useCallback, useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';

import {
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
  showInitialStage,
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
    () => {
      const result = [];

      if (showInitialStage) {
        result.push({
          Component: InitialStageComponent,
        });
      }

      return result.concat([
        ...originalStages,
      ]);
    },
    [originalStages, InitialStageComponent]
  );

  const onAdvance = useCallback(() => {
    if (stageIndex < stages.length - 1) {
      setStageIndex(stageIndex + 1);

      scroller.scrollTo('onboarding', {
        duration: 600,
        offset: -200,
        smooth: 'easeInOutQuart',
      });
    }
  }, [stages, stageIndex]);

  return (
    <OnboardingContainer name="onboarding">
      {stages.map(({ Component, ...stageProperties }, index) => (
        <Stage
          active={index === stageIndex}
          Component={Component}
          key={uuid()}
          onAdvance={onAdvance}
          onValueChange={onValueChange}
          {...stageProperties}
        />
      ))}
    </OnboardingContainer>
  );
};

GeneralOnboarding.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  onValueChange: PropTypes.func,
  showInitialStage: PropTypes.bool.isRequired,
  stages: PropTypes.array.isRequired,
};

GeneralOnboarding.defaultProps = {
  buttonText: 'Get in touch',
  onValueChange: () => {},
};

export default GeneralOnboarding;
