import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const Overlay = styled.div`
  position: fixed;
  content: '';
  background: var(--color-background-primary-100);
  opacity: 0.05;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
`;

export const CookieConsentAdvancedContainer = styled.div`
  background-color: var(--color-background-primary-900);
  box-sizing: border-box;
  height: auto;
  left: 50%;
  margin: 0 auto;
  max-height: 100%;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: var(--spacing-default);
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999999;

  @media screen and (min-width: ${breakpoints.medium}){
    max-width: 800px;
    height: unset;
  }
`;

export const CookieConsentHeader = styled.header`
  margin-bottom: var(--spacing-default);
  display: flex;
  justify-content: space-between;
`;

export const CookieConsentContent = styled.div`
  h2 {
    font-size: 24px;
  }

  p {
    font-size: 14px;
  }
`;

export const CookieConsentOptions = styled.div`
  margin-top: var(--spacing-default);
  margin-bottom: var(--spacing-default);
`;

export const CookieConsentActions = styled.div`
  display: flex;
  justify-content: flex-end;

  > * {
    &:not(:last-of-type) {
      margin-right: var(--spacing-small);
    }
  }
`;
