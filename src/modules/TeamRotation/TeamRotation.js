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
      {images.map(({ childImageSharp: { fluid }, id, name }, i) => (
        <Img
          loading="eager"
          fluid={fluid}
          key={id}
          alt={name.replace(/-/g, ' ').substring(2)}
          style={{
            display: index === i ? 'block' : 'none',
          }}
        />
      ))}
    </RotationContainer>
  );
};

export default memo(TeamRotation);
