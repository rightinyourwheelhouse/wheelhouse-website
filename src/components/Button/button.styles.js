import styled from 'styled-components';

import fonts from '~styles/fonts';

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
    border: none;
    border: 3px solid var(--border);
    color: var(--foreground);
    cursor: pointer;
    display: inline-block;
    font-family: ${fonts.family};
    font-size: 1.25rem;
    font-weight: 500;
    padding: .75rem 1.5rem;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition-duration: 0.125s;
    transition-delay: 0.125s;
    transition-timing-function: ease;

    span {
      z-index: 99;
    }

    &:before, &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0px;
      width: 0px;
      background: var(--backgroundHover);
      z-index: -1;
    }

    &:after {
      opacity: 0.5;
      transition: width .125s ease-in-out;
    }

    &:before {
      transition: width 0.4s ease-in-out;
      transition-delay: 0.125s;
    }

    &:hover {
      color: var(--foregroundHover);
      transition: color 0.125s;
      transition-delay: 0.125s;
      border: 3px solid var(--borderHover);

      &:before, &:after {
        width: 100%;
      }

      &:after {
        transition-delay: 0.125s;
      }
    }

    &:focus {
      background: var(--background);
      color: var(--foreground);
      filter: brightness(120%);
      transition: all 0.3s;
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
