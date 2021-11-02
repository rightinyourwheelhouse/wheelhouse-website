import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export default styled.div`
  --direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
  --first-column-width: ${({ firstColumnWidth }) => firstColumnWidth || '45%'};

  > *:first-child {
    margin-top: var(--spacing-large);
    margin-bottom: var(--spacing-large);
  }

  > *:last-child {
    margin-top: var(--spacing-large);
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(--spacing-large) / 2 * -1);
    flex-direction: var(--direction);

    > *:first-child {
      margin-bottom: unset;
    }

    > * {
      margin: calc(var(--spacing-large) / 2);
      flex-basis: var(--first-column-width);
      flex-grow: 1;

      &:last-child {
        margin: calc(var(--spacing-large) / 2);
        flex-basis: 0;
        flex-grow: 999;
      }
    }
  }
`;
