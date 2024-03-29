import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import styled from 'styled-components';

import spacing from '~styles/spacing';

const ImageContainer = styled.div`
  --offset: ${({ offset }) => offset || spacing.large};

  margin: var(--offset) 0;

  > div {
    width: 100%;
  }
`;

function Image({ alt, filename, bw, image, offset, ...props }) {
  if (!image) {
    return null;
  }

  return (
    <ImageContainer offset={offset}>
      {image.extension === 'gif' && (
        <img src={image.publicURL} alt={alt} {...props} />
      )}
      {image.extension !== 'gif' && (
        <GatsbyImage
          image={image?.childImageSharp?.gatsbyImageData}
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
