import styled, { css } from 'styled-components';

import breakpoints from '~styles/breakpoints';
import spacing from '~styles/spacing';

export default styled.div`
  --direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};

  width: 100%;
  display: flex;
  flex-direction: var(--direction);
  justify-content: space-between;
  flex: 1;
  margin-bottom: ${spacing.default};

  > * {
    width: 100%;
    margin-bottom: 2%;
    margin-bottom: ${spacing.default};
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    --direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

    flex-direction: var(--direction);

    > *:first-child {
      ${({ reverse }) => {
    if (reverse) {
      return css`
            margin-left: 2%;
          `;
    }
    return css`
          margin-right: 2%;
        `;
  }}
    }

    > *:last-child {
      ${({ reverse }) => {
    if (reverse) {
      return css`
            margin-right: 2%;
          `;
    }
    return css`
          margin-left: 2%;
        `;
  }}
    }
  }
`;
