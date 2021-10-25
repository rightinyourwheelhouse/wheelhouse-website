import React, { useEffect, useState } from 'react';

import {
  HiddenTitle,
  QuestionSection,
  BackBtn,
  Wrapper,
  AddBtn,
  ConversationTitle,
} from './conversationalForm.styles';

import Button from '~components/Button';
import Input from '~components/Input';
import Textarea from '~components/Textarea';

function ConversationalForm() {
  const [questionStatus, setQuestionStatus] = useState(1);
  const [intervieweeName, setIntervieweeName] = useState('');
  const [intervieweeExpectations, setIntervieweeExpectations] = useState('');
  const [intervieweeEducation, setIntervieweeEducation] = useState('');
  const [intervieweeExperience, setIntervieweeExperience] = useState('');
  const [intervieweeSocialsAmount, setIntervieweeSocialsAmount] = useState(1);
  const [intervieweeUrlOne, setIntervieweeUrlOne] = useState('');
  const [intervieweeUrlTwo, setIntervieweeUrlTwo] = useState('');
  const [intervieweeUrlThree, setIntervieweeUrlThree] = useState('');
  const [intervieweeHobbies, setIntervieweeHobbies] = useState('');
  const [intervieweePhoneStatus, setIntervieweePhoneStatus] = useState(false);
  const [intervieweePhone, setIntervieweePhone] = useState('');
  const [intervieweeEmailStatus, setIntervieweeEmailStatus] = useState(false);
  const [intervieweeEmail, setIntervieweeEmail] = useState('');
  const [intervieweeInsights, setIntervieweeInsights] = useState('');

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

      <QuestionSection
        style={
          questionStatus === 2 ? { display: 'block' } : { display: 'none' }
        }
      >
        <HiddenTitle>Interviewee Name</HiddenTitle>
        <p
          style={
            loaderOne
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          Before we start, can we get your first name?
        </p>
        <div
          style={
            loaderTwo
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          <Input
            type="text"
            value={intervieweeName}
            onChange={setIntervieweeName}
            placeholder="Your name..."
          />
          <ConversationalButtons
            loader={setLoaders}
            onChange={setQuestionStatus}
            value={questionStatus}
            nextBtnText="That's me"
          />
        </div>
      </QuestionSection>

      <QuestionSection
        style={
          questionStatus === 3 ? { display: 'block' } : { display: 'none' }
        }
      >
        <HiddenTitle>About Wheelhouse</HiddenTitle>
        <p
          style={
            loaderOne
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          Nice to meet you {intervieweeName}! Let’s talk Wheelhouse first:
        </p>
        <p
          style={
            loaderTwo
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          We are a group of JavaScript experts and consultants. We’re looking
          for people that fit into our family vibe, people with an open mind,
          who like to try out new things! Like these new strange conversational
          forms. So if you are interested we would like to know you a little
          better!
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
            nextBtnText="Sounds great"
          />
        </div>
      </QuestionSection>

      <QuestionSection
        style={
          questionStatus === 4 ? { display: 'block' } : { display: 'none' }
        }
      >
        <HiddenTitle>Expectations</HiddenTitle>
        <p
          style={
            loaderOne
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          Now, we are interested in what you are looking for in a job. How do
          you see yourself in Wheelhouse?
        </p>
        <div
          style={
            loaderTwo
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          <Textarea
            value={intervieweeExpectations}
            onChange={setIntervieweeExpectations}
            placeholder="I see myself..."
          />
          <ConversationalButtons
            loader={setLoaders}
            onChange={setQuestionStatus}
            value={questionStatus}
          />
        </div>
      </QuestionSection>

      <QuestionSection
        style={
          questionStatus === 5 ? { display: 'block' } : { display: 'none' }
        }
      >
        <HiddenTitle>Education</HiddenTitle>
        <p
          style={
            loaderOne
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          Cool! How about your educational background, where and what did you
          study?
        </p>
        <div
          style={
            loaderTwo
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          <Textarea
            value={intervieweeEducation}
            onChange={setIntervieweeEducation}
            placeholder="I studied..."
          />
          <ConversationalButtons
            loader={setLoaders}
            onChange={setQuestionStatus}
            value={questionStatus}
          />
        </div>
      </QuestionSection>

      <QuestionSection
        style={
          questionStatus === 6 ? { display: 'block' } : { display: 'none' }
        }
      >
        <HiddenTitle>Experience</HiddenTitle>
        <p
          style={
            loaderOne
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          Sweet. Have you already used your knowledge, with other words do you
          have any experience?
        </p>
        <div
          style={
            loaderTwo
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          <Textarea
            value={intervieweeExperience}
            onChange={setIntervieweeExperience}
            placeholder="I have done..."
          />
          <ConversationalButtons
            loader={setLoaders}
            onChange={setQuestionStatus}
            value={questionStatus}
          />
        </div>
      </QuestionSection>

      <QuestionSection
        style={
          questionStatus === 7 ? { display: 'block' } : { display: 'none' }
        }
      >
        <HiddenTitle>Portfolio</HiddenTitle>
        <p
          style={
            loaderOne
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          One thing we really like is seeing new stuff! Do you have a portfolio
          ( GitHub, website, ...) that you are proud of?
        </p>
        <div
          style={
            loaderTwo
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          <AddBtn
            onClick={() =>
              setIntervieweeSocialsAmount(intervieweeSocialsAmount + 1)
            }
          >
            Add Link
          </AddBtn>

          <Input
            style={
              intervieweeSocialsAmount >= 1
                ? { marginBottom: '1rem', display: 'block' }
                : { marginBottom: '1rem', display: 'none' }
            }
            type="text"
            placeholder="Link..."
            value={intervieweeUrlOne}
            onChange={setIntervieweeUrlOne}
          />
          <Input
            style={
              intervieweeSocialsAmount >= 2
                ? { marginBottom: '1rem', display: 'block' }
                : { marginBottom: '1rem', display: 'none' }
            }
            type="text"
            placeholder="Link..."
            value={intervieweeUrlTwo}
            onChange={setIntervieweeUrlTwo}
          />
          <Input
            style={
              intervieweeSocialsAmount >= 3
                ? { marginBottom: '1rem', display: 'block' }
                : { marginBottom: '1rem', display: 'none' }
            }
            type="text"
            placeholder="Link..."
            value={intervieweeUrlThree}
            onChange={setIntervieweeUrlThree}
          />
          <ConversationalButtons
            loader={setLoaders}
            onChange={setQuestionStatus}
            value={questionStatus}
          />
        </div>
      </QuestionSection>

      <QuestionSection
        style={
          questionStatus === 8 ? { display: 'block' } : { display: 'none' }
        }
      >
        <HiddenTitle>Hobbies</HiddenTitle>
        <p
          style={
            loaderOne
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          Now do you have any hobbies? Tech related or not, we’re interested!
        </p>
        <div
          style={
            loaderTwo
              ? {
                  marginBottom: '1rem',
                  transition: 'all 0.2s ease-in',
                  opacity: 1,
                }
              : {
                  marginBottom: '1rem',
                  transition: 'all 0.2s ease-in',
                  opacity: 0,
                }
          }
        >
          <Textarea
            placeholder="Fishing, ice skating, hockey..."
            value={intervieweeHobbies}
            onChange={setIntervieweeHobbies}
          />
          <ConversationalButtons
            loader={setLoaders}
            onChange={setQuestionStatus}
            value={questionStatus}
          />
        </div>
      </QuestionSection>

      <QuestionSection
        style={
          questionStatus === 9 ? { display: 'block' } : { display: 'none' }
        }
      >
        <HiddenTitle>About Wheelhouse</HiddenTitle>
        <p
          style={
            loaderOne
              ? {
                  marginBottom: '1rem',
                  transition: 'all 0.2s ease-in',
                  opacity: 1,
                }
              : {
                  marginBottom: '1rem',
                  transition: 'all 0.2s ease-in',
                  opacity: 0,
                }
          }
        >
          Interesting..., we like escape rooms, cars, cosplay, you could say
          we’re pretty diverse...
        </p>
        <div
          style={
            loaderTwo
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          <ConversationalButtons
            loader={setLoaders}
            onChange={setQuestionStatus}
            value={questionStatus}
          />
        </div>
      </QuestionSection>

      <QuestionSection
        style={
          questionStatus === 10 ? { display: 'block' } : { display: 'none' }
        }
      >
        <HiddenTitle>Contact</HiddenTitle>
        <p
          style={
            loaderOne
              ? {
                  transition: 'all 0.2s ease-in',
                  opacity: 1,
                }
              : {
                  transition: 'all 0.2s ease-in',
                  opacity: 0,
                }
          }
        >
          Nice! I’m starting to have the feeling that we start to know each
          other pretty well!
        </p>
        <p
          style={
            loaderTwo
              ? {
                  transition: 'all 0.2s ease-in',
                  opacity: 1,
                }
              : {
                  transition: 'all 0.2s ease-in',
                  opacity: 0,
                }
          }
        >
          If we want to contact you, via which way can we do this?
        </p>
        <div
          style={
            loaderThree
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          {!intervieweePhoneStatus && (
            <AddBtn
              onClick={() => setIntervieweePhoneStatus(!intervieweePhoneStatus)}
            >
              Add phone
            </AddBtn>
          )}
          {intervieweePhoneStatus && (
            <Input
              type="text"
              placeholder="Phone"
              value={intervieweePhone}
              onChange={setIntervieweePhone}
              style={{ marginBottom: '1rem' }}
            />
          )}
          {!intervieweeEmailStatus && (
            <AddBtn
              onClick={() => setIntervieweeEmailStatus(!intervieweeEmailStatus)}
            >
              Add email
            </AddBtn>
          )}
          {intervieweeEmailStatus && (
            <Input
              type="text"
              placeholder="Email"
              value={intervieweeEmail}
              onChange={setIntervieweeEmail}
              style={{ marginBottom: '1rem' }}
            />
          )}
          <ConversationalButtons
            loader={setLoaders}
            onChange={setQuestionStatus}
            value={questionStatus}
          />
        </div>
      </QuestionSection>

      <QuestionSection
        style={
          questionStatus === 11 ? { display: 'block' } : { display: 'none' }
        }
      >
        <HiddenTitle>CV</HiddenTitle>
        <p
          style={
            loaderOne
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          Alright! 2 more questions. Then you can go back to what you were
          doing!
        </p>
        <p
          style={
            loaderTwo
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          Do you have a CV? We like seeing a CV because it gives us a good
          overview of all your specialties!
        </p>
        <div
          style={
            loaderThree
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          <Input type="file" />
          <ConversationalButtons
            loader={setLoaders}
            onChange={setQuestionStatus}
            value={questionStatus}
          />
        </div>
      </QuestionSection>

      <QuestionSection
        style={
          questionStatus === 12 ? { display: 'block' } : { display: 'none' }
        }
      >
        <HiddenTitle>Wheelhouse</HiddenTitle>
        <p
          style={
            loaderOne
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          Lastly what do you think about Wheelhouse? What attracted you to have
          this conversation with us or check out our website?
        </p>
        <div
          style={
            loaderTwo
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          <Textarea
            placeholder="I think that..."
            value={intervieweeInsights}
            onChange={setIntervieweeInsights}
          />
          <ConversationalButtons
            loader={setLoaders}
            onChange={setQuestionStatus}
            value={questionStatus}
          />
        </div>
      </QuestionSection>

      <QuestionSection
        style={
          questionStatus === 13 ? { display: 'block' } : { display: 'none' }
        }
      >
        <HiddenTitle>Confirmation</HiddenTitle>
        <p
          style={
            loaderOne
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          Alright! Thank you so much for your attention {intervieweeName}! It
          was a pleasure.
        </p>
        <p
          style={
            loaderTwo
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          If you want us to reach out to you, please confirm by submitting this
          conversation. You may also choose not to. It’s all up to you!
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
            nextBtnText="Submit conversation"
          />
        </div>
      </QuestionSection>

      <QuestionSection
        style={
          questionStatus === 14 ? { display: 'block' } : { display: 'none' }
        }
      >
        <div
          style={
            loaderOne
              ? { transition: 'all 0.2s ease-in', opacity: 1 }
              : { transition: 'all 0.2s ease-in', opacity: 0 }
          }
        >
          <ConversationTitle>Successfully submitted</ConversationTitle>
          <Button onClick={() => setQuestionStatus(1)}>Go back to home</Button>
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
