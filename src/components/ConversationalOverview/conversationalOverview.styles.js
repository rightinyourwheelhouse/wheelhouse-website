import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const OverviewWrapper = styled.div`
  word-break: break-word;
  display: grid;
  grid-template-columns: 1fr;

  width: 100%;

  @media screen and (min-width: ${breakpoints.medium}) {
    width: 50%;
  }

  @media screen and (min-width: ${breakpoints.tiny}) {
    grid-template-columns: 1fr 1fr;
  }

  border-radius: 0.4rem;
  background-color: #58bd8610;
`;

export const OverviewLabel = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  padding: 1rem 1rem 0 1rem;
`;

export const OverviewText = styled.p`
  margin: 0;
  padding: 0 1rem 1rem 1rem;
`;

export const OverviewButton = styled.button`
  width: 100%;

  @media screen and (min-width: ${breakpoints.medium}) {
    width: 50%;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  background-color: #58bd86;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  color: white;
  font-weight: 500;

  &:hover {
    opacity: 0.4;
  }
`;
