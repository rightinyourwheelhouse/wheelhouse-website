import styled from 'styled-components';

import spacing from '~styles/spacing';

export const StageContainer = styled.div`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  transition: opacity 0.2s ease-in-out;

  padding: 40px 0;

  min-height: 330px;

  > div {
    margin-bottom: ${spacing.column};
  }
`;
