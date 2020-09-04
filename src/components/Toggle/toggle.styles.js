import styled from 'styled-components';

const toggleHeight = '30px';

export const ToggleLabel = styled.label`
  display: inline-block;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: ${toggleHeight};
  background: var(--color-background-primary-800);
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.5;
  }

  span {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 25px;
    height: 25px;
    border-radius: 45px;
    transition: 0.2s;
    background: var(--color-background-primary-900);
  }

  &:active span {
    width: 40px;
  }
`;

export const ToggleInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + ${ToggleLabel} {
    background: var(--color-primary);

    span {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;
