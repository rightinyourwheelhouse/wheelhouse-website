import Link from 'gatsby-link';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import Button from '~components/Button';

import { CardContainer, ImageContainer, Caption } from './teamCard.styles';

function TeamCard({ image, name, description, slug }) {
  return (
    <CardContainer>
      <Link to={slug}>
        <ImageContainer>
          {image && (
            <GatsbyImage
              image={image?.childImageSharp?.gatsbyImageData}
              alt={name}
            />
          )}
        </ImageContainer>
      </Link>
      <Caption>
        <strong>{name}</strong> {description}
      </Caption>

      <Button to={slug} as={Link}>
        meet {name.split(' ')[0]}
      </Button>
    </CardContainer>
  );
}

TeamCard.propTypes = {
  description: PropTypes.string,
  image: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
};

TeamCard.defaultProps = {
  description: '',
};

export default memo(TeamCard);
