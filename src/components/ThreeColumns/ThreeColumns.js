import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export default styled.div`
  display: grid;
  gap: var(--spacing-default);

  @media screen and (min-width: ${breakpoints.medium}) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
`;
