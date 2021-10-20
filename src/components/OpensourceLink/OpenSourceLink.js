import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { OpenSourceContainer } from './OpenSourceLink.styles';

const OpenSourceLink = ({ items }) => (
  <OpenSourceContainer>
    <p>{items.title}</p>
    <p>{items.description}</p>
    <div>
      <p>{items.site_name}</p>
      <a href={items.url}>{items.url}</a>
    </div>
    <img src={items.imageWithAlt.image} alt={items.imageWithAlt.alt} />
  </OpenSourceContainer>
);

OpenSourceLink.propTypes = {
  items: PropTypes.objectOf(
    PropTypes.shape({
      description: PropTypes.string,
      imageWithAlt: PropTypes.objectOf(
        PropTypes.shape({
          alt: PropTypes.string,
          image: PropTypes.string,
        }),
      ),
      site_name: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

export default memo(OpenSourceLink);
