import React, { memo } from 'react';
import Img from 'gatsby-image';

import { useWorkingAtmosphereImages } from '~api/images/useWorkingAtmosphereImages';

import AsymmetricImageGallery from '~components/AsymmetricImageGallery';

import { WorkingAtmosphereContainer } from './workingAtmosphereAsymmetric.styles';

const WorkingAtmosphereAsymmetric = () => {
  const images = useWorkingAtmosphereImages(14);

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

export default memo(WorkingAtmosphereAsymmetric);
