import PropTypes from 'prop-types';
import React from 'react';

import * as S from './OpenSourceLink.styles';

import Github from '~images/github.svg';
import Stargazer from '~images/stargazers.svg';

function OpenSourceLinkComponent({ items }) {
  return (
    <S.OpenSourceContainer
      target="_blank"
      rel="nofollow noreferrer"
      href={items.htmlUrl}
    >
      <S.OpenSourceInformationContainer>
        <S.OpenSourceTitle>{items.repoFullName}</S.OpenSourceTitle>
        <S.OpenSourceDescription>{items.description}</S.OpenSourceDescription>
        <S.OpenSourceContainerIconsContainer>
          <S.OpenSourceContainerStargazersContainer>
            <Stargazer />
            <S.OpensSourceStarGazers>
              {items.starsgazersCount}
            </S.OpensSourceStarGazers>
          </S.OpenSourceContainerStargazersContainer>
          <S.OpenSourceContainerLinkContainer>
            <Github />
            <S.OpensSourceLink>{items.htmlUrl}</S.OpensSourceLink>
          </S.OpenSourceContainerLinkContainer>
        </S.OpenSourceContainerIconsContainer>
      </S.OpenSourceInformationContainer>
      <img
        width="230"
        height="230"
        src={items.avatarUrl}
        alt={items.fullName}
      />
    </S.OpenSourceContainer>
  );
}

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

export default OpenSourceLinkComponent;
