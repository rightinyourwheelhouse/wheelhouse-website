import React from 'react';
import PropTypes from 'prop-types';

import SubTitle from '~components/SubTitle';
import Button from '~components/Button';

const Opening = ({ onAdvance }) => (
  <>
    <div>
      <SubTitle>Get in touch</SubTitle>
      <h2>Play your part in our story</h2>
    </div>

    <Button onClick={onAdvance}>Get in touch</Button>
  </>
);

Opening.propTypes = {
  onAdvance: PropTypes.func.isRequired,
};

export default Opening;
