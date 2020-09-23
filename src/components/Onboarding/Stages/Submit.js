import React from 'react';
import PropTypes from 'prop-types';
import Button from '~components/Button';

const SubmitStage = ({
  handleSubmit,
}) => (
  <Button onClick={handleSubmit}>
    Submit
  </Button>
);

SubmitStage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SubmitStage;
