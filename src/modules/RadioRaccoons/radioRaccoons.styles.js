import styled from 'styled-components';

import spacing from '~styles/spacing';

export const OuterContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    margin: 0 auto ${spacing.default} auto;
  }

  p {
    font-size: 1.7rem;
  }

  svg {
    max-width: 200px;
  }
`;
