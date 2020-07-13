import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '~components/Button';
import SubTitle from '~components/SubTitle';
import Stack from '~components/Stack';

import InputName from './_InputName';

const Opening = ({
  onAdvance,
  onValueChange,
}) => {
  const [name, setName] = useState('');

  const onButtonClick = useCallback(
    () => {
      onValueChange({
        firstName: name,
      });

      onAdvance();
    },
    [onValueChange, onAdvance, name],
  );

  return (
    <>
      <div>
        <SubTitle>First things first</SubTitle>
        <h2>Can you tell us your name?</h2>
      </div>

      <InputName id="name" label="Your name" onChange={setName} type="text" width="300px" placeholder="Your name..." />

      <Button onClick={onButtonClick}>
        Continue...
      </Button>
    </>
  );
};

Opening.propTypes = {
  onAdvance: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default Opening;
