import { GatsbyImage } from 'gatsby-plugin-image';
import React, { memo } from 'react';

import AsymmetricImageGallery from '~components/ImageGallery';
import { useWorkingAtmosphereImages } from '~services/images/useWorkingAtmosphereImages';

import { WorkingAtmosphereContainer } from './workingAtmosphereGallery.styles';

function WorkingAtmosphereGallery() {
  const images = useWorkingAtmosphereImages(14, true, true);

  return (
    <WorkingAtmosphereContainer>
      <AsymmetricImageGallery>
        {images.map(image => (
          <GatsbyImage
            objectFit="none"
            key={image.id}
            image={image?.childImageSharp?.gatsbyImageData}
            alt="Working atmosphere"
          />
        ))}
      </AsymmetricImageGallery>
    </WorkingAtmosphereContainer>
  );
}

export default memo(WorkingAtmosphereGallery);
