import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';
import spacing from '~styles/spacing';

export const OuterContainer = styled.div`
  flex: 1;
  width: 100%;

  @media screen and (min-width: ${breakpoints.large}) {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
    max-width: ${breakpoints.large};
    margin-left: auto;
    margin-right: auto;
    padding-right: ${spacing.default};
    padding-left: ${spacing.default};
    margin-bottom: ${spacing.big};

    > div {
      width: 50%;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 0 60px 0 0;
  max-width: ${breakpoints.medium};
  margin-left: auto;
  margin-right: auto;
  padding-right: ${spacing.default};
  padding-left: ${spacing.default};
  margin-bottom: ${spacing.big};

  p {
    color: rgba(0, 0, 0, 0.54);
  }

  span {
    font-size: 18px;

    @media screen and (min-width: ${breakpoints.medium}) {
      font-size: 1.3vw;
      max-width: 95%;
    }
  }
  h1 {
    font-size: 33px;
    max-width: 80%;
    margin-bottom: ${spacing.default};

    @media screen and (min-width: ${breakpoints.medium}) {
      font-size: 3vw;
      max-width: 95%;
    }
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    max-width: ${breakpoints.medium};
    padding: 0 15rem 0 15rem;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    margin-bottom: 0;
    padding-left: 0;
    padding-right: ${spacing.default};
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: ${spacing.large};
  width: 100%;
`;
