import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const CardContainer = styled.div`
  align-items: flex-start;
  background: ${({ background }) => background};
  color: ${({ foreground }) => foreground};
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s;
  margin: 40px 0;

  &:hover {
    transform: scale(1.02);
  }

  .body {
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .body,
  div {
    height: 100%;
    width: 100%;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 0.8rem;
  }

  h3 {
    font-size: 1.1rem;
  }
  @media screen and (min-width: ${breakpoints.medium}) {
    flex-direction: row;

    .body {
      padding: 38px;
    }
    height: 500px;

    h2 {
      font-size: 2.7rem;
    }
  }
`;
