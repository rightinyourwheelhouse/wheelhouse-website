import styled from 'styled-components';

import spacing from '~styles/spacing';

export const StageContainer = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  transition: opacity 0.2s ease-in-out;

  > div {
    margin-bottom: ${spacing.column};
  }
`;
