import styled from 'styled-components';

export const StageContainer = styled.div`
  margin-bottom: 40px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  transition: opacity 0.2s ease-in-out;
`;
