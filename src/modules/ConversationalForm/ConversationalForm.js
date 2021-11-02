import React, { useState } from 'react';

import {
  ConversationTitle,
  QuestionWrapper,
  QuestionNextButton,
  QuestionInput,
  QuestionPreviousButton,
  QuestionTextarea,
} from './conversationalForm.styles';

function ConversationalForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [amountOfSocials, setAmountOfSocials] = useState(1);
  const [emailStatus, setEmailStatus] = useState(false);
  const [phoneStatus, setPhoneStatus] = useState(false);

  const [intervieweeName, setIntervieweeName] = useState('');
  const [intervieweeExpectations, setIntervieweeExpectations] = useState('');
  const [intervieweeEducation, setIntervieweeEducation] = useState('');
  const [intervieweeExperience, setIntervieweeExperience] = useState('');
  const [intervieweeLinkOne, setIntervieweeLinkOne] = useState('');
  const [intervieweeLinkTwo, setIntervieweeLinkTwo] = useState('');
  const [intervieweeLinkThree, setIntervieweeLinkThree] = useState('');
  const [intervieweeHobbies, setIntervieweeHobbies] = useState('');
  const [intervieweeEmail, setIntervieweeEmail] = useState('');
  const [intervieweePhone, setIntervieweePhone] = useState('');
  const [intervieweeInsight, setIntervieweeInsight] = useState('');

  if (currentStep === 15) {
    setCurrentStep(1);
  }

  function handleNextClick() {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  }

  function handlePreviousClick() {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  }

  return (
    <>
      {currentStep === 1 && (
        <QuestionWrapper>
          <ConversationTitle>Hi! We are Wheelhouse.</ConversationTitle>
          <p>
            Hi! At Wheelhouse, we help you develop your talents so that you can
            build a high-quality career path. So let’s talk if you’re
            interested!
          </p>
          <QuestionNextButton onClick={handleNextClick}>
            Let&apos;s talk
          </QuestionNextButton>
        </QuestionWrapper>
      )}
      {currentStep === 2 && (
        <QuestionWrapper>
          <p>Before we start, can we get your first name?</p>
          <QuestionInput
            type="text"
            placeholder="Your name..."
            required
            value={intervieweeName}
            onChange={e => setIntervieweeName(e.currentTarget.value)}
          />
          <QuestionNextButton onClick={handleNextClick}>
            That&apos;s me!
          </QuestionNextButton>
          <QuestionPreviousButton onClick={handlePreviousClick}>
            Go back
          </QuestionPreviousButton>
        </QuestionWrapper>
      )}
      {currentStep === 3 && (
        <QuestionWrapper>
          <p>
            Nice to meet you {intervieweeName}! Let’s talk Wheelhouse first:
          </p>
          <p>
            We are a group of JavaScript experts and consultants. We’re looking
            for people that fit into our family vibe, people with an open mind,
            who like to try out new things! Like these new strange
            conversational forms. So if you are interested we would like to know
            you a little better!
          </p>
          <QuestionNextButton onClick={handleNextClick}>
            Sounds great
          </QuestionNextButton>
          <QuestionPreviousButton onClick={handlePreviousClick}>
            Go back
          </QuestionPreviousButton>
        </QuestionWrapper>
      )}
      {currentStep === 4 && (
        <QuestionWrapper>
          <p>
            Now, we are interested in what you are looking for in a job. How do
            you see yourself in Wheelhouse?
          </p>
          <QuestionTextarea
            placeholder="I see myself..."
            type="textarea"
            required
            value={intervieweeExpectations}
            onChange={e => setIntervieweeExpectations(e.currentTarget.value)}
          />
          <QuestionNextButton onClick={handleNextClick}>
            Next
          </QuestionNextButton>
          <QuestionPreviousButton onClick={handlePreviousClick}>
            Go back
          </QuestionPreviousButton>
        </QuestionWrapper>
      )}

      {currentStep === 5 && (
        <QuestionWrapper>
          <p>
            Cool! How about your educational background, where and what did you
            study?
          </p>
          <QuestionTextarea
            placeholder="I learned my stuff at..."
            type="textarea"
            required
            value={intervieweeEducation}
            onChange={e => setIntervieweeEducation(e.currentTarget.value)}
          />
          <QuestionNextButton onClick={handleNextClick}>
            Next
          </QuestionNextButton>
          <QuestionPreviousButton onClick={handlePreviousClick}>
            Go back
          </QuestionPreviousButton>
        </QuestionWrapper>
      )}

      {currentStep === 6 && (
        <QuestionWrapper>
          <p>
            Sweet. Have you already used your knowledge, with other words do you
            have any experience?
          </p>
          <QuestionTextarea
            placeholder="I have done..."
            type="textarea"
            required
            value={intervieweeExperience}
            onChange={e => setIntervieweeExperience(e.currentTarget.value)}
          />
          <QuestionNextButton onClick={handleNextClick}>
            Next
          </QuestionNextButton>
          <QuestionPreviousButton onClick={handlePreviousClick}>
            Go back
          </QuestionPreviousButton>
        </QuestionWrapper>
      )}

      {currentStep === 7 && (
        <QuestionWrapper>
          <p>
            One thing we really like is seeing new stuff! Do you have a
            portfolio ( GitHub, website, ...) that you are proud of?
          </p>
          <button onClick={() => setAmountOfSocials(amountOfSocials + 1)}>
            Add link
          </button>
          <QuestionInput
            placeholder="Link..."
            value={intervieweeLinkOne}
            onChange={e => setIntervieweeLinkOne(e.currentTarget.value)}
          />
          <QuestionInput
            style={
              amountOfSocials > 1 ? { display: 'inline' } : { display: 'none' }
            }
            placeholder="Link..."
            value={intervieweeLinkTwo}
            onChange={e => setIntervieweeLinkTwo(e.currentTarget.value)}
          />
          <QuestionInput
            style={
              amountOfSocials > 2 ? { display: 'inline' } : { display: 'none' }
            }
            placeholder="Link..."
            value={intervieweeLinkThree}
            onChange={e => setIntervieweeLinkThree(e.currentTarget.value)}
          />
          <QuestionNextButton onClick={handleNextClick}>
            Next
          </QuestionNextButton>
          <QuestionPreviousButton onClick={handlePreviousClick}>
            Go back
          </QuestionPreviousButton>
        </QuestionWrapper>
      )}

      {currentStep === 8 && (
        <QuestionWrapper>
          <p>
            Now do you have any hobbies? Tech related or not, we’re interested!
          </p>
          <QuestionTextarea
            type="textarea"
            required
            value={intervieweeHobbies}
            onChange={e => setIntervieweeHobbies(e.currentTarget.value)}
          />
          <QuestionNextButton onClick={handleNextClick}>
            Next
          </QuestionNextButton>
          <QuestionPreviousButton onClick={handlePreviousClick}>
            Go back
          </QuestionPreviousButton>
        </QuestionWrapper>
      )}

      {currentStep === 9 && (
        <QuestionWrapper>
          <p>
            Interesting..., we like escape rooms, cars, cosplay, you could say
            we’re pretty diverse...
          </p>
          <img src="../../images/aagje-cartoon.png" alt="Cartoon Aagje" />
          <QuestionNextButton onClick={handleNextClick}>
            Cool
          </QuestionNextButton>
          <QuestionPreviousButton onClick={handlePreviousClick}>
            Go back
          </QuestionPreviousButton>
        </QuestionWrapper>
      )}

      {currentStep === 10 && (
        <QuestionWrapper>
          <p>
            Nice! I’m starting to have the feeling that we start to know each
            other pretty well!
          </p>
          <p>If we want to contact you, via which way can we do this?</p>
          <button onClick={() => setPhoneStatus(!phoneStatus)}>Phone</button>
          <button onClick={() => setEmailStatus(!emailStatus)}>Email</button>
          {emailStatus && (
            <QuestionInput
              type="email"
              value={intervieweeEmail}
              onChange={setIntervieweeEmail}
            />
          )}
          {phoneStatus && (
            <QuestionInput
              type="text"
              value={intervieweePhone}
              onChange={setIntervieweePhone}
            />
          )}
          <QuestionNextButton onClick={handleNextClick}>
            Next
          </QuestionNextButton>
          <QuestionPreviousButton onClick={handlePreviousClick}>
            Go back
          </QuestionPreviousButton>
        </QuestionWrapper>
      )}
      {currentStep === 11 && (
        <QuestionWrapper>
          <p>
            Alright! 2 more questions. Then you can go back to what you were
            doing!
          </p>
          <p>
            Do you have a CV? We like seeing a CV because it gives us a good
            overview of all your specialties!
          </p>
          <input type="file" />
          <QuestionNextButton onClick={handleNextClick}>
            Next
          </QuestionNextButton>
          <QuestionPreviousButton onClick={handlePreviousClick}>
            Go back
          </QuestionPreviousButton>
        </QuestionWrapper>
      )}
      {currentStep === 12 && (
        <QuestionWrapper>
          <p>
            Lastly what do you think about Wheelhouse? What attracted you to
            have this conversation with us or check out our website?
          </p>
          <QuestionTextarea
            type="textarea"
            required
            value={intervieweeInsight}
            onChange={e => setIntervieweeInsight(e.currentTarget.value)}
          />
          <QuestionNextButton onClick={handleNextClick}>
            Next
          </QuestionNextButton>
          <QuestionPreviousButton onClick={handlePreviousClick}>
            Go back
          </QuestionPreviousButton>
        </QuestionWrapper>
      )}
      {currentStep === 13 && (
        <QuestionWrapper>
          <p>
            Alright! Thank you so much for your attention INTERVIEWEE_NAME! It
            was a pleasure.
          </p>
          <button>See my responses</button>
          <p>
            If you want us to reach out to you, please confirm by submitting
            this conversation. You may also choose not to. It’s all up to you!
          </p>
          <QuestionNextButton onClick={handleNextClick}>
            Submit Conversation
          </QuestionNextButton>
          <QuestionPreviousButton onClick={handlePreviousClick}>
            Go back
          </QuestionPreviousButton>
        </QuestionWrapper>
      )}

      {currentStep === 14 && (
        <QuestionWrapper>
          <ConversationTitle>Thank you for your attention!</ConversationTitle>
          <QuestionNextButton onClick={handlePreviousClick}>
            Go to the home page
          </QuestionNextButton>
        </QuestionWrapper>
      )}
    </>
  );
}

export default ConversationalForm;
