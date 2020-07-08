import styled from 'styled-components';

import colors from '~styles/colors';
import breakpoints from '~styles/breakpoints';
import spacing from '~styles/spacing';

export default styled.div`
  --background: ${({ background }) => background || colors.backgroundPrimary};
  --height: ${({ height }) => height || '300px'};
  --itemWidth: ${({ itemWidth }) => itemWidth || 'auto'};
  --space: ${({ space }) => space || spacing.default};

  background: var(--background);
  display: flex;
  align-items: center;
  height: var(--height);
  overflow-x: auto;
  overflow-y: hidden;
  min-width: 100vw;
  max-width: 100%;
  padding: 5px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    height: 0rem;
  }

  > * {
    flex: 0 0 var(--itemWidth);
  }

  > img {
    height: 100%;
    flex-basis: auto;
    width: auto;
  }

  > * + * {
    margin-left: var(--space);
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    padding: ${spacing.default};

    > * + * {
      margin-left: var(--space);
    }
  }
`;
