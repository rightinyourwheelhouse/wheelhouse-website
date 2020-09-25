import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '~components/Button';

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const TitleContainer = styled.div`
  h2.conversation-title {
    margin-top: 4px;
    font-size: 42px;
    line-height: 36px;
  }

  h3 {
    font-size: 28px;
    line-height: 24px;
  }
`;

const TextArea = styled.textarea`
  padding: 20px;
  max-width: 100%;
  width: 100%;
  border: 2px solid black;

  font-size: 1em;
  font-family: inherit;
`;

const TextAreaInput = ({
  confirmButtonText,
  dataKey,
  onAdvance,
  onValueChange,
  subtitle,
  title,
  placeholder,
  id,
}) => {
  const [text, setText] = useState('');

  const onButtonClick = useCallback(
    () => {
      const valueToUpdate = {};
      valueToUpdate[dataKey] = text;

      onValueChange(valueToUpdate);

      onAdvance();
    },
    [onValueChange, onAdvance, text],
  );

  const handleInputChanged = useCallback(({
    target: {
      value,
    },
  }) => {
    setText(value);
  });

  return (
    <>
      <TitleContainer>
        <h3>{subtitle}</h3>
        <h2 className="conversation-title">{title}</h2>
      </TitleContainer>

      <TextArea id={id} onChange={handleInputChanged} type="text" placeholder={placeholder} />

      <ButtonContainer>
        <Button onClick={onButtonClick}>
          {confirmButtonText}
        </Button>
      </ButtonContainer>
    </>
  );
};

TextAreaInput.propTypes = {
  confirmButtonText: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onAdvance: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TextAreaInput;
