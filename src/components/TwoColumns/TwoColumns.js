import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  > * {
    width: 100%;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    flex-direction: row;

    &:first-child {
      margin-right: 2%;
    }

    &:last-child {
      margin-left: 2%;
    }
  }
`;
