import styled from 'styled-components';

import colors from '~styles/colors';
import breakpoints from '~styles/breakpoints';

export default styled.h1`
  color: ${({ color }) => color || colors.textLight};
  display: block;
  font-size: 1.75rem;
  font-weight: 900;
  line-height: 85%;
  text-transform: none;
  line-height: 120%;
  position: relative;
  margin-top: 3rem;
  margin-bottom: 16px;

  @media screen and (min-width: ${breakpoints.medium}) {
    font-size: 5vw;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    font-size: 6rem;
    line-height: 1;
  }
`;
