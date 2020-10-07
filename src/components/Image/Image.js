import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { useImage } from '~api/images/useImage';

const ImageContainer = styled.div`
  margin: var(--spacing-large) 0;
`;

const Image = ({
  alt, filename, bw, src, image, ...props
}) => {
  const selectedImage = image || useImage(filename, src);

  if (!selectedImage && !src) {
    return null;
  }

  return (
    <ImageContainer>
      {image.extension === 'gif' && (
        <img src={selectedImage.publicURL} alt={alt} {...props} />
      )}
      {image.extension !== 'gif' && (
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
  src: PropTypes.string,
};

Image.defaultProps = {
  bw: false,
  filename: null,
  image: null,
  src: null,
};

export default memo(Image);
