import styled, { css } from 'styled-components';

import colors from '../../../styles/colors';

export const LabelInput = styled.div`
   --width: ${({ width }) => width};

  width: 100%;
  max-width: var(--width);
`;

export const LabelInputContainer = styled.div`
  --foreground: ${colors.textPrimary};
  --active: ${colors.accent};
  --hover: ${colors.accent};
  --error: ${colors.error};

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
  outline: none;
  overflow: hidden;
  position: relative;
  text-align: left;
  transition: all 0.3s ease;
  will-change: transform;

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

export const Label = styled.label`
  box-sizing: border-box;
  position: absolute;
  color: #000;
  top: 50%;
  left: 16px;
  transition: all 0.2s ease-in-out;
  transform-origin: left top;
  font-size: 1em;
  cursor: text;
  pointer-events: none;
  width: 66.6%;
  transform: ${({ active }) => (active ? 'translate3d(0, -25px, 0)' : 'translateY(-50%)')};
  z-index: 2;

  ${({ active }) => active
    && css`
      color: #6D7278;
      font-size: 10px;
    `}
`;

export const InputField = styled.input`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  font-size: 1em;
  height: 60px;
  padding: 0 16px;
  width: 100%;

  &::placeholder {
    color: #9b9b9b;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: opacity 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  }
`;
