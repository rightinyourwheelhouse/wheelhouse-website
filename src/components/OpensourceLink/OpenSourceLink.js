import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { OpenSourceContainer } from './OpenSourceLink.styles';

const OpenSourceLinkComponent = ({ items }) => (
  <OpenSourceContainer>
    <p>{items.repoFullName}</p>
    <p>{items.description}</p>
    <p>{items.starsgazersCount}</p>
    <div>
      <p>{items.site_name}</p>
      <a href={items.htmlUrl}>{items.htmlUrl}</a>
    </div>
    <img src={items.avatarUrl} alt={items.fullName} />
  </OpenSourceContainer>
);

OpenSourceLinkComponent.propTypes = {
  items: PropTypes.objectOf(
    PropTypes.shape({
      repoFullName: PropTypes.string,
      htmlUrl: PropTypes.string,
      description: PropTypes.string,
      avatarUrl: PropTypes.string,
      fullName: PropTypes.string,
      starsgazersCount: PropTypes.number,
    }),
  ),
};

export default memo(OpenSourceLinkComponent);
