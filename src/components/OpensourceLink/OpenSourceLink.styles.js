import styled from 'styled-components';

export const OpenSourceContainer = styled.a`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  border: solid 1px;
  margin-bottom: var(--spacing-default);
  border-radius: 15px;
  margin-top: var(--spacing-large);

  img {
    width: unset;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
  }
`;

export const OpenSourceInformationContainer = styled.div`
  padding: 10px;
  padding-left: 20px;
  p {
    margin: unset;
  }
`;

export const OpenSourceDescription = styled.p`
  font-size: 15px;
`;

export const OpensSourceLink = styled.p`
  text-decoration: none;
  color: var(--color-text-primary-800);
  font-weight: 300;
  cursor: pointer;
  font-size: 15px;
  line-height: unset;
`;

export const OpensSourceStarGazers = styled.p`
  text-decoration: none;
  color: var(--color-text-primary-800);
  font-weight: 300;
  cursor: pointer;
  font-size: var(--font-size-small);
  line-height: unset;
`;

export const OpenSourceContainerLinkContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: calc(var(--spacing-default) - 6px);
`;

export const OpenSourceContainerIconsContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 30px;

  svg {
    width: 20px;
    height: 20px;
    align-self: center;
  }
`;
