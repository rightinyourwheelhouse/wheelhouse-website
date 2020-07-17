import styled from 'styled-components';

import colors from '~styles/colors';
import breakpoints from '~styles/breakpoints';

export default styled.div`
  display: flex;
  flex-wrap: wrap;

  picture > img {
    height: auto !important;
  }
  > img {
    height: auto !important;
  }

  > div {
    flex: 1 0 100%;
    margin: 5px;
    background-color: ${colors.accent};

    @media screen and (min-width: ${breakpoints.small}){
      flex: 1 0 30%;
    }
    @media screen and (min-width: ${breakpoints.medium}){
      flex: 1 0 21%;
    }
  }
`;
