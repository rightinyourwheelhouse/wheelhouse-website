import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SubTitle from '../../SubTitle';
import Button from '../../Button';

import { StageContainer } from './Stage.styles';

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
  advance,
  visible,
}) => (
  <StageContainer visible={visible}>
    <div>
      <SubTitle>Your name</SubTitle>
      <h2>Tell us who you are!</h2>
    </div>

    <Input type="text" placeholder="Your name..." />

    <Button onClick={advance}>
      Continue...
    </Button>
  </StageContainer>
);

Opening.propTypes = {
  advance: PropTypes.func,
  visible: PropTypes.bool,
};

Opening.defaultProps = {
  advance: () => {},
  visible: false,
};

export default Opening;
