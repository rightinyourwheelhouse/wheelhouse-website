import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export default styled.div`
  --direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
  --first-column-width: ${({ firstColumnWidth }) => firstColumnWidth || '45%'};

  @media screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(--spacing-large) / 2 * -1);
    flex-direction: var(--direction);

    > * {
      margin: calc(var(--spacing-large) / 2);
      flex-basis: var(--first-column-width);
      flex-grow: 1;

      &:last-child {
        flex-basis: 0;
        flex-grow: 999;
      }
    }
  }
`;
