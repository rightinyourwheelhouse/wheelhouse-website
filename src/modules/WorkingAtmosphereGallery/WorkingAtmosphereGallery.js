import React, { memo } from 'react';
import Img from 'gatsby-image';

import { useWorkingAtmosphereImages } from '~api/images/useWorkingAtmosphereImages';

import AsymmetricImageGallery from '~components/ImageGallery';

import { WorkingAtmosphereContainer } from './workingAtmosphereGallery.styles';

const WorkingAtmosphereGallery = () => {
  const images = useWorkingAtmosphereImages(14, true, true);

  return (
    <WorkingAtmosphereContainer>
      <AsymmetricImageGallery>
        {images.map(({ id, childImageSharp: { fluid } }) => (
          <Img objectFit="none" key={id} fluid={fluid} alt="Working atmosphere" />
        ))}
      </AsymmetricImageGallery>
    </WorkingAtmosphereContainer>
  );
};

export default memo(WorkingAtmosphereGallery);
