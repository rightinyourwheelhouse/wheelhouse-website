import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';
import spacing from '~styles/spacing';

export default styled.div`
  margin-top: 5vw;
  width: 100%;

  h2, h1 {
    margin-bottom: ${spacing.default};
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    width: 62vw;
    max-width: 600px;
  }
`;
