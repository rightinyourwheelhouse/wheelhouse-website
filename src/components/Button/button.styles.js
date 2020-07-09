import styled, { keyframes } from 'styled-components';

import fonts from '~styles/fonts';

const pulse = (color) => keyframes`
 0% {
   box-shadow: 0 0 0 0 ${color};
 }
`;

export const ButtonContainer = styled.div`
  --background: ${({ background }) => background};
  --backgroundHover: ${({ backgroundHover }) => backgroundHover};
  --foreground: ${({ color }) => color};
  --foregroundHover: ${({ colorHover }) => colorHover};

  > div,
  .btn {
    background: var(--background);
    border: none;
    border-radius: 2px;
    color: var(--foreground);
    cursor: pointer;
    display: inline-block;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    padding: 0 25px 0;
    font-family: ${fonts.family};
    position: relative;
    text-decoration: none;
    transition-duration: 0.1s;
    transition-timing-function: ease;

    &:hover {
      color: var(--foregroundHover);
      background: var(--backgroundHover);
      animation: 0.6s ${({ backgroundHover }) => pulse(backgroundHover)};
      box-shadow: 0 0 0 1em rgba(0, 0, 0, 0);
      animation-delay: 0.1s;
    }

    &:focus {
      background: var(--background);
      color: var(--foreground);
      filter: brightness(170%);
      transition: all 0.3s;
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
