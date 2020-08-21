import styled from 'styled-components';

import spacing from '~styles/spacing';

export const RecommendationsContainer = styled.div`
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
    }
  }
`;

export const RecommendationsItemContainer = styled.div`
  display: block;
  float: left;
  clear: left;
  margin-top: 16px;
  padding-bottom: ${spacing.default};
  margin-bottom: ${spacing.default};
  width: 100%;

  &.sticky {
    position: sticky;
    top: 90px;
    height: calc(${({ height }) => `${height}px`});
  }

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

export const RecommendationsImage = styled.div`
  overflow: hidden;
  > div {
    transition: all 0.3s;

    &:hover {
      transform: scale(1.02);
    }
  }
`;
