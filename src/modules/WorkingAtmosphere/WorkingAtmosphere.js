import React, { memo } from 'react';
import Img from 'gatsby-image';

import { useWorkingAtmosphereImages } from '~api/images/useWorkingAtmosphereImages';

import HorizontalItemList from '~components/HorizontalItemList';

const WorkingAtmosphere = () => {
  const images = useWorkingAtmosphereImages();

  return (
    <HorizontalItemList>
      {images.map(({ id, childImageSharp: { fluid } }) => (
        <Img objectFit="contain" key={id} fluid={fluid} alt="Working atmosphere" />
      ))}
    </HorizontalItemList>
  );
};

export default memo(WorkingAtmosphere);
