import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const OpenSourceContainer = styled.a`
  display: grid;
  border: solid 1px #b0b0b0;
  margin-bottom: var(--spacing-default);
  border-radius: 6px;
  margin-top: var(--spacing-large);

  img {
    display: none;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    border: solid 1px var(--color-text-primary-900);
    margin-bottom: var(--spacing-default);
    border-radius: 15px;
    margin-top: var(--spacing-large);

    img {
      width: unset;
      border-top-right-radius: 14px;
      border-bottom-right-radius: 14px;
    }
  }
`;

export const OpenSourceInformationContainer = styled.div`
  p {
    padding: 20px;
    max-width: 380px;
  }
  @media screen and (min-width: ${breakpoints.medium}) {
    padding: 10px;
    padding-left: 20px;
    p {
      margin: unset;
    }
  }
`;

export const OpenSourceDescription = styled.p`
  font-size: 1.1rem;
  max-width: 380px;
  margin-top: 15px;

  @media screen and (min-width: ${breakpoints.medium}) {
    font-size: 15px;
  }
`;

export const OpenSourceTitle = styled.p`
  font-weight: bold;
  max-width: 380px;
  margin-bottom: 15px;
  @media screen and (min-width: ${breakpoints.medium}) {
    font-size: 15px;
  }
`;

export const OpensSourceLink = styled.p`
  display: none;
  @media screen and (min-width: ${breakpoints.medium}) {
    text-decoration: none;
    color: var(--color-text-primary-800);
    font-weight: 300;
    cursor: pointer;
    font-size: 15px;
    line-height: unset;
  }
`;

export const OpensSourceStarGazers = styled.p`
  @media screen and (min-width: ${breakpoints.medium}) {
    text-decoration: none;
    color: var(--color-text-primary-800);
    font-weight: 300;
    cursor: pointer;
    font-size: var(--font-size-small);
    line-height: unset;
  }
`;

export const OpenSourceContainerLinkContainer = styled.div`
  display: flex;
  justify-content: right;
  @media screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    gap: 10px;
    margin-top: calc(var(--spacing-default) - 6px);
  }
`;

export const OpenSourceContainerStargazersContainer = styled.div`
  display: flex;
  @media screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    gap: 10px;
    margin-top: calc(var(--spacing-default) - 6px);
  }
`;

export const OpenSourceContainerIconsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-top: -60px;
  height: 120px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;

  svg {
    width: 20px;
    height: 20px;
    align-self: center;
  }
  @media screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    gap: 40px;
    margin-top: 30px;

    svg {
      width: 20px;
      height: 20px;
      align-self: center;
    }
  }
`;
