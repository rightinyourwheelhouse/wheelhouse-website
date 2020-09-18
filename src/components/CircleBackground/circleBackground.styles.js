import styled from 'styled-components';

export const CircleBackgroundContainer = styled.div`
  --foreground: ${({ foreground }) => foreground};
  --background: ${({ background }) => background};
  --size: ${({ size }) => size};

  position: relative;
  display: flex;
  width: var(--size);
  height: var(--size);
  align-items: center;
  justify-content: center;
  background-color: var(--background);
  color: var(--foreground);
  border-radius: 50%;

  svg {
    path {
      fill: currentColor;
    }
  }
`;
