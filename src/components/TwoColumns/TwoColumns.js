import styled from 'styled-components';

export default styled.div`
  --direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
  --first-column-width: ${({ firstColumnWidth }) => firstColumnWidth || '45%'};

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
      min-width: calc(60% - var(--spacing-large));
    }
  }
`;
