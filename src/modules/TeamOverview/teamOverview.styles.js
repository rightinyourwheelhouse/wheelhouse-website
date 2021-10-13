import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  margin: 3rem 0 0 0;

  > div,
  > a {
    padding-left: 8.33333333vw;
    width: 100%;
    margin-bottom: 45px;
    padding-left: 0;
  }

  @media screen and (min-width: ${breakpoints.small}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: -8.33333333vw;

    > div,
    > a {
      padding-left: 8.33333333vw;
      width: 50%;
      margin-bottom: 6.5vw;
    }
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: -8.33333333vw;

    > div,
    > a {
      padding-left: 8.33333333vw;
      width: 33.33333333%;
      margin-bottom: 6.5vw;
    }
  }
`;
