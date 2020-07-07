import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { CardContainer, ImageContainer, Caption } from './teamCard.styles';

const TeamCard = ({
  image, name, description,
}) => (
  <CardContainer>
    <ImageContainer>
      <Img fluid={image.childImageSharp.fluid} alt={name} />
    </ImageContainer>
    <Caption>
      <strong>{name}</strong>
      {' '}
      {description}
    </Caption>
  </CardContainer>
);

TeamCard.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default memo(TeamCard);
