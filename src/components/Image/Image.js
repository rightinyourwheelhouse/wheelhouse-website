import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { useImage } from '~api/images/useImage';

const ImageContainer = styled.div`
  margin: var(--spacing-large) 0;
`;

const Image = ({
  alt, filename, bw, src, ...props
}) => {
  const image = useImage(filename, src);

  if (!image && !src) {
    return null;
  }

  return (
    <ImageContainer>
      {image.extension === 'gif' && (
        <img src={image.publicURL} alt={alt} {...props} />
      )}
      {image.extension !== 'gif' && (
        <Img {...props} alt={alt} fluid={image.childImageSharp.fluid} />
      )}
    </ImageContainer>
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  bw: PropTypes.bool,
  filename: PropTypes.string,
  src: PropTypes.string,
};

Image.defaultProps = {
  bw: false,
  filename: null,
  src: null,
};

export default memo(Image);
