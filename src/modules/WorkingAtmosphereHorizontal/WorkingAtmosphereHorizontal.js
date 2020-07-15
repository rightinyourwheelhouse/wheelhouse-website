import React, { memo } from 'react';
import Img from 'gatsby-image';

import { useWorkingAtmosphereImages } from '~api/images/useWorkingAtmosphereImages';

import HorizontalItemList from '~components/HorizontalItemList';

import { WorkingAtmosphereContainer } from './workingAtmosphereHorizontal.styles';
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
