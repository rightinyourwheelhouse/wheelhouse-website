import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Image from '~components/Image';

const Cinemagraph = ({ image, movie: { publicURL }, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  const onLoadedData = useCallback(
    () => {
      setLoaded(true);
    },
    [],
  );

  return (
    <>
      {!loaded && image && <Image {...props} offset="0" image={image} />}
      <video
        style={{
          opacity: loaded ? 1 : 0,
          position: loaded ? 'inherit' : 'absolute',
        }}
        autoPlay
        loop
        muted
        onLoadedData={onLoadedData}
      >
        <source src={publicURL} type="video/mp4" />
      </video>
    </>
  );
};

Cinemagraph.propTypes = {
  image: PropTypes.shape({
    ...Image.propTypes,
  }),
  movie: PropTypes.shape({
    publicURL: PropTypes.string,
  }).isRequired,
};

Cinemagraph.defaultProps = {
  image: null,
};

export default memo(Cinemagraph);
