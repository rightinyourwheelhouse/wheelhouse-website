import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const JobTitle = styled.h3`
  display: block;
  font-size: 2rem;
  text-transform: none;
  font-weight: 900;
  margin: 0;
  margin-top: var(--spacing-small) !important;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.3s;
`;

export const JobItemContainer = styled.div`
  display: block;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  margin-top: var(--spacing-default);

  @media screen and (min-width: ${breakpoints.medium}) {
    flex-wrap: nowrap;
  }

  &:hover {
    color: var(--color-primary);

    ${IconContainer} {
      opacity: 1;
    }
  }

  span {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    color: var(--color-text-primary-900);

    &:before {
      display: block;
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      margin-right: 0.25rem;
      border-radius: 1rem;
      background-color: currentColor;
      transform: translateY(-1px);
    }
  }
`;
