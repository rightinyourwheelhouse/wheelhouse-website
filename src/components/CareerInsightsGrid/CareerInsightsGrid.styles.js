import styled, { css } from 'styled-components';

import breakpoints from '~styles/breakpoints';
import spacing from '~styles/spacing';

import gridLayouts from './CareerInsightsGrid.layouts';

export const CareerInsightsGridImage = styled.div`
  --height: 215px;

  overflow: hidden;
  height: var(--height);
  width: 100%;
  overflow: hidden;
  position: relative;

  > div {
    transition: all 0.3s;
    min-height: var(--height);

    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const Type = styled.span`
  display: block;
  line-height: 2;
  font-size: 0.7rem;
  text-transform: uppercase;
  color: var(--color-primary);
  font-weight: bold;
  margin: 6px 0;
`;

export const CareerInsightsGridItemContainer = styled.div`
  display: block;
  width: 100%;
  padding-bottom: var(--spacing-default);

  &:not(:first-of-type) {
    margin-top: 16px;

    @media screen and (min-width: ${breakpoints.small}) {
      margin-top: 0;
    }
  }

  h3 {
    text-transform: none;
    margin-top: 12px;
  }

  a {
    margin-top: 0;
  }

  p {
    margin-top: 12px;
    margin-bottom: var(--spacing-default);
    font-size: 1rem;
  }
`;

export const CareerInsightsGridContainer = styled.div`
  ${({ layout }) => {
    if (layout === gridLayouts.SUMMARY) {
      return css`
        margin: 32px 0;

        h3 {
          text-transform: uppercase;
          margin-bottom: var(--spacing-small);
        }

        ${CareerInsightsGridImage}, ${Type}, p {
          display: none;
        }
      `;
    }

    if (layout === gridLayouts.COLUMN) {
      return css`
        @media screen and (min-width: ${breakpoints.small}) {
          margin: 32px 0;
          display: flex;
          flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
          justify-content: flex-start;
          flex-wrap: wrap;

          > div {
            width: 32%;
            &:not(:nth-child(3n + 1)) {
              margin-left: 2%;
            }
          }
        }
      `;
    }

    if (layout === gridLayouts.HIGHLIGHT) {
      return css`
        @media screen and (min-width: ${breakpoints.small}) {
          --stickyHeight: ${({ stickyHeight }) => `${stickyHeight}px`};

          margin: 0;
          display: flex;
          flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
          align-items: flex-start;
          flex-wrap: wrap;

          ${CareerInsightsGridImage} {
            height: unset;
          }

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
              padding-right: ${({ reverse }) =>
                reverse ? '0' : spacing.default};
              padding-left: ${({ reverse }) =>
                reverse ? spacing.default : '0'};
              justify-content: flex-start;

              ${CareerInsightsGridItemContainer} {
                position: sticky;
                top: 90px;
                height: var(--stickyHeight);
              }
            }

            &:last-of-type {
              ${CareerInsightsGridItemContainer} {
                &:not(:last-of-type) {
                  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                }
              }
            }
          }
        }
      `;
    }
  }}
`;
