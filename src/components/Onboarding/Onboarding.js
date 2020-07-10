import React, {
  useMemo,
  useState,
  useCallback,
} from 'react';
import { v4 as uuid } from 'uuid';

import {
  Section,
  Container,
  LightContent,
} from '~components/layoutComponents';
import colors from '~styles/colors';

import { Conversation } from './Onboarding.styles';
import Opening from './Stages/Opening';
import Name from './Stages/Name';
import SmoothTalk from './Stages/SmoothTalk';

const introText = [
  'Hi!',
  'We\'re very excited to have you here...',
  'And we\'re also very excited to tell you more about us.',
];

export default () => {
  const [stageIndex, setStageIndex] = useState(0);
  const [variables, setVariables] = useState({});

  const advancedText = useMemo(() => {
    const { firstName } = variables;
    if (firstName) {
      return [
        `Hey there ${firstName}`,
        'This is not an interview, yet 😏',
        'No seriously, don\'t worry about it 😌',
        'We\'re just trying to get some information from you...',
        'So we can contact you ASAP!',
      ];
    }

    return [];
  }, [variables]);

  const stages = useMemo(() => ([
    { key: uuid(), Component: Opening },
    { key: uuid(), Component: SmoothTalk, metaData: introText },
    { key: uuid(), Component: Name },
    { key: uuid(), Component: SmoothTalk, metaData: advancedText },
  ]), [advancedText, variables]);

  const updateVariables = useCallback((newVariables) => {
    Object.keys(newVariables).map((key) => ({ key, value: newVariables[key] })).forEach(({ key, value }) => {
      const updatedVariables = { ...variables };
      updateVariables[key] = value;

      setVariables(updatedVariables);
    });
  }, [variables]);

  const advance = useCallback(() => {
    if (stageIndex < stages.length - 1) {
      setStageIndex(stageIndex + 1);
    }
  }, [stages, stageIndex]);

  const Stages = useMemo(() => stages.map(({ key, Component: Stage, metaData }, index) => (
    <Stage
      key={key}
      advance={advance}
      visible={index === stageIndex}
      updateVariables={updateVariables}
      metaData={metaData}
    />
  )), [stageIndex, advance, variables]);

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
