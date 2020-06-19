import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import {
  GalleryItemContainer,
  GalleryImage,
  GalleryContent,
} from './galleryItem.styles';

const GalleryItem = ({
  description, image, progressiveImage, title, to,
}) => (
  <GalleryItemContainer>
    <Link to={to}>
      <GalleryImage>
        {progressiveImage ? (
          <Img
            fluid={progressiveImage.placeholderImage.childImageSharp.fluid}
          />
        ) : (
          <img src={image} alt={title} />
        )}
      </GalleryImage>
      <GalleryContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </GalleryContent>
    </Link>
  </GalleryItemContainer>
);

GalleryItem.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  progressiveImage: PropTypes.shape({
    placeholderImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({}),
      }),
    }),
  }),
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

GalleryItem.defaultProps = {
  image: null,
  progressiveImage: null,
};

export default memo(GalleryItem);
