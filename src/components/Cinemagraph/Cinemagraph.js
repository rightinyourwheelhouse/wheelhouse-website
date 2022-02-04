import PropTypes from 'prop-types';
import React, { memo, useState, useCallback } from 'react';

import Image from '~components/Image';

function Cinemagraph({ image, movie: { publicURL }, ...props }) {
  const [loaded, setLoaded] = useState(false);

  const onLoadedData = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && image && (
        <Image {...props} offset="0" image={image} layout="fullWidth" />
      )}
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
}

Cinemagraph.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    bw: PropTypes.bool,
    filename: PropTypes.string,
    image: PropTypes.shape({}),
    offset: PropTypes.string,
    src: PropTypes.string,
  }),
  movie: PropTypes.shape({
    publicURL: PropTypes.string,
  }).isRequired,
};

Cinemagraph.defaultProps = {
  image: null,
};

export default memo(Cinemagraph);
