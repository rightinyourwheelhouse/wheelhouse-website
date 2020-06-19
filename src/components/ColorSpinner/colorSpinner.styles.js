import styled from 'styled-components';

export const SpinnerContainer = styled.mark`
  color: ${({ color }) => color};
  font-size: inherit;
  background: none;

  div,
  p,
  span,
  h1,
  h2 {
    color: ${({ color }) => color};
  }

  svg {
    path {
      fill: ${({ color }) => color};
    }
  }
`;
