import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const CookieConsentContainer = styled.div`
  margin-bottom: 0;
  flex: 1 1 auto;
  padding-bottom: 32px;
  background-color: var(--color-background-primary-100);
  color: var(--color-text-primary-100);
  padding: var(--spacing-default);
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 999999;

  @media screen and (min-width: ${breakpoints.medium}) {
    max-width: 1000px;
    bottom: var(--spacing-default);
    right: var(--spacing-default);
  }
`;

export const ConsentHeader = styled.header`
  color: var(--color-text-primary-100);
  margin-bottom: var(--spacing-default);
  font-weight: 900;
  font-size: 1.2em;
`;

export const ConsentContent = styled.div`
  p,
  a {
    color: var(--color-text-primary-100);
  }
`;

export const ConsentActions = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${breakpoints.medium}) {
    flex-wrap: nowrap;
  }

  > div {
    margin-bottom: var(--spacing-small);

    @media screen and (min-width: ${breakpoints.medium}) {
      margin-bottom: 0;
    }
  }

  > div:nth-of-type(2) {
    display: flex;

    > * {
      &:not(:last-of-type) {
        margin-right: var(--spacing-small);
      }
    }
  }
`;
