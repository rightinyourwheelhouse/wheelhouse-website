import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const WheelhouseDescriptionContainer = styled.div`
  position: relative;

  h1 {
    margin-top: 0;
    position: absolute;
    max-width: calc(100vw );
    text-overflow: unset;
    overflow: hidden;
    top: -2rem;
    left: -2rem;
    opacity: 0.1;
    font-size: 5rem;
    color: var(--color-primary);

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
