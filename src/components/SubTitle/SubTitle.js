import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export default styled.span`
  display: block;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: -21px;

  @media screen and (min-width: ${breakpoints.medium}) {
    font-size: 1vw;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    font-size: 1.5vw;
    line-height: 1.2;
  }
`;
