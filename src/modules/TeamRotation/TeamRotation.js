import React, { memo, useState, useEffect } from 'react';
import Img from 'gatsby-image';

import { RotationContainer } from './teamRotation.styles';

import { useTeamRotationImages } from '~api/images/useTeamRotationImages';

const TeamRotation = () => {
  const [index, setIndex] = useState(0);
  const images = useTeamRotationImages();

  const length = images.length - 1;
  const handleNext = () => {
    if (index === length) {
      return setIndex(0);
    }

    return setIndex(index + 1);
  };

  const { childImageSharp, id, name } = images[index];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <RotationContainer>
      <Img
        loading="eager"
        fluid={childImageSharp.fluid}
        key={id}
        alt={name.replace(/-/g, ' ').substring(2)}
      />
    </RotationContainer>
  );
};

export default memo(TeamRotation);
