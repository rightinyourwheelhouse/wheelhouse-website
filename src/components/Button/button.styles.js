import styled, { keyframes } from 'styled-components';

import fonts from '../../styles/fonts';

const pulse = (color) => keyframes`
 0% {
   box-shadow: 0 0 0 0 ${color};
 }
`;

export const ButtonContainer = styled.div`
  > div,
  .btn {
    background: none;
    border: none;
    border-bottom: 4px solid ${({ color }) => color};
    color: ${({ color }) => color};
    cursor: pointer;
    display: inline-block;
    font-family: ${fonts.family};
    font-size: 1.6667rem;
    font-weight: 700;
    padding: 0.2em 0.05em;
    position: relative;
    text-decoration: none;
    transition-duration: 0.1s;
    transition-timing-function: ease;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 100%;
      right: 0;
      bottom: 0;
      left: 0;
      background: #f76d6d;
      z-index: -1;
      transition: all 0.1s cubic-bezier(0, 0.59, 1, 0.26);
    }

    &:hover {
      color: ${({ colorHover }) => colorHover};
      animation: 0.6s ${({ color }) => pulse(color)};
      box-shadow: 0 0 0 0.5em rgba(0, 0, 0, 0);
      animation-delay: 0.1s;

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: ${({ color }) => color};
        z-index: -1;
        height: auto;
        opacity: 1;
      }
    }
  }

  &.full {
    width: 100%;
    display: block;
  }

  &:disabled {
    opacity: 0.7;
  }
`;

export default ButtonContainer;
