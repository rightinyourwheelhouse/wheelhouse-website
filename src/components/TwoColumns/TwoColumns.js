import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export default styled.div`
  --direction: ${({ reversed }) => (reversed ? 'column-reverse' : 'column')};

  width: 100%;
  display: flex;
  flex-direction: var(--direction);
  justify-content: space-between;
  flex: 1;
  margin-bottom: var(--spacing-default);

  > * {
    width: 100%;
    margin-bottom: 2%;
    margin-bottom: var(--spacing-default);

    > div, > ul {
      &:first-child {
        margin-top: 0 !important;
      }
    }
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    flex-direction: row;

    > *:first-child {
      margin-right: 2%;
    }

    > *:last-child {
      margin-left: 2%;
    }
  }
`;
