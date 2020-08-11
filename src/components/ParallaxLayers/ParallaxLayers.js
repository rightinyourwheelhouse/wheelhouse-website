/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { useScrolling } from '~hooks/useScrolling';
import {
  ParallaxContainer, Layer, Cover,
} from './parallaxLayers.styles';

const ParallaxLayers = ({ children, images }) => {
  const [{ scrollPosition }] = useScrolling();

  return (
    <ParallaxContainer>
      {images.map((image, i) => {
        /* const z = Math.floor((images.length - i) / 2); */
        const z = (i * scrollPosition) / 10;
        console.log('z', z);

        return (
          <Layer key={i} z={z}>
            <img src={image} alt="parallax images" />
          </Layer>
        );
      })}
      <Cover>
        {children}
      </Cover>
    </ParallaxContainer>
  );
};

ParallaxLayers.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default memo(ParallaxLayers);
