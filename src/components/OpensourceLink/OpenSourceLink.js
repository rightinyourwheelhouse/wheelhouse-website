import PropTypes from 'prop-types';
import React from 'react';

import Github from '~images/github.svg';
import Stargazer from '~images/stargazers.svg';

import * as S from './OpenSourceLink.styles';

function OpenSourceProjectLinkComponent({ project }) {
  return (
    <S.OpenSourceContainer
      target="_blank"
      rel="nofollow noreferrer"
      href={project.htmlUrl}
    >
      <S.OpenSourceInformationContainer>
        <S.OpenSourceTitle>{project.repoFullName}</S.OpenSourceTitle>
        <S.OpenSourceDescription>{project.description}</S.OpenSourceDescription>
        <S.OpenSourceContainerIconsContainer>
          <S.OpenSourceContainerStargazersContainer>
            <Stargazer />
            <S.OpensSourceStarGazers>
              {project.starsgazersCount}
            </S.OpensSourceStarGazers>
          </S.OpenSourceContainerStargazersContainer>
          <S.OpenSourceContainerLinkContainer>
            <Github />
            <S.OpensSourceLink>{project.htmlUrl}</S.OpensSourceLink>
          </S.OpenSourceContainerLinkContainer>
        </S.OpenSourceContainerIconsContainer>
      </S.OpenSourceInformationContainer>
      <img
        width="230"
        height="230"
        src={project.avatarUrl}
        alt={project.fullName}
      />
    </S.OpenSourceContainer>
  );
}

OpenSourceProjectLinkComponent.propTypes = {
  project: PropTypes.objectOf(
    PropTypes.shape({
      repoFullName: PropTypes.any,
      htmlUrl: PropTypes.string,
      description: PropTypes.string,
      avatarUrl: PropTypes.string,
      fullName: PropTypes.string,
      starsgazersCount: PropTypes.number,
    }),
  ),
};

export default OpenSourceProjectLinkComponent;
