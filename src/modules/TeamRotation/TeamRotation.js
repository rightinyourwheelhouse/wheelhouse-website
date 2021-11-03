import Img from 'gatsby-image';
import React, { memo, useState, useEffect } from 'react';

import { RotationContainer } from './teamRotation.styles';

import { useTeamRotationImages } from '~services/images/useTeamRotationImages';

function TeamRotation() {
  const [index, setIndex] = useState(0);
  const images = useTeamRotationImages();

  const length = images.length - 1;

  useEffect(() => {
    const handleNext = () => {
      if (index === length) {
        return setIndex(0);
      }

      return setIndex(index + 1);
    };

    const interval = setInterval(() => {
      handleNext();
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [index, length]);

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
}

export default memo(TeamRotation);
