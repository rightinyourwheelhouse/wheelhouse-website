import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const WheelhouseDescriptionContainer = styled.div`
  position: relative;

  h1 {
    position: absolute;
    top: -2rem;
    left: -2rem;
    opacity: 0.05;
    font-size: 5rem;

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
