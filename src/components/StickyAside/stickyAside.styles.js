import styled, { css } from 'styled-components';

import spacing from '~styles/spacing';
import breakpoints from '~styles/breakpoints';

export const StickyAsideItemContainer = styled.div`
  display: block;

  margin-top: 16px;
  padding-bottom: ${spacing.default};
  margin-bottom: ${spacing.default};
  width: 100%;

  h3 {
    text-transform: none;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  p {
    margin: 6px 0;
    font-size: 1rem;
  }
`;

export const StickyAsideContainer = styled.div`
  @media screen and (min-width: ${breakpoints.small}) {
    --stickyHeight: ${({ stickyHeight }) => `${stickyHeight}px`};

    margin: 32px 0;
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    flex-wrap: wrap;

    > div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      flex: 0 0 25%;
      justify-content: space-evenly;
      max-width: 25%;
      padding: 0;

      &:first-of-type {
        flex: 0 0 75%;
        max-width: 75%;
        padding-right: ${({ reverse }) => (reverse ? '0' : spacing.default)};
        padding-left: ${({ reverse }) => (reverse ? spacing.default : '0')};
        justify-content: flex-start;

        ${StickyAsideItemContainer} {
          position: sticky;
          top: 90px;
          height: var(--stickyHeight);
        }
      }
    }
  }
`;

export const StickyAsideImage = styled.div`
  overflow: hidden;

  > div {
    transition: all 0.3s;

    &:hover {
      transform: scale(1.02);
    }
  }
`;
