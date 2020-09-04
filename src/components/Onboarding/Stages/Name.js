import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '~components/Button';
import SubTitle from '~components/SubTitle';

import InputName from './_InputName';

const Name = ({
  confirmButtonText,
  dataKey,
  onAdvance,
  onValueChange,
  subtitle,
  title,
}) => {
  const [name, setName] = useState('');

  const onButtonClick = useCallback(
    () => {
      const valueToUpdate = {};
      valueToUpdate[dataKey] = name;

      onValueChange(valueToUpdate);

      onAdvance();
    },
    [onValueChange, onAdvance, name],
  );

  return (
    <>
      <div>
        <SubTitle>{subtitle}</SubTitle>
        <h2>{title}</h2>
      </div>

      <InputName id="name" label="Your name" onChange={setName} type="text" width="300px" placeholder="Your name..." />

      <Button onClick={onButtonClick}>
        {confirmButtonText}
      </Button>
    </>
  );
};

Name.propTypes = {
  confirmButtonText: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  onAdvance: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Name;
