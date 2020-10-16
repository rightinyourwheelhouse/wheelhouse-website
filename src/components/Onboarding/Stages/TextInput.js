import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '~components/Button';
import Input from '~components/form/Input';

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

  @media (max-width: 600px) {
    h2.conversation-title {
      font-size: 28px;
      line-height: 24px;
    }

    h3 {
      font-size: 18px;
      line-height: 14px;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const TextInput = ({
  id,
  confirmButtonText,
  dataKey,
  onAdvance,
  onValueChange,
  subtitle,
  title,
  placeholder,
  label,
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

      <Input label={label} id={id} onChange={handleInputChanged} type="text" width="300px" placeholder={placeholder} />

      <ButtonContainer>
        <Button onClick={onButtonClick}>
          {confirmButtonText}
        </Button>
      </ButtonContainer>
    </>
  );
};

TextInput.propTypes = {
  confirmButtonText: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onAdvance: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TextInput;
