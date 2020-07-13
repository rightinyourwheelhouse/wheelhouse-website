import styled from 'styled-components';

export const StageContainer = styled.div`
  height: 270px;
  margin-bottom: 40px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  transition: opacity 0.2s ease-in-out;
`;
