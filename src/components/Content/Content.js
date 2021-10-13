import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export default styled.div`
  --centered: ${({ centered }) => (centered ? 'center' : 'left')};

  margin-top: 5vw;
  width: 100%;
  text-align: var(--centered);

  h2,
  h1 {
    margin-bottom: var(--spacing-default);
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    width: 62vw;
    max-width: 900px;
  }
`;
