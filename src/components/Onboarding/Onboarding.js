import React, {
  useMemo, useState, useCallback, useReducer,
} from 'react';
import { v4 as uuid } from 'uuid';

import { Conversation } from './Onboarding.styles';
import Opening from './Stages/Opening';
import Name from './Stages/Name';
import SmoothTalk from './Stages/SmoothTalk';

import Stage from './_Stage';

const introText = [
  'Hi!',
  "We're very excited to have you here...",
  "And we're also very excited to tell you more about us.",
];

const initialValues = {};

export default () => {
  const [stageIndex, setStageIndex] = useState(0);
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [values, setValues] = useReducer(reducer, initialValues);

  const onAdvancedText = useMemo(() => {
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

  const stages = useMemo(
    () => [
      { Component: Opening, key: uuid() },
      { Component: SmoothTalk, key: uuid(), metaData: introText },
      { Component: Name, key: uuid() },
      { Component: SmoothTalk, key: uuid(), metaData: onAdvancedText },
    ],
    [onAdvancedText, values]
  );

  const onValueChange = useCallback(
    (newValues) => {
      setValues(newValues);
    },
    [values]
  );

  const onAdvance = useCallback(() => {
    if (stageIndex < stages.length - 1) {
      setStageIndex(stageIndex + 1);
    }
  }, [stages, stageIndex]);

  return (
    <Conversation position={stageIndex}>
      <div className="scrolling-container">
        {stages.map(({ key, Component, metaData }, index) => (
          <Stage
            Component={Component}
            active={index === stageIndex}
            key={key}
            metaData={metaData}
            onAdvance={onAdvance}
            onValueChange={onValueChange}
          />
        ))}
      </div>
    </Conversation>
  );
};
