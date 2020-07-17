import React, {
  memo, useReducer, useCallback, useMemo,
} from 'react';
import PropTypes from 'prop-types';

import { Onboarding, stages } from '~components/Onboarding';

const introText = [
  'Hi!',
  "We're very excited to have you here...",
  "And we're also very excited to tell you more about us.",
];

const GeneralOnboarding = ({ children }) => {
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [values, setValues] = useReducer(reducer, {});

  const advancedText = useMemo(() => {
    const { firstName } = values;

    if (firstName) {
      return [
        `Hey there ${firstName}`,
        'This is not an interview, yet 😏',
        "No seriously, don't worry about it 😌",
        "We're just trying to get some information from you...",
        'So we can contact you ASAP!',
      ];
    }

    return [];
  }, [values]);

  const onSubmit = useCallback(() => {
    console.log('values', values);
  }, [values]);

  const onboardingStages = useMemo(
    () => [
      { Component: stages.SmoothTalk, metaData: introText },
      { Component: stages.Name },
      {
        Component: stages.SmoothTalk,
        action: onSubmit,
        metaData: advancedText,
      },
    ],
    [advancedText, values]
  );

  const onValueChange = useCallback(
    (newValues) => {
      setValues(newValues);
    },
    [values]
  );

  return (
    <Onboarding stages={onboardingStages} onValueChange={onValueChange}>
      {children}
    </Onboarding>
  );
};

GeneralOnboarding.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf]).isRequired,
};

export default memo(GeneralOnboarding);
