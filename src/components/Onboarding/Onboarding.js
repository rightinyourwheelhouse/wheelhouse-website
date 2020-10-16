import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';
import { Container } from '~components/layoutComponents';

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
  hidden,
}) => {
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    if (!hidden) {
      scroller.scrollTo('onboarding', {
        duration: 600,
        offset: -400,
        smooth: 'easeInOutQuart',
      });
    }
  }, [hidden]);

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

  const activeStage = useMemo(() => stages[stageIndex], [stages, stageIndex]);

  const handleAdvance = useCallback(() => {
    if (stageIndex < stages.length - 1) {
      setStageIndex(stageIndex + 1);
    }
  }, [stages, stageIndex]);

  const handleReturn = useCallback(() => {
    if (stageIndex > 0) {
      setStageIndex(stageIndex - 1);
    }
  }, [stages, stageIndex]);

  return (
    <OnboardingContainer
      name="onboarding"
      hidden={hidden}
      background={activeStage.background}
      color={activeStage.color}
      data-netlify="true"
    >
      <Container>
        { hidden ? '' : stages.map(({ Component, ...stageProperties }, index) => (
          <Stage
            active={index === stageIndex}
            Component={Component}
            key={uuid()}
            onAdvance={handleAdvance}
            onReturn={handleReturn}
            onValueChange={onValueChange}
            {...stageProperties}
          />
        ))}
      </Container>
    </OnboardingContainer>
  );
};

GeneralOnboarding.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  onValueChange: PropTypes.func,
  showInitialStage: PropTypes.bool.isRequired,
  stages: PropTypes.array.isRequired,
  hidden: PropTypes.bool,
};

GeneralOnboarding.defaultProps = {
  buttonText: 'Get in touch',
  onValueChange: () => {},
  hidden: false,
};

export default GeneralOnboarding;
