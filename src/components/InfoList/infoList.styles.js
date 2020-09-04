import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const InfoListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;

  > div {
    width: 100%;

    @media screen and (min-width: ${breakpoints.small}){
      width: 50%;
    }

    @media screen and (min-width: ${breakpoints.medium}){
      width: 33%;
    }
  }
`;
