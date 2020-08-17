import styled, { css } from 'styled-components';

import spacing from '~styles/spacing';
import breakpoints from '~styles/breakpoints';
import colors from '~styles/colors';

import gridLayouts from './insightsGrid.layouts';

export const InsightsGridImage = styled.div`
  overflow: hidden;
  height: 215px;
  width: 100%;
  overflow: hidden;
  position: relative;

  > div {
    transition: all 0.3s;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 50%;
      top: 50%;
    }

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
  color: ${colors.primary};
  font-weight: bold;
  margin: 6px 0;
`;

export const InsightsGridItemContainer = styled.div`
  display: block;

  margin-top: 16px;
  padding-bottom: ${spacing.default};
  margin-bottom: ${spacing.default};
  width: 100%;

  h3 {
    text-transform: none;
    margin-top: 12px;
  }

  a {
    margin-top: 0;
  }

  p {
    margin-top: 12px;
    margin-bottom: ${spacing.default};
    font-size: 1rem;
  }
`;

export const InsightsGridContainer = styled.div`
  ${({ layout }) => {
    if (layout === gridLayouts.SUMMARY) {
      return css`
        margin: 32px 0;

        h3 {
          text-transform: uppercase;
          margin-bottom: ${spacing.column};
        }

        ${InsightsGridImage}, ${Type}, p {
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

          margin: 32px 0;
          display: flex;
          flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
          flex-wrap: wrap;

          ${InsightsGridImage} {
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
              padding-right: ${({ reverse }) => (reverse ? '0' : spacing.default)};
              padding-left: ${({ reverse }) => (reverse ? spacing.default : '0')};
              justify-content: flex-start;

              ${InsightsGridItemContainer} {
                position: sticky;
                top: 90px;
                height: var(--stickyHeight);
              }
            }

            &:last-of-type {
              ${InsightsGridItemContainer} {
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
