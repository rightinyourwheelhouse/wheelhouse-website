import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { useImage } from '~api/images/useImage';

import spacing from '~styles/spacing';

const ImageContainer = styled.div`
  --offset: ${({ offset }) => offset || spacing.large};

  margin: var(--offset) 0;
`;

const Image = ({
  alt, filename, bw, src, image, offset, ...props
}) => {
  const selectedImage = image || useImage(filename, src);

  if (!selectedImage && !src) {
    return null;
  }

  return (
    <ImageContainer offset={offset}>
      {selectedImage.extension === 'gif' && (
        <img src={selectedImage.publicURL} alt={alt} {...props} />
      )}
      {selectedImage.extension !== 'gif' && (
        <Img {...props} alt={alt} fluid={selectedImage.childImageSharp.fluid} />
      )}
    </ImageContainer>
  );
};

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
