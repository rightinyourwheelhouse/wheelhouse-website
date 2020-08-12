import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';
import colors from '~styles/colors';

export const WheelhouseDescriptionContainer = styled.div`
  position: relative;

  h1 {
    position: absolute;
    top: -2rem;
    left: -2rem;
    opacity: 0.1;
    font-size: 5rem;
    color: ${colors.primary};

    @media screen and (min-width: ${breakpoints.medium}) {
    top: -5rem;
      left: -5rem;
      font-size: 10rem;
    }
  }

  h2,
  p {
    @media screen and (min-width: ${breakpoints.medium}) {
      margin-left: 130px;
    }
  }
`;
