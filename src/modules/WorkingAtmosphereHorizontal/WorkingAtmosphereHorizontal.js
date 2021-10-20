import Img from 'gatsby-image';
import React, { memo } from 'react';

import { WorkingAtmosphereContainer } from './workingAtmosphereHorizontal.styles';

import HorizontalItemList from '~components/HorizontalItemList';
import { useWorkingAtmosphereImages } from '~services/images/useWorkingAtmosphereImages';

import { orientationName } from '~utils/image';

const WorkingAtmosphereHorizontal = () => {
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
};

export default memo(WorkingAtmosphereHorizontal);
