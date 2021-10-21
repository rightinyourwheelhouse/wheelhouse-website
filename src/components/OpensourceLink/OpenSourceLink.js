import PropTypes from 'prop-types';
import React, { memo } from 'react';

import {
  OpenSourceContainer,
  OpenSourceInformationContainer,
  OpenSourceDescription,
  OpensSourceLink,
  OpenSourceContainerLinkContainer,
  OpenSourceContainerIconsContainer,
  OpensSourceStarGazers,
} from './OpenSourceLink.styles';

import Github from '~images/github.svg';
import Stargazer from '~images/stargazers.svg';

const OpenSourceLinkComponent = ({ items }) => (
  <OpenSourceContainer>
    <OpenSourceInformationContainer>
      <p>{items.repoFullName}</p>
      <OpenSourceDescription>{items.description}</OpenSourceDescription>
      <OpenSourceContainerIconsContainer>
        <OpenSourceContainerLinkContainer>
          <Stargazer />
          <OpensSourceStarGazers>
            {items.starsgazersCount}
          </OpensSourceStarGazers>
        </OpenSourceContainerLinkContainer>
        <OpenSourceContainerLinkContainer>
          <Github />
          <OpensSourceLink>{items.htmlUrl}</OpensSourceLink>
        </OpenSourceContainerLinkContainer>
      </OpenSourceContainerIconsContainer>
    </OpenSourceInformationContainer>
    <img width="220" height="230" src={items.avatarUrl} alt={items.fullName} />
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
