import { GatsbyImage } from 'gatsby-plugin-image';
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
        {images.map(image => {
          const {
            id,
            childImageSharp: { fluid, gatsbyImageData },
          } = image;
          const { aspectRatio } = fluid;

          return (
            <GatsbyImage
              className={orientationName(aspectRatio)}
              key={id}
              image={gatsbyImageData}
              alt="Working atmosphere"
            />
          );
        })}
      </HorizontalItemList>
    </WorkingAtmosphereContainer>
  );
}

export default memo(WorkingAtmosphereHorizontal);
