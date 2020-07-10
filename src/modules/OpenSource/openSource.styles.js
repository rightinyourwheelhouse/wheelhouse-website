import styled from 'styled-components';

import spacing from '~styles/spacing';

export const OpenSourceContainer = styled.div`
  text-align: center;

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
