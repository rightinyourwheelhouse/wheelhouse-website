import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const JobTitle = styled.span`
  display: block;
  font-size: 2rem;
  text-transform: none;
  font-weight: 900;
`;

export const JobItemContainer = styled.div`
  display: block;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: var(--spacing-default);

  @media screen and (min-width: ${breakpoints.medium}){
    flex-wrap: nowrap;
  }

  &:hover {
    color: var(--color-primary);
  }

  p {
    padding-top: 8px;
    margin: 0%;
    font-size: 1rem;
  }
`;
