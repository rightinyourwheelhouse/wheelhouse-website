import React, { memo } from 'react';
import Img from 'gatsby-image';

import { useWorkingAtmosphereImages } from '~api/images/useWorkingAtmosphereImages';

import HorizontalItemList from '~components/HorizontalItemList';

import { WorkingAtmosphereContainer } from './workingAtmosphere.styles';

const WorkingAtmosphere = () => {
  const images = useWorkingAtmosphereImages();

  return (
    <WorkingAtmosphereContainer>
      <HorizontalItemList>
        {images.map(({ id, childImageSharp: { fluid } }) => (
          <Img objectFit="contain" key={id} fluid={fluid} alt="Working atmosphere" />
        ))}
      </HorizontalItemList>
    </WorkingAtmosphereContainer>
  );
};

export default memo(WorkingAtmosphere);
