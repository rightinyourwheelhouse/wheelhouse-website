import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '~components/Button';
import SubTitle from '~components/SubTitle';
import Input from '~components/form/Input';

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
      <div>
        <SubTitle>{subtitle}</SubTitle>
        <h2>{title}</h2>
      </div>

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
