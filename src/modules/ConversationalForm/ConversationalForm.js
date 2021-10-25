import React, { useEffect, useState } from 'react';

import {
  ConversationTitle,
  QuestionSection,
  Wrapper,
  BackBtn,
} from './conversationalForm.styles';

import Button from '~components/Button';

function ConversationalForm() {
  const [questionStatus, setQuestionStatus] = useState(1);

  const [loaderOne, setLoaderOne] = useState(false);
  const [loaderTwo, setLoaderTwo] = useState(false);
  const [loaderThree, setLoaderThree] = useState(false);

  useEffect(() => {
    setLoaders();
  }, [questionStatus]);

  function setLoaders() {
    window.scrollTo(0, 0);
    setLoaderOne(false);
    setLoaderTwo(false);
    setLoaderThree(false);

    setTimeout(() => {
      setLoaderOne(true);
    }, 1000);
    setTimeout(() => {
      setLoaderTwo(true);
    }, 2000);
    setTimeout(() => {
      setLoaderThree(true);
    }, 3000);
  }

  return (
    <div>
      <QuestionSection
        style={
          questionStatus === 1 ? { display: 'block' } : { display: 'none' }
        }
      >
        <div
          style={
            loaderOne
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          <ConversationTitle>Hi! We are Wheelhouse</ConversationTitle>
        </div>
        <p
          style={
            loaderTwo
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          Hi! At Wheelhouse, we help you develop your talents so that you can
          build a high-quality career path. So let’s talk if you’re interested!
        </p>
        <div
          style={
            loaderThree
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          <ConversationalButtons
            loader={setLoaders}
            onChange={setQuestionStatus}
            value={questionStatus}
            previousBtn={false}
            nextBtnText="Let's talk"
          />
        </div>
      </QuestionSection>
    </div>
  );
}

export function ConversationalButtons({
  previousBtn = true,
  nextBtnText = 'next',
  onChange,
  value,
  loader,
}) {
  return (
    <Wrapper>
      <Button
        onClick={() => {
          onChange(value + 1);
          loader();
        }}
      >
        {nextBtnText}
      </Button>
      {previousBtn && (
        <BackBtn
          onClick={() => {
            onChange(value - 1);
            loader();
          }}
        >
          Go back
        </BackBtn>
      )}
    </Wrapper>
  );
}

export default ConversationalForm;
