import styled, { css } from 'styled-components';

export const LabelInput = styled.div`
   --width: ${({ width }) => width};

  width: 100%;
  max-width: var(--width);
`;

export const Label = styled.label`
  box-sizing: border-box;
  position: absolute;
  color: var(--color-text-primary-900);
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
  width: 100%;

  &::placeholder {
    color: var(--color-primary-text-700);
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: opacity 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  }
`;
