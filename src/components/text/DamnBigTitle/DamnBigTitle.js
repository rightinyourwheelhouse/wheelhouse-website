import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export default styled.h1`
  color: ${({ color }) => color || 'var(--color-text-primary-900)'};
  display: block;
  font-size: 1.75rem;
  font-weight: 900;
  line-height: 85%;
  text-transform: none;
  line-height: 120%;
  position: relative;
  margin-top: 3rem;
  margin-bottom: 16px;
  max-width: 800px;

  @media screen and (min-width: ${breakpoints.medium}) {
    font-size: 8vw;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    font-size: 10rem;
    line-height: 1;
  }
`;
