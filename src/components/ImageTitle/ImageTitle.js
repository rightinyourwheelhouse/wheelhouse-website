import PropTypes from 'prop-types';
import React, { memo } from 'react';

import {
  OuterContainer,
  ContentContainer,
  ImageContainer,
} from './imageTitle.styles';

function ImageTitle({ image, children }) {
  return (
    <OuterContainer>
      <ContentContainer>{children}</ContentContainer>
      {image && <ImageContainer>{image}</ImageContainer>}
    </OuterContainer>
  );
}

ImageTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  image: PropTypes.node,
};

ImageTitle.defaultProps = {
  image: null,
};

export default memo(ImageTitle);
