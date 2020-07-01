import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';

export const CardContainer = styled.div`
  align-items: flex-start;
  background: ${({ background }) => background};
  color: ${({ foreground }) => foreground};
  display: flex;
  flex-direction: column;
  padding: 16px 20px 8px 14px;
  width: 100%;

  @media screen and (min-width: ${breakpoints.medium}) {
    padding: 40px;
  }
`;
