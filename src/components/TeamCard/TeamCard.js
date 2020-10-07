import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import { CardContainer, ImageContainer, Caption } from './teamCard.styles';

const TeamCard = ({
  image, name, description, slug,
}) => (
  <CardContainer>
    <Link to={slug}>
      <ImageContainer>
        {image && <Img fluid={image.childImageSharp.fluid} alt={name} />}
      </ImageContainer>
    </Link>
    <Caption>
      <strong>{name}</strong>
      {' '}
      {description}
    </Caption>
  </CardContainer>
);

TeamCard.propTypes = {
  description: PropTypes.string,
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
  name: PropTypes.string.isRequired,
};

TeamCard.defaultProps = {
  description: '',
};

export default memo(TeamCard);
