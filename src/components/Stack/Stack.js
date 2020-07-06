import styled from 'styled-components';

import spacing from '~styles/spacing';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    margin-top: 0;
    margin-bottom: 0;

    & + * {
      margin-top: ${({ space }) => space || spacing.default};
    }
  }
`;
