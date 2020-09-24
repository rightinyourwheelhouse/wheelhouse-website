import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '~components/Button';
import SubTitle from '~components/SubTitle';

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Paragraph = styled.p`
  color: inherit;
`;

const templateSyntaxRegex = /\${(.*)}/;

const SubmitStage = ({
  handleSubmit,
  buttonText,
  subtitle,
  finalText,
  values,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Does what `${var}` template literals does, but manually
  // Because the text items come from a JSON
  const substituteText = useCallback(
    (text) => {
      if (templateSyntaxRegex.test(text)) {
        const dataKey = templateSyntaxRegex.exec(text)[1];
        const substitute = values[dataKey];

        return text.replace(templateSyntaxRegex, substitute);
      }

      return text;
    },
    [values]
  );

  const handleButtonClick = useCallback(() => {
    setIsSubmitted(true);
    handleSubmit();
  }, []);

  return isSubmitted ? (
    <Paragraph>
      Thank you for your submission, hope to talk to you again soon
      <span aria-label="winking-face" role="img"> 😉</span>
    </Paragraph>
  ) : (
    <>
      <div>
        <SubTitle>{subtitle}</SubTitle>
        <Paragraph>{substituteText(finalText)}</Paragraph>
      </div>

      <ButtonContainer>
        <Button type="button" onClick={handleButtonClick}>
          {buttonText}
        </Button>
      </ButtonContainer>
    </>
  );
};

SubmitStage.propTypes = {
  buttonText: PropTypes.string.isRequired,
  finalText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
  values: PropTypes.objectOf(PropTypes.string),
};

SubmitStage.defaultProps = {
  values: {},
};

export default SubmitStage;
