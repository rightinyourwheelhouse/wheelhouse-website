import styled, { css } from 'styled-components';

import colors from '~styles/colors';
import spacing from '~styles/spacing';

export const LabelInputContainer = styled.div`
  --width: ${({ width }) => width || '100%'};
  --foreground: ${colors.textPrimary};
  --active: ${colors.accent};
  --hover: ${colors.accent};
  --error: ${colors.error};
  --spacing: 16px;
  --height: 60px;

  height: var(--height);
  align-items: center;
  background: #ffffff;
  border-radius: 2px;
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

  ${({ padding }) => padding
    && css`
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
    border: 2px solid var(--error);
  }

  &.valid {
    border: 2px solid var(--active);
  }

  &:disabled {
    opacity: 0.5;
  }
`;
