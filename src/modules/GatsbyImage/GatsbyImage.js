import React, { memo } from 'react';
import PropTypes from 'prop-types';

const GatsbyImage = ({ path }) => {
  console.log('state handlers');

  return <div />;
};

GatsbyImage.propTypes = {
  path: PropTypes.string.isRequired,
};

export default memo(GatsbyImage);
