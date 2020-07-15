import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { InfoContainer, Description, Title } from './info.styles';

const Info = ({ description, title }) => (
  <InfoContainer>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </InfoContainer>
);

Info.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default memo(Info);
