import styled, { keyframes } from 'styled-components';

import breakpoints from '~styles/breakpoints';

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
  --border: ${({ border }) => border};
  --borderHover: ${({ borderHover }) => borderHover};

  > div,
  .btn {
    align-items: center;
    background: var(--background);
    border-radius: 3px;
    border: 1px solid var(--border);
    color: var(--foreground);
    cursor: pointer;
    display: inline-block;
    font-family: var(--font-family);
    font-size: .8rem;
    font-weight: 700;
    letter-spacing: .2rem;
    line-height: 1.1rem;
    padding: 16px 32px;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition-duration: 0.1s;
    transition-timing-function: ease;

    &:hover {
      color: var(--foregroundHover);
      background: var(--backgroundHover);
      border: 1px solid var(--borderHover);
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
