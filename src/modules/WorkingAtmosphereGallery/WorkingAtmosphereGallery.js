import Img from 'gatsby-image';
import React, { memo } from 'react';

import { WorkingAtmosphereContainer } from './workingAtmosphereGallery.styles';

import AsymmetricImageGallery from '~components/ImageGallery';
import { useWorkingAtmosphereImages } from '~services/images/useWorkingAtmosphereImages';

function WorkingAtmosphereGallery() {
  const images = useWorkingAtmosphereImages(14, true, true);

  return (
    <WorkingAtmosphereContainer>
      <AsymmetricImageGallery>
        {images.map(({ id, childImageSharp: { fluid } }) => (
          <Img
            objectFit="none"
            key={id}
            fluid={fluid}
            alt="Working atmosphere"
          />
        ))}
      </AsymmetricImageGallery>
    </WorkingAtmosphereContainer>
  );
}

export default memo(WorkingAtmosphereGallery);
