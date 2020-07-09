import styled from 'styled-components';

export const SummaryContainer = styled.div``;

export const Title = styled.p`
  font-size: 1.7em;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    padding-left: 0;
    font-size: 1.7em;

    &.disabled {
      opacity: 0.6;
      text-decoration: line-through;
    }
  }
`;
