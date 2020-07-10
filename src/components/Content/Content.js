import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export default styled.div`
  margin-top: 5vw;
  width: 100%;

  @media screen and (min-width: ${breakpoints.medium}) {
    width: 62vw;
    max-width: 900px;
  }
`;
