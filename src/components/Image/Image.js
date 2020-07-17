import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';

import { useImage } from '~api/images/useImage';

import colors from '~styles/colors';

const Image = ({
  alt, filename, bw, ...props
}) => {
  const image = useImage(filename);

  if (!image) {
    return null;
  }

  const StyledImage = styled(Img)`
    ${bw
    && css`
      filter: grayscale(100%);
      background-color: ${colors.primary};
      position: relative;

      &:hover {
        filter: none;
      }
    `}
  `;

  return (
    <StyledImage {...props} alt={alt} fluid={image.childImageSharp.fluid} />
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  bw: PropTypes.bool,
  filename: PropTypes.string.isRequired,
};

Image.defaultProps = {
  bw: true,
};

export default memo(Image);
