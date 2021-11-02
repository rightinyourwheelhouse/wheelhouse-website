import React, { useState } from 'react';

import {
  ConversationTitle,
  Input,
  ButtonLink,
  ButtonWrapper,
} from './conversationalQuestion.styles';

import ConversationalInput from '../ConversationalInput';

import Button from '~components/Button';

function ConversationalQuestion({ question, currentStep, setCurrentStep }) {
  const [intervieweeName, setIntervieweeName] = useState('');
  const [intervieweeExpectations, setIntervieweeExpectations] = useState('');
  const [intervieweeEducation, setIntervieweeEducation] = useState('');
  const [intervieweeExperience, setIntervieweeExperience] = useState('');

  const [amountOfLinks, setAmountOfLinks] = useState(1);
  const [intervieweeLinkOne, setIntervieweeLinkOne] = useState('');
  const [intervieweeLinkTwo, setIntervieweeLinkTwo] = useState('');
  const [intervieweeLinkThree, setIntervieweeLinkThree] = useState('');

  function handleNextClick() {
    setCurrentStep(currentStep + 1);
  }
  function handlePreviousClick() {
    setCurrentStep(currentStep - 1);
  }

  if (currentStep === question.question) {
    return (
      <div>
        {question.title && (
          <ConversationTitle>{question.title}</ConversationTitle>
        )}
        {question.textItems.map(item => {
          return <p key={item.text}>{item.text}</p>;
        })}

        {question.question === 2 && (
          <ConversationalInput
            type={question.type}
            value={intervieweeName}
            onChange={setIntervieweeName}
            placeholder={question.placeholder}
          />
        )}

        {question.question === 4 && (
          <ConversationalInput
            type={question.type}
            value={intervieweeExpectations}
            onChange={setIntervieweeExpectations}
            placeholder={question.placeholder}
          />
        )}

        {question.question === 5 && (
          <ConversationalInput
            type={question.type}
            value={intervieweeEducation}
            onChange={setIntervieweeEducation}
            placeholder={question.placeholder}
          />
        )}

        {question.question === 6 && (
          <ConversationalInput
            type={question.type}
            value={intervieweeExperience}
            onChange={setIntervieweeExperience}
            placeholder={question.placeholder}
          />
        )}

        {question.question === 7 && (
          <>
            <ButtonLink onClick={() => setAmountOfLinks(amountOfLinks + 1)}>
              Add link
            </ButtonLink>
            <Input
              placeholder="Link..."
              value={intervieweeLinkOne}
              onChange={e => setIntervieweeLinkOne(e.currentTarget.value)}
            />
            <Input
              style={
                amountOfLinks > 2 ? { display: 'inline' } : { display: 'none' }
              }
              placeholder="Link..."
              value={intervieweeLinkTwo}
              onChange={e => setIntervieweeLinkTwo(e.currentTarget.value)}
            />
            <Input
              style={
                amountOfLinks > 3 ? { display: 'inline' } : { display: 'none' }
              }
              placeholder="Link..."
              value={intervieweeLinkThree}
              onChange={e => setIntervieweeLinkThree(e.currentTarget.value)}
            />
          </>
        )}

        {question.question === 8 && (
          <ConversationalInput
            type={question.type}
            value={intervieweeExperience}
            onChange={setIntervieweeExperience}
            placeholder={question.placeholder}
          />
        )}

        {question.question === 10 && (
          <ConversationalInput
            type={question.type}
            value={intervieweeExperience}
            onChange={setIntervieweeExperience}
            placeholder={question.placeholder}
          />
        )}

        {question.question === 11 && (
          <ConversationalInput
            type={question.type}
            value={intervieweeExperience}
            onChange={setIntervieweeExperience}
            placeholder={question.placeholder}
          />
        )}

        {question.question === 12 && (
          <ConversationalInput
            type={question.type}
            value={intervieweeExperience}
            onChange={setIntervieweeExperience}
            placeholder={question.placeholder}
          />
        )}

        <ButtonWrapper>
          {question.nextButtonText && (
            <Button onClick={handleNextClick}>{question.nextButtonText}</Button>
          )}
          {question.previousButtonText && (
            <Button onClick={handlePreviousClick} color="000" background="000">
              {question.previousButtonText}
            </Button>
          )}
        </ButtonWrapper>
      </div>
    );
  }

  return null;
}

export default ConversationalQuestion;
