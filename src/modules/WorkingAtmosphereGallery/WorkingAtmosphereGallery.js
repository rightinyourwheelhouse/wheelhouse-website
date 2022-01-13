import Img from 'gatsby-image';
import React, { memo } from 'react';

import AsymmetricImageGallery from '~components/ImageGallery';
import { useWorkingAtmosphereImages } from '~services/images/useWorkingAtmosphereImages';

import { WorkingAtmosphereContainer } from './workingAtmosphereGallery.styles';

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
