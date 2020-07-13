import styled from 'styled-components';

import spacing from '~styles/spacing';

export const StageContainer = styled.div`
  height: 270px;
  margin-bottom: 40px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;

  > div {
    margin-bottom: ${spacing.default};
  }
`;
