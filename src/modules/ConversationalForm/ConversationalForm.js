import { Link } from '@reach/router';
import React, { useEffect, useState } from 'react';

import Button from '~components/Button';
import ConversationalButtons from '~components/ConversationalButtons';
import ConversationalOverview from '~components/ConversationalOverview';

import * as S from './conversationalForm.styles';

import SubTitle from '../../components/SubTitle/SubTitle';
import { Disclaimer } from '../ApplyForm/applyForm.styles';

function ConversationalForm({ questions }) {
  const [questionStatus, setQuestionStatus] = useState(1);
  const [portfolioItems, setPortfolioItems] = useState(1);

  const [portfolioLink1, setPortfolioLink1] = useState('');
  const [portfolioLink2, setPortfolioLink2] = useState('');
  const [portfolioLink3, setPortfolioLink3] = useState('');

  const [intervieweePhone, setIntervieweePhone] = useState('');
  const [intervieweeMail, setIntervieweeMail] = useState('');

  const [cv, setCv] = useState([]);

  const [interviewee, setInterviewee] = useState({});

  const [loaderOne, setLoaderOne] = useState(false);
  const [loaderTwo, setLoaderTwo] = useState(false);
  const [loaderThree, setLoaderThree] = useState(false);

  const [error, setError] = useState('');

  const RECRUITEE_API_PATH = `https://raccoons.recruitee.com/api/offers`;
  const APPLICATION = `javascript-engineer`;

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
    }, 1000);
    setTimeout(() => {
      setLoaderThree(true);
    }, 1500);
  }

  function handleValueChange(e) {
    const { name, value } = e.target;

    setInterviewee(interviewee => ({
      ...interviewee,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      interviewee.name &&
      interviewee.expectations &&
      interviewee.education &&
      interviewee.experience &&
      portfolioLink1 &&
      interviewee.hobbies &&
      intervieweePhone &&
      intervieweeMail &&
      cv &&
      interviewee.insight
    ) {
      try {
        const url = `${RECRUITEE_API_PATH}/${APPLICATION}/candidates`;
        const formdata = new FormData();
        formdata.append(`candidate[name]`, interviewee.name);
        formdata.append(`candidate[email]`, intervieweeMail);
        formdata.append(`candidate[phone]`, intervieweePhone);
        formdata.append(
          `candidate[referrer]`,
          `Wheelhouse Conversational Onboarding`,
        );
        if (cv) {
          formdata.append(`candidate[cv]`, cv || ``);
        }
        formdata.append(
          `candidate[cover_letter]`,
          `
            Expectations? ${interviewee.expectations},
            Education? ${interviewee.education},
            Experience? ${interviewee.experience},
            Hobbies? ${interviewee.hobbies},
            Insight? ${interviewee.insight},
            Portfolio? ${portfolioLink1}, ${portfolioLink2}, ${portfolioLink3}
          `,
        );

        const result = await fetch(url, {
          body: formdata,
          method: `POST`,
        });
        if (result.ok) {
          console.info('Submitted');
          setQuestionStatus(questionStatus + 1);
        } else {
          setError('Conversation could not be submitted.');
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setError('It seems like you forgot to fill in some things!');
    }
  }

  return (
    <div>
      <form method="post" onSubmit={e => handleSubmit(e)}>
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
                <SubTitle>Contact</SubTitle>
                <h2>Apply now</h2>
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
                      }}
                      placeholder="Phone"
                    />
                    <S.TextSM>And</S.TextSM>
                    <S.Input
                      name={question.blocks[1].name}
                      onChange={e => {
                        setIntervieweeMail(e.currentTarget.value);
                      }}
                      placeholder="Mail"
                    />
                  </>
                ) : question.blocks[1].input === 'cv' ? (
                  <input
                    type="file"
                    accept="application/pdf"
                    name={question.blocks[1].name}
                    onChange={e => {
                      setCv(e.target.files[0]);
                    }}
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
                    image={question?.image?.childImageSharp?.gatsbyImageData}
                    alt={question.blocks[0].title}
                  />
                ) : question.cartoon === 'roel' ? (
                  <S.RoelCartoon
                    image={question?.image?.childImageSharp?.gatsbyImageData}
                    alt={question.blocks[0].title}
                  />
                ) : question.cartoon === 'aagje' ? (
                  <S.AagjeCartoon
                    image={question?.image?.childImageSharp?.gatsbyImageData}
                    alt={question.blocks[0].title}
                  />
                ) : question.cartoon === 'ward' ? (
                  <S.WardCartoon
                    image={question?.image?.childImageSharp?.gatsbyImageData}
                    alt={question.blocks[0].title}
                  />
                ) : question.cartoon === 'olivier' ? (
                  <S.OlivierCartoon
                    image={question?.image?.childImageSharp?.gatsbyImageData}
                    alt={question.blocks[0].title}
                  />
                ) : (
                  <p />
                )}
                {question.id === 13 ? (
                  <>
                    <ConversationalOverview
                      name={interviewee.name}
                      expectations={interviewee.expectations}
                      education={interviewee.education}
                      experience={interviewee.experience}
                      hobbies={interviewee.hobbies}
                      cv={cv.name}
                      insight={interviewee.insight}
                      phone={intervieweePhone}
                      mail={intervieweeMail}
                      portfolioLink1={portfolioLink1}
                      portfolioLink2={portfolioLink2}
                      portfolioLink3={portfolioLink3}
                    />
                    <S.Wrapper>
                      <S.BackButton
                        onClick={() => {
                          setQuestionStatus(questionStatus - 1);
                          setLoaders();
                        }}
                      >
                        Go back
                      </S.BackButton>
                      <Button type="submit">Submit</Button>
                    </S.Wrapper>
                  </>
                ) : question.id === 14 ? (
                  <S.Wrapper>
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
                <Disclaimer>
                  Not looking for a job but want to collaborate? Contact us via{' '}
                  <a href="mailto:hello@wheelhouse.be"> hello@wheelhouse.be</a>
                </Disclaimer>
              </div>
            </S.Container>
          );
        })}
      </form>
    </div>
  );
}

export default ConversationalForm;
