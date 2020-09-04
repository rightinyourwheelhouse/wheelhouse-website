import styled from 'styled-components';

import colors from '~styles/colors';
import spacing from '~styles/spacing';
import breakpoints from '~styles/breakpoints';

export const FooterContainer = styled.footer`
  --foreground: ${colors.textLight};

  background: ${colors.backgroundSecundary};
  padding: ${spacing.large} 0;
  min-height: 75vh;
  width: 100%;

  h2 {
    margin-bottom: ${spacing.default};
  }

  a {
    color: var(--foreground);

    &:hover {
      color: ${colors.primary};
    }
  }

  p {
    color: var(--foreground);
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;

  &:not(:first-of-type) {
    margin-top: ${spacing.large};
  }

  > div {
    margin-bottom: ${spacing.default};

    &:first-of-type {
      width: 100%;
      position: relative;

      @media screen and (min-width: ${breakpoints.medium}) {
        width: 50%;
      }
    }

    &:nth-of-type(2) {
      width: 100%;

      @media screen and (min-width: ${breakpoints.small}) {
        width: 50%;
        margin-left: 0;
      }

      @media screen and (min-width: ${breakpoints.medium}) {
        width: calc(25% - 12px);
        margin-left: 12px;
      }
    }

    &:nth-of-type(3) {
      width: 100%;

      @media screen and (min-width: ${breakpoints.small}) {
        width: 50%;
      }

      @media screen and (min-width: ${breakpoints.medium}) {
        width: 25%;
      }
    }
  }
`;

export const Title = styled.span`
  --foreground: ${colors.textLight};

  color: var(--foreground);
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 1vw;
  display: block;
`;

export const LinksContainer = styled.div`
  > span,
  > a {
    margin-bottom: 1vw;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  a {
    display: block;
    color: var(--foreground);
    font-weight: 700;
    text-transform: lowercase;
  }
`;

export const Disclaimer = styled.div`
  color: ${colors.textLight};
  line-height: 1.7;

  &:not(:first-of-type) {
    margin-top: ${spacing.default};
  }
`;
