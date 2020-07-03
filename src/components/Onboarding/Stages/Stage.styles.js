import styled from 'styled-components';

export const StageContainer = styled.div`
  position: absolute;

  left: calc(100vw * ${({ position }) => position});
`;
