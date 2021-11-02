import styled, { css, keyframes } from 'styled-components';

const shake = () => keyframes`
    0%, 100% {
        transform: translateX(0);
    }
    20%,
    60% {
        transform: translateX(-10px);
    }
    40%,
    80% {
        transform: translateX(10px);
    }
`;

export const LabelInputContainer = styled.div`
  --width: ${({ width }) => width || '100%'};
  --foreground: ${({ color }) => color || 'var(--color-text-primary-900)'};
  --active: var(--color-text-primary-900);
  --hover: var(--color-text-primary-900);
  --error: var(--color-error);
  --spacing: 16px;
  --height: 60px;

  cursor: pointer;
  height: var(--height);
  align-items: center;
  background: var(--color-background-primary-300);
  border-radius: var(--rounded-corners);
  border: 2px solid var(--foreground);
  box-shadow: none;
  box-sizing: border-box;
  color: var(--foreground);
  display: flex;
  font-size: 17px;
  justify-content: flex-start;
  letter-spacing: 0;
  min-width: 100px;
  max-width: var(--width);
  outline: none;
  overflow: hidden;
  position: relative;
  text-align: left;
  transition: all 0.3s ease;
  will-change: transform;

  &:hover {
    background: var(--color-background-primary-400);
  }

  ${({ padding }) =>
    padding &&
    css`
      padding: 0 var(--spacing);
    `};

  input {
    padding: 0 var(--spacing);
    height: var(--height);
  }

  &.active {
    border: 2px solid var(--active);
  }

  &.error {
    animation: 0.5s ${shake};
    border: 2px solid var(--error);
  }

  &.valid {
    border: 2px solid var(--active);
  }

  &:disabled {
    opacity: 0.5;
  }
`;
