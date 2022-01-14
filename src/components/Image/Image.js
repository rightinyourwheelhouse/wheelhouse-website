import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import styled from 'styled-components';

import { useImage } from '~services/images/useImage';

import spacing from '~styles/spacing';

const ImageContainer = styled.div`
  --offset: ${({ offset }) => offset || spacing.large};

  margin: var(--offset) 0;
`;

function Image({ alt, filename, bw, src, image, offset, ...props }) {
  let selectedImage = useImage(filename, src);

  if (image) {
    selectedImage = image;
  }

  if (!selectedImage && !src) {
    return null;
  }

  return (
    <ImageContainer offset={offset}>
      {selectedImage.extension === 'gif' && (
        <img src={selectedImage.publicURL} alt={alt} {...props} />
      )}
      {selectedImage.extension !== 'gif' && (
        <GatsbyImage
          image={selectedImage?.childImageSharp?.gatsbyImageData}
          {...props}
          alt={alt}
        />
      )}
    </ImageContainer>
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  bw: PropTypes.bool,
  filename: PropTypes.string,
  image: PropTypes.shape({}),
  offset: PropTypes.string,
  src: PropTypes.string,
};

Image.defaultProps = {
  bw: false,
  filename: null,
  image: null,
  offset: spacing.default,
  src: null,
};

export default memo(Image);
