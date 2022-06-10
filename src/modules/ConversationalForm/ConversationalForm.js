import { Link } from '@reach/router';
import { useFormik } from 'formik';
import React, { useCallback, useState } from 'react';

import Button from '~components/Button';
import ConversationalButtons from '~components/ConversationalButtons';
import ConversationalOverview from '~components/ConversationalOverview';

import Input from '~components/form/Input';

import * as S from './conversationalForm.styles';

import FileUpload from '../../components/form/FileUpload';
import SubTitle from '../../components/SubTitle/SubTitle';
import validationSchema from '../ApplyForm/validationSchema';

function ConversationalForm({ questions }) {
  const [questionStatus, setQuestionStatus] = useState(1);
  const [portfolioItems, setPortfolioItems] = useState(1);

  const [error, setError] = useState('');

  const RECRUITEE_API_PATH = `https://raccoons.recruitee.com/api/offers`;
  const APPLICATION = `javascript-engineer`;

  async function sendData(submittedValues) {
    try {
      const url = `${RECRUITEE_API_PATH}/${APPLICATION}/candidates`;

      const formdata = new FormData();
      formdata.append(`candidate[name]`, submittedValues.name);
      formdata.append(`candidate[email]`, submittedValues.email);
      formdata.append(`candidate[phone]`, submittedValues.phone);
      formdata.append(
        `candidate[referrer]`,
        `Wheelhouse Conversational Onboarding`,
      );
      if (submittedValues.file) {
        formdata.append(`candidate[cv]`, submittedValues.file || ``);
      }
      formdata.append(
        `candidate[cover_letter]`,
        `
            Expectations? ${submittedValues.expectations},
            Hobbies? ${submittedValues.hobbies},
            Insight? ${submittedValues.insight},
            Portfolio? ${submittedValues.website1}, ${submittedValues.website2}, ${submittedValues.website3}
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
  }

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: '',
      file: null,
      name: '',
      website1: '',
      website2: '',
      website3: '',
      phone: '',
      expectations: '',
      hobbies: '',
    },
    onSubmit: async (submittedValues, actions) => {
      try {
        sendData(submittedValues);
        actions.resetForm();
      } catch (error) {
        setError('Conversation could not be submitted.');
      } finally {
        actions.setSubmitting(false);
      }
    },
    validationSchema,
  });

  const setFile = useCallback(
      files => {
        setFieldValue('file', files[0]);
      },
      [setFieldValue],
  );

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        {questions.map((question, index) => {
          return (
            <S.Container
              key={question.id}
              style={
                questionStatus === question.id
                  ? { display: 'block' }
                  : { display: 'none' }
              }
            >
              {question.id === 11 && <S.ErrorText>{error}</S.ErrorText>}
              <div>
                {index !== 0 ? (
                  <SubTitle>
                    step {index} of {questions.length - 1}
                  </SubTitle>
                ) : (
                  <SubTitle>Contact</SubTitle>
                )}

                <h2>Apply now</h2>
                <S.Text>{question.blocks[0].text}</S.Text>
              </div>

              <div>
                {question.blocks[1].text && (
                  <S.Text>{question.blocks[1].text}</S.Text>
                )}

                {question.blocks[1].input === 'input' ? (
                  <Input
                    name={question.blocks[1].name}
                    id={question.blocks[1].name}
                    label={question.blocks[1].placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched[question.blocks[1].name] &&
                      errors[question.blocks[1].name]
                    }
                    value={values[question.blocks[1].name]}
                    valid={
                      touched[question.blocks[1].name] &&
                      !errors[question.blocks[1].name]
                    }
                  />
                ) : question.blocks[1].input === 'textarea' ? (
                  <S.Textarea
                    name={question.blocks[1].name}
                    id={question.blocks[1].name}
                    label={question.blocks[1].placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched[question.blocks[1].name] &&
                      errors[question.blocks[1].name]
                    }
                    value={values[question.blocks[1].name]}
                    valid={
                      touched[question.blocks[1].name] &&
                      !errors[question.blocks[1].name]
                    }
                    placeholder={question.blocks[1].placeholder}
                  />
                ) : question.blocks[1].input === 'portfolio' ? (
                  <>
                    <S.ButtonWrapper>
                      <Button
                        onClick={() => setPortfolioItems(portfolioItems + 1)}
                        disabled={portfolioItems === 3}
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => setPortfolioItems(portfolioItems - 1)}
                        disabled={portfolioItems === 1}
                      >
                        -
                      </Button>
                    </S.ButtonWrapper>
                    <div
                      style={
                        portfolioItems >= 1
                          ? { marginBottom: '1rem', display: 'block' }
                          : { marginBottom: '1rem', display: 'none' }
                      }
                    >
                      <Input
                        name={question.blocks[1].names[0]}
                        id={question.blocks[1].names[0]}
                        label="I want to share "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched[question.blocks[1].names[0]] &&
                          errors[question.blocks[1].names[0]]
                        }
                        value={values[question.blocks[1].names[0]]}
                        valid={
                          touched[question.blocks[1].names[0]] &&
                          !errors[question.blocks[1].names[0]]
                        }
                      />
                    </div>

                    <div
                      style={
                        portfolioItems >= 2
                          ? { marginBottom: '1rem', display: 'block' }
                          : { marginBottom: '1rem', display: 'none' }
                      }
                    >
                      <Input
                        name={question.blocks[1].names[1]}
                        id={question.blocks[1].names[1]}
                        label="You  need to check out "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched[question.blocks[1].names[1]] &&
                          errors[question.blocks[1].names[1]]
                        }
                        value={values[question.blocks[1].names[1]]}
                        valid={
                          touched[question.blocks[1].names[1]] &&
                          !errors[question.blocks[1].names[1]]
                        }
                      />
                    </div>

                    <div
                      style={
                        portfolioItems >= 3
                          ? { marginBottom: '1rem', display: 'block' }
                          : { marginBottom: '1rem', display: 'none' }
                      }
                    >
                      <Input
                        name={question.blocks[1].names[2]}
                        id={question.blocks[1].names[2]}
                        label="I am proud of "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched[question.blocks[1].names[2]] &&
                          errors[question.blocks[1].names[2]]
                        }
                        value={values[question.blocks[1].names[2]]}
                        valid={
                          touched[question.blocks[1].names[2]] &&
                          !errors[question.blocks[1].names[2]]
                        }
                      />
                    </div>
                  </>
                ) : question.blocks[1].input === 'contact' ? (
                  <>
                    <Input
                      name={question.blocks[1].names[0]}
                      id={question.blocks[1].names[0]}
                      label="My phone number is "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched[question.blocks[1].names[0]] &&
                        errors[question.blocks[1].names[0]]
                      }
                      value={values[question.blocks[1].names[0]]}
                      valid={
                        touched[question.blocks[1].names[0]] &&
                        !errors[question.blocks[1].names[0]]
                      }
                    />
                    <S.TextSM>And</S.TextSM>
                    <Input
                      name={question.blocks[1].names[1]}
                      id={question.blocks[1].names[1]}
                      label="My email address is "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched[question.blocks[1].names[1]] &&
                        errors[question.blocks[1].names[1]]
                      }
                      value={values[question.blocks[1].names[1]]}
                      valid={
                        touched[question.blocks[1].names[1]] &&
                        !errors[question.blocks[1].names[1]]
                      }
                    />
                  </>
                ) : question.blocks[1].input === 'cv' ? (
                  <FileUpload
                    error={
                      touched[question.blocks[1].name] &&
                      errors[question.blocks[1].name]
                    }
                    name={question.blocks[1].name}
                    value={values[question.blocks[1].name]}
                    id="file"
                    label="My resume"
                    onChange={setFile}
                    onBlur={handleBlur}
                    valid={
                      touched[question.blocks[1].name] &&
                      !errors[question.blocks[1].name]
                    }
                  />
                ) : (
                  <p />
                )}
              </div>

              <div style={{ position: 'relative' }}>
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
                {question.id === 10 ? (
                  <>
                    <ConversationalOverview
                      name={values.name}
                      expectations={values.expectations}
                      hobbies={values.hobbies}
                      cv={values.file?.name}
                      phone={values.phone}
                      mail={values.email}
                      portfolioLink1={values.website1}
                      portfolioLink2={values.website2}
                      portfolioLink3={values.website3}
                    />
                    <S.Wrapper>
                      <S.BackButton
                        onClick={() => {
                          setQuestionStatus(questionStatus - 1);
                        }}
                      >
                        Go back
                      </S.BackButton>
                      <Button type="submit">Submit</Button>
                    </S.Wrapper>
                  </>
                ) : question.id === 11 ? (
                  <S.Wrapper>
                    <Link to="/">
                      <Button>Go home</Button>
                    </Link>
                  </S.Wrapper>
                ) : (
                  <ConversationalButtons
                    onChange={setQuestionStatus}
                    nextBtnText={question.nextBtnText}
                    value={questionStatus}
                    previousBtn={question.previousBtn}
                    disabled={
                      values[question?.blocks[1].name] === '' ||
                      errors[question?.blocks[1].name]
                    }
                  />
                )}
              </div>
            </S.Container>
          );
        })}
      </form>
    </div>
  );
}

export default ConversationalForm;
