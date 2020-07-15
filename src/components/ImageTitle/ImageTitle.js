import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { OuterContainer, ContentContainer, ImageContainer } from './imageTitle.styles';

const ImageTitle = memo(({ image, children }) => (
  <OuterContainer>
    {image && <ImageContainer>{image}</ImageContainer>}
    <ContentContainer>{children}</ContentContainer>
  </OuterContainer>
));

ImageTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  image: PropTypes.node,
};

ImageTitle.defaultProps = {
  image: null,
};
export default ImageTitle;
