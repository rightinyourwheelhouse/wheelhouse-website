import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SubTitle from '~components/SubTitle';
import Button from '~components/Button';

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;

  font-family: Montserrat, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: 700;

  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;

  outline: none;

  &:focus {
    box-shadow: 0 0 0 3px #86d5aa;
  }

  transition: all 0.2s ease-in-out
`;

const Opening = ({
  onAdvance,
  onValueChange,
}) => {
  const [name, setName] = useState('');

  const saveNameAndAdvance = () => {
    onValueChange({
      firstName: name,
    });

    onAdvance();
  };

  return (
    <>
      <div>
        <SubTitle>First things first</SubTitle>
        <h2>Can you tell us your name?</h2>
      </div>

      <Input onChange={({ target: { value } }) => setName(value)} type="text" placeholder="Your name..." />

      <Button onClick={saveNameAndAdvance}>
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
