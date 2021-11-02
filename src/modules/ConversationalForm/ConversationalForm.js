import React, { useEffect, useState } from 'react';

import {
  QuestionSection,
  BackBtn,
  Wrapper,
  ConversationTitle,
  InputStyle,
  TextareaStyle,
  ButtonStyle,
  ButtonWrapperStyle,
  SmallTextStyle,
} from './conversationalForm.styles';

import Button from '~components/Button';

function ConversationalForm({ questions }) {
  const [questionStatus, setQuestionStatus] = useState(11);
  const [portfolioItems, setPortfolioItems] = useState(1);

  const [portfolioLink1, setPortfolioLink1] = useState('');
  const [portfolioLink2, setPortfolioLink2] = useState('');
  const [portfolioLink3, setPortfolioLink3] = useState('');

  const [intervieweePhone, setIntervieweePhone] = useState('');
  const [intervieweeMail, setIntervieweeMail] = useState('');

  const [interviewee, setInterviewee] = useState({});

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

  const handleValueChange = e => {
    const { name, value } = e.target;

    setInterviewee(interviewee => ({
      ...interviewee,
      [name]: value,
    }));
  };

  const handlePortfolioChange = e => {
    const { name } = e.target;

    setInterviewee(interviewee => ({
      ...interviewee,
      [name]: { portfolioLink1, portfolioLink2, portfolioLink3 },
    }));
  };

  const handleContactChange = e => {
    const { name } = e.target;

    setInterviewee(interviewee => ({
      ...interviewee,
      [name]: { intervieweePhone, intervieweeMail },
    }));
  };

  return (
    <div>
      <button onClick={() => console.info(interviewee)}>see usestate</button>
      {questions.map(question => {
        return (
          <QuestionSection
            key={question.id}
            style={
              questionStatus === question.id
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <div
              style={
                loaderOne
                  ? { transition: 'all 0.2s ease-in', opacity: 1 }
                  : { transition: 'all 0.2s ease-in', opacity: 0 }
              }
            >
              <ConversationTitle>{question.blocks[0].title}</ConversationTitle>
              <p>{question.blocks[0].text}</p>
            </div>

            <div
              style={
                loaderTwo
                  ? { transition: 'all 0.2s ease-in', opacity: 1 }
                  : { transition: 'all 0.2s ease-in', opacity: 0 }
              }
            >
              {question.blocks[1].text && <p>{question.blocks[1].text}</p>}

              {question.blocks[1].input === 'input' ? (
                <InputStyle
                  name={question.blocks[1].name}
                  onChange={e => handleValueChange(e)}
                  placeholder={question.blocks[1].placeholder}
                />
              ) : question.blocks[1].input === 'textarea' ? (
                <TextareaStyle
                  name={question.blocks[1].name}
                  onChange={e => handleValueChange(e)}
                  placeholder={question.blocks[1].placeholder}
                />
              ) : question.blocks[1].input === 'portfolio' ? (
                <>
                  <ButtonWrapperStyle>
                    <ButtonStyle
                      onClick={() => setPortfolioItems(portfolioItems + 1)}
                      disabled={portfolioItems === 3}
                    >
                      +
                    </ButtonStyle>
                    <ButtonStyle
                      onClick={() => setPortfolioItems(portfolioItems - 1)}
                      disabled={portfolioItems === 1}
                    >
                      -
                    </ButtonStyle>
                  </ButtonWrapperStyle>
                  <InputStyle
                    style={
                      portfolioItems >= 1
                        ? { marginBottom: '1rem', display: 'block' }
                        : { marginBottom: '1rem', display: 'none' }
                    }
                    name={question.blocks[1].name}
                    onChange={e => {
                      setPortfolioLink1(e.currentTarget.value);
                      handlePortfolioChange(e);
                    }}
                    placeholder="Link"
                  />
                  <InputStyle
                    style={
                      portfolioItems >= 2
                        ? { marginBottom: '1rem', display: 'block' }
                        : { marginBottom: '1rem', display: 'none' }
                    }
                    name={question.blocks[1].name}
                    onChange={e => {
                      setPortfolioLink2(e.currentTarget.value);
                      handlePortfolioChange(e);
                    }}
                    placeholder="Link"
                  />
                  <InputStyle
                    style={
                      portfolioItems >= 3
                        ? { marginBottom: '1rem', display: 'block' }
                        : { marginBottom: '1rem', display: 'none' }
                    }
                    name={question.blocks[1].name}
                    onChange={e => {
                      setPortfolioLink3(e.currentTarget.value);
                      handlePortfolioChange(e);
                    }}
                    placeholder="Link"
                  />
                </>
              ) : question.blocks[1].input === 'contact' ? (
                <>
                  <InputStyle
                    name={question.blocks[1].name}
                    onChange={e => {
                      setIntervieweePhone(e.currentTarget.value);
                      handleContactChange(e);
                    }}
                    placeholder="Phone"
                  />
                  <SmallTextStyle>And/or</SmallTextStyle>
                  <InputStyle
                    name={question.blocks[1].name}
                    onChange={e => {
                      setIntervieweeMail(e.currentTarget.value);
                      handleContactChange(e);
                    }}
                    placeholder="Mail"
                  />
                </>
              ) : question.blocks[1].input === 'cv' ? (
                <input type="file" name={question.blocks[1].name} />
              ) : (
                <p />
              )}
            </div>

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
                nextBtnText="Next"
                value={questionStatus}
                previousBtn={question.previousBtn}
              />
            </div>
          </QuestionSection>
        );
      })}
    </div>
  );
}

export function ConversationalButtons({
  previousBtn = true,
  nextBtnText,
  onChange,
  value,
  loader,
}) {
  return (
    <Wrapper>
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
      <Button
        onClick={() => {
          onChange(value + 1);
          loader();
        }}
      >
        {nextBtnText}
      </Button>
    </Wrapper>
  );
}

export default ConversationalForm;
