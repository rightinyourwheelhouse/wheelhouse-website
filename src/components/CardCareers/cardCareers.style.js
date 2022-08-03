import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const CardContainer = styled.div`
  align-items: flex-start;
  background: ${({ background }) => background};
  color: ${({ foreground }) => foreground};
  display: flex;
  flex-direction: column;
  padding: 32px 20px;
  width: 100%;
  overflow: hidden;
  height: 200px;
  justify-content: space-between;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.02);
  }

  h2 {
    font-size: 3rem;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
  }

  h3 {
  }
  @media screen and (min-width: ${breakpoints.medium}) {
    padding: 52px 32px;
    height: 400px;
    h2 {
      width: 40%;
    }
  }
`;
