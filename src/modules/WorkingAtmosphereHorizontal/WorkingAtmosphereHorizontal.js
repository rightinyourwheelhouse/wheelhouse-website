import Img from 'gatsby-image';
import React, { memo } from 'react';

import HorizontalItemList from '~components/HorizontalItemList';
import { useWorkingAtmosphereImages } from '~services/images/useWorkingAtmosphereImages';

import { orientationName } from '~utils/image';

import { WorkingAtmosphereContainer } from './workingAtmosphereHorizontal.styles';

function WorkingAtmosphereHorizontal() {
  const images = useWorkingAtmosphereImages();

  return (
    <WorkingAtmosphereContainer>
      <HorizontalItemList>
        {images.map(({ id, childImageSharp: { fluid } }) => {
          const { aspectRatio } = fluid;

          return (
            <Img
              className={orientationName(aspectRatio)}
              key={id}
              fluid={fluid}
              alt="Working atmosphere"
            />
          );
        })}
      </HorizontalItemList>
    </WorkingAtmosphereContainer>
  );
}

export default memo(WorkingAtmosphereHorizontal);
