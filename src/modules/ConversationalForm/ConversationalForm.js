import { ArrowDownIcon } from '@heroicons/react/solid';
import { Link } from '@reach/router';
import React, { useEffect, useState } from 'react';

import * as S from './conversationalForm.styles';

import Button from '~components/Button';
import ConversationalButtons from '~components/ConversationalButtons';

function ConversationalForm({ questions }) {
  const [questionStatus, setQuestionStatus] = useState(1);
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

  const [overview, setOverwiew] = useState(false);

  const [error, setError] = useState('');

  const RECRUITEE_API_PATH = `https://raccoons.recruitee.com/api/offers`;
  const APPLICATION = `spontaneous-application`;

  useEffect(() => {
    setLoaders();
    setError('');
  }, [questionStatus]);

  function setLoaders() {
    window.scrollTo(0, 0);
    setLoaderOne(false);
    setLoaderTwo(false);
    setLoaderThree(false);

    setTimeout(() => {
      setLoaderOne(true);
    }, 500);
    setTimeout(() => {
      setLoaderTwo(true);
    }, 1200);
    setTimeout(() => {
      setLoaderThree(true);
    }, 1900);
  }

  const handleValueChange = e => {
    const { name, value } = e.target;

    setInterviewee(interviewee => ({
      ...interviewee,
      [name]: value,
    }));
  };

  const handleCVChange = e => {
    const { value } = e.target;

    setInterviewee(interviewee => ({
      ...interviewee,
      cv: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      interviewee.name &&
      interviewee.expectations &&
      interviewee.education &&
      interviewee.experience &&
      portfolioLink1 &&
      interviewee.hobbies &&
      intervieweePhone &&
      intervieweeMail &&
      interviewee.cv &&
      interviewee.insight
    ) {
      try {
        const url = `${RECRUITEE_API_PATH}/${APPLICATION}/candidates`;
        const formdata = new FormData();
        formdata.append(`candidate[name]`, interviewee.name);
        formdata.append(
          `candidate[email]`,
          interviewee.contact.intervieweeMail || ``,
        );
        formdata.append(
          `candidate[phone]`,
          interviewee.contact.intervieweePhone || ``,
        );
        if (interviewee.cv) {
          formdata.append(`candidate[cv]`, interviewee.cv || ``);
        }
        formdata.append(`candidate[referrer]`, `Wheelhouse`);
        const result = await fetch(url, {
          body: formdata,
          method: `POST`,
        });
        if (result.ok) {
          console.info('Submitted');
          setQuestionStatus(questionStatus + 1);
        } else {
          console.info(`Error ${result}`);
        }
      } catch (error) {
        console.info(error);
      }
    } else {
      setError('It seems like you forgot to fill in some things!');
    }
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
      {questions.map(question => {
        return (
          <S.Container
            key={question.id}
            style={
              questionStatus === question.id
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            {question.id === 13 && <S.ErrorText>{error}</S.ErrorText>}
            <div
              style={
                loaderOne
                  ? { transition: 'all 0.2s ease-in', opacity: 1 }
                  : { transition: 'all 0.2s ease-in', opacity: 0 }
              }
            >
              <S.Title>{question.blocks[0].title}</S.Title>
              <S.Text>{question.blocks[0].text}</S.Text>
            </div>

            <div
              style={
                loaderTwo
                  ? { transition: 'all 0.2s ease-in', opacity: 1 }
                  : { transition: 'all 0.2s ease-in', opacity: 0 }
              }
            >
              {question.blocks[1].text && (
                <S.Text>{question.blocks[1].text}</S.Text>
              )}

              {question.blocks[1].input === 'input' ? (
                <S.Input
                  name={question.blocks[1].name}
                  onChange={e => handleValueChange(e)}
                  placeholder={question.blocks[1].placeholder}
                />
              ) : question.blocks[1].input === 'textarea' ? (
                <S.Textarea
                  name={question.blocks[1].name}
                  onChange={e => handleValueChange(e)}
                  placeholder={question.blocks[1].placeholder}
                />
              ) : question.blocks[1].input === 'portfolio' ? (
                <>
                  <S.ButtonWrapper>
                    <S.Button
                      onClick={() => setPortfolioItems(portfolioItems + 1)}
                      disabled={portfolioItems === 3}
                    >
                      +
                    </S.Button>
                    <S.Button
                      onClick={() => setPortfolioItems(portfolioItems - 1)}
                      disabled={portfolioItems === 1}
                    >
                      -
                    </S.Button>
                  </S.ButtonWrapper>
                  <S.Input
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
                  <S.Input
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
                  <S.Input
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
                  <S.Input
                    name={question.blocks[1].name}
                    onChange={e => {
                      setIntervieweePhone(e.currentTarget.value);
                      handleContactChange(e);
                    }}
                    placeholder="Phone"
                  />
                  <S.TextSM>And</S.TextSM>
                  <S.Input
                    name={question.blocks[1].name}
                    onChange={e => {
                      setIntervieweeMail(e.currentTarget.value);
                      handleContactChange(e);
                    }}
                    placeholder="Mail"
                  />
                </>
              ) : question.blocks[1].input === 'cv' ? (
                <input
                  type="file"
                  name={question.blocks[1].name}
                  onChange={e => handleCVChange(e)}
                />
              ) : (
                <p />
              )}
            </div>

            <div
              style={
                loaderThree
                  ? {
                      transition: 'all 0.2s ease-in',
                      opacity: 1,
                      position: 'relative',
                    }
                  : {
                      transition: 'all 0.2s ease-in',
                      opacity: 0,
                      position: 'relative',
                    }
              }
            >
              {question.cartoon === 'rafael' ? (
                <S.RafCartoon
                  src={question.image}
                  alt={question.blocks[0].title}
                />
              ) : question.cartoon === 'roel' ? (
                <S.RoelCartoon
                  src={question.image}
                  alt={question.blocks[0].title}
                />
              ) : question.cartoon === 'aagje' ? (
                <S.AagjeCartoon
                  src={question.image}
                  alt={question.blocks[0].title}
                />
              ) : question.cartoon === 'ward' ? (
                <S.WardCartoon
                  src={question.image}
                  alt={question.blocks[0].title}
                />
              ) : (
                <S.OlivierCartoon
                  src={question.image}
                  alt={question.blocks[0].title}
                />
              )}

              {question.id === 13 && (
                <>
                  <S.OverviewButton
                    onClick={() => {
                      setOverwiew(!overview);
                    }}
                  >
                    <span
                      style={{ fontSize: '18px', fontFamily: 'Montserrat' }}
                    >
                      See my anwsers
                    </span>
                    <div
                      style={
                        overview
                          ? {
                              transform: 'rotate(180deg)',
                            }
                          : {
                              transform: 'rotate(0deg)',
                            }
                      }
                    >
                      <ArrowDownIcon width="24" />
                    </div>
                  </S.OverviewButton>
                  <div
                    style={
                      overview
                        ? {
                            display: 'inline',
                            backgroundColor: 'gray',
                          }
                        : {
                            display: 'none',
                            backgroundColor: 'gray',
                          }
                    }
                  >
                    <S.OverviewWrapper>
                      <div>
                        <S.OverviewLabel>Name</S.OverviewLabel>
                        <S.OverviewText>{interviewee.name}</S.OverviewText>
                      </div>
                      <div>
                        <S.OverviewLabel>Expectations</S.OverviewLabel>
                        <S.OverviewText>
                          {interviewee.expectations}
                        </S.OverviewText>
                      </div>
                      <div>
                        <S.OverviewLabel>Education</S.OverviewLabel>
                        <S.OverviewText>{interviewee.education}</S.OverviewText>
                      </div>
                      <div>
                        <S.OverviewLabel>Experience</S.OverviewLabel>
                        <S.OverviewText>
                          {interviewee.experience}
                        </S.OverviewText>
                      </div>
                      <div>
                        <S.OverviewLabel>Hobbies</S.OverviewLabel>
                        <S.OverviewText>{interviewee.hobbies}</S.OverviewText>
                      </div>
                      <div>
                        <S.OverviewLabel>Cv</S.OverviewLabel>
                        <S.OverviewText>{interviewee.cv}</S.OverviewText>
                      </div>
                      <div>
                        <S.OverviewLabel>Insight</S.OverviewLabel>
                        <S.OverviewText>{interviewee.insight}</S.OverviewText>
                      </div>
                      <div>
                        <S.OverviewLabel>Contact</S.OverviewLabel>
                        {interviewee.contact &&
                          Object.values(interviewee.contact).map(
                            (item, index) => {
                              return (
                                <S.OverviewText key={index}>
                                  {item}
                                </S.OverviewText>
                              );
                            },
                          )}
                      </div>

                      <div>
                        <S.OverviewLabel>Portfolio</S.OverviewLabel>
                        {interviewee.portfolio &&
                          Object.values(interviewee.portfolio).map(
                            (item, index) => {
                              return (
                                <S.OverviewText key={index}>
                                  {item}
                                </S.OverviewText>
                              );
                            },
                          )}
                      </div>
                    </S.OverviewWrapper>
                  </div>
                </>
              )}

              {question.id === 13 ? (
                <S.Wrapper>
                  <S.BackButton
                    onClick={() => {
                      setQuestionStatus(questionStatus - 1);
                      setLoaders();
                    }}
                  >
                    Go back
                  </S.BackButton>
                  <Button
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Submit
                  </Button>
                </S.Wrapper>
              ) : question.id === 14 ? (
                <S.Wrapper>
                  <S.BackButton
                    onClick={() => {
                      setQuestionStatus(questionStatus - 1);
                      setLoaders();
                    }}
                  >
                    Go back
                  </S.BackButton>
                  <Link to="/">
                    <Button>Go home</Button>
                  </Link>
                </S.Wrapper>
              ) : (
                <ConversationalButtons
                  loader={setLoaders}
                  onChange={setQuestionStatus}
                  nextBtnText={question.nextBtnText}
                  value={questionStatus}
                  previousBtn={question.previousBtn}
                />
              )}
            </div>
          </S.Container>
        );
      })}
    </div>
  );
}

export default ConversationalForm;
